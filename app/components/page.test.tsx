import { render, screen } from "@testing-library/react";
import { Payment } from "./Payment";
import { fetchMock } from "../adapters/fetchAdapter";
import { PaymentStrategyJP } from "../models/PaymentStrategy";

it("displays the main page", async () => {
  render(
    <Payment
      amount={10}
      fetchAdapter={fetchMock}
      strategy={new PaymentStrategyJP()}
    />,
  );
  const heading = await screen.findByRole("heading", { level: 3 });
  expect(heading).toHaveTextContent("Payment");
});
