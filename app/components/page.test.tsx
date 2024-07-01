import { render, screen } from "@testing-library/react";
import { Payment } from "./Payment";
import { fetchMock } from "../adapters/fetchAdapter";

it("displays the main page", async () => {
  render(<Payment amount={10} fetchAdapter={fetchMock} countryCode="JP" />);
  const heading = await screen.findByRole("heading", { level: 3 });
  expect(heading).toHaveTextContent("Payment");
});
