import { render, screen } from "@testing-library/react";
import Home from "./page";

it("displays the main page", () => {
  render(<Home />);
  expect(screen.getByRole("heading")).toHaveTextContent("My app");
});
