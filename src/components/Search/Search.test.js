import { render, cleanup, screen } from "@testing-library/react";
import Search from "./index";

afterEach(cleanup);

const setValue = jest.fn();

describe("<Search/>", () => {
  it("renders the component", () => {
    const { asFragment } = render(
      <Search setValue={setValue} placeholder="Search something" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the input", () => {
    render(<Search setValue={setValue} placeholder="Search something" />);
    expect(screen.getByPlaceholderText("Search something")).toBeInTheDocument();
  });
});
