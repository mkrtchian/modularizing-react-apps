import { RemotePaymentMethod } from "../types";

export type FetchPort = (url: string) => Promise<FetchResponse>;

type FetchResponse = {
  json: () => Promise<RemotePaymentMethod[]>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export async function fetchMock() {
  return {
    // eslint-disable-next-line @typescript-eslint/require-await
    json: async () => [
      { name: "credit card", fee: 0.03 },
      { name: "paypal", fee: 0.05 },
    ],
  };
}
