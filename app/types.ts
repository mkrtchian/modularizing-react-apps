import { z } from "zod";

export const remotePaymentMethodsSchema = z.array(
  z.object({
    name: z.string(),
  }),
);
export type RemotePaymentMethod = z.infer<typeof remotePaymentMethodsSchema>[0];
