import { z } from "zod";
import { usePaymentMethods } from "./usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";

export const remotePaymentMethodsSchema = z.array(
  z.object({
    name: z.string(),
  }),
);
export type RemotePaymentMethod = z.infer<typeof remotePaymentMethodsSchema>[0];

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};
