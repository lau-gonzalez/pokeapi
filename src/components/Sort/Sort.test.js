import { render, cleanup, screen } from "@testing-library/react";
import Sort from "./index";

afterEach(cleanup);

const sortCards = jest.fn();

describe("<Sort/>", () => {
  it("renders the component", () => {
    const { asFragment } = render(<Sort sortCards={sortCards} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the sort by selector", () => {
    render(<Sort sortCards={sortCards} />);
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("Sort By")).toBeInTheDocument();
  });

  it("should render the order selector", () => {
    render(<Sort sortCards={sortCards} />);
    expect(screen.getByText("Ascendant")).toBeInTheDocument();
    expect(screen.getByText("Order")).toBeInTheDocument();
  });
});
