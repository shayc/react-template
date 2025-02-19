import { render, screen } from "../../tests/testUtils";
import { Home } from "./Home";

describe("Home tests", () => {
  it("should render the title", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      }),
    ).toHaveTextContent("Vite + React");
  });
});
