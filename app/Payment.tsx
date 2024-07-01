"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

type LocalPaymentMethod = {
  provider: string;
  label: string;
};

const remotePaymentMethodsSchema = z.array(
  z.object({
    name: z.string(),
  }),
);

const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[];
}) => (
  <>
    {paymentMethods.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.provider === "cash"}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </>
);

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};

function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    [],
  );

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = "https://online-ordering.com/api/payment-methods";
      const response = await fetch(url);
      const methods = remotePaymentMethodsSchema.parse(await response.json());
      if (methods.length > 0) {
        const extended: LocalPaymentMethod[] = methods.map((method) => ({
          provider: method.name,
          label: `Pay with ${method.name}`,
        }));
        extended.push({ provider: "cash", label: "Pay in cash" });
        setPaymentMethods(extended);
      } else {
        setPaymentMethods([]);
      }
    };
    void fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
}
