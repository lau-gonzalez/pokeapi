import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Card from "./index";

afterEach(cleanup);

const pokemonData = {
  name: "test",
  id: 1,
  sprites: {
    front_default: "http://image.com",
  },
  types: [
    {
      type: {
        name: "type 1",
      },
    },
    {
      type: {
        name: "type 2",
      },
    },
  ],
  height: 10,
  weight: 80,
  abilities: [
    {
      ability: {
        name: "ability 1",
      },
    },
    {
      ability: {
        name: "ability 2",
      },
    },
  ],
};

describe("<Card/>", () => {
  it("renders the component", () => {
    const { asFragment } = render(<Card data={pokemonData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the title", () => {
    render(<Card data={pokemonData} />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should open the modal when user clicks on View Details", () => {
    render(<Card data={pokemonData} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Abilities:")).toBeInTheDocument();
    expect(screen.getByText("Trainers:")).toBeInTheDocument();
  });
});
