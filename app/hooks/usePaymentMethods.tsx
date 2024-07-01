"use client";

import { useEffect, useState } from "react";
import { PaymentMethod } from "../models/PaymentMethod";
import { RemotePaymentMethod, remotePaymentMethodsSchema } from "../types";
import { FetchPort } from "../adapters/fetchAdapter";

export function usePaymentMethods(fetchAdapter: FetchPort) {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const response = await fetchAdapter(
        "https://online-ordering.com/api/payment-methods",
      );
      const methods = remotePaymentMethodsSchema.parse(await response.json());
      setPaymentMethods(convertPaymentMethods(methods));
    };
    void fetchPaymentMethods();
  }, [fetchAdapter]);

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
