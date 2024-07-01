"use client";

import { FetchPort } from "../adapters/fetchAdapter";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";
import { DonationCheckbox } from "./DonationCheckbox";
import { PaymentStrategy } from "../models/PaymentStrategy";

export const Payment = ({
  amount,
  fetchAdapter,
  strategy,
}: {
  amount: number;
  fetchAdapter: FetchPort;
  strategy: PaymentStrategy;
}) => {
  const { paymentMethods } = usePaymentMethods(fetchAdapter);
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy,
  );
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
      />
      <button>{formatButtonLabel(strategy, total)}</button>
    </div>
  );
};

const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: PaymentStrategy,
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign}${tip} to charity.`;
};

const formatButtonLabel = (strategy: PaymentStrategy, total: number) => {
  return `${strategy.currencySign}${total}`;
};
