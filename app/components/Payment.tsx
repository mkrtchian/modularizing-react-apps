"use client";

import { FetchPort } from "../hooks/fetchAdapter";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";

export const Payment = ({
  amount,
  fetchAdapter,
}: {
  amount: number;
  fetchAdapter: FetchPort;
}) => {
  const { paymentMethods } = usePaymentMethods(fetchAdapter);
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};
