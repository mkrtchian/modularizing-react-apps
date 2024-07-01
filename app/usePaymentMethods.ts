"use client";

import { useEffect, useState } from "react";
import { RemotePaymentMethod, remotePaymentMethodsSchema } from "./Payment";
import { PaymentMethod } from "./PaymentMethod";

export function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const response = await fetch(
        "https://online-ordering.com/api/payment-methods",
      );
      const methods = remotePaymentMethodsSchema.parse(await response.json());
      setPaymentMethods(convertPaymentMethods(methods));
    };
    void fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
}

function convertPaymentMethods(methods: RemotePaymentMethod[]) {
  if (methods.length === 0) {
    return [];
  }
  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method),
  );
  extended.push(new PaymentMethod({ name: "cash" }));
  return extended;
}
