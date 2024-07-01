"use client";

import { FetchPort } from "../adapters/fetchAdapter";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";

export const Payment = ({
  amount,
  fetchAdapter,
}: {
  amount: number;
  fetchAdapter: FetchPort;
}) => {
  const { paymentMethods } = usePaymentMethods(fetchAdapter);
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(amount);
  const handleChange = () => updateAgreeToDonate();
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={agreeToDonate}
          />
          <p>{formatCheckboxLabel(agreeToDonate, tip)}</p>
        </label>
      </div>
      <button>${total}</button>
    </div>
  );
};

const formatCheckboxLabel = (agreeToDonate: boolean, tip: number) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate $${tip} to charity.`;
};
