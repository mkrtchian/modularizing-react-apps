import { render, screen } from "@testing-library/react";
import Home from "./page";

it("displays the main page", async () => {
  render(<Home fetchAdapter={fetchMock} />);
  const heading = await screen.findByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("My app");
});

// eslint-disable-next-line @typescript-eslint/require-await
async function fetchMock() {
  return {
    // eslint-disable-next-line @typescript-eslint/require-await
    json: async () => [
      { name: "credit card", fee: 0.03 },
      { name: "paypal", fee: 0.05 },
    ],
  };
}
