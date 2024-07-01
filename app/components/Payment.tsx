"use client";

import { FetchPort } from "../adapters/fetchAdapter";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { PaymentMethods } from "./PaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";
import { DonationCheckbox } from "./DonationCheckbox";

export const Payment = ({
  amount,
  fetchAdapter,
  countryCode,
}: {
  amount: number;
  fetchAdapter: FetchPort;
  countryCode: string;
}) => {
  const { paymentMethods } = usePaymentMethods(fetchAdapter);
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    countryCode,
  );
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, countryCode)}
      />
      <button>
        {countryCode === "JP" ? "¥" : "$"}${total}
      </button>
    </div>
  );
};

const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  countryCode: string,
) => {
  const currencySign = countryCode === "JP" ? "¥" : "$";
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${currencySign}${tip} to charity.`;
};
