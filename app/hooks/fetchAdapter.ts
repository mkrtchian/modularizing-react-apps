import { RemotePaymentMethod } from "../types";

export type FetchPort = (url: string) => Promise<FetchResponse>;

type FetchResponse = {
  json: () => Promise<RemotePaymentMethod[]>;
};
