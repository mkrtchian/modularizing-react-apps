"use client";

import { useEffect, useState } from "react";
import { PaymentMethod } from "../models/PaymentMethod";
import { RemotePaymentMethod, remotePaymentMethodsSchema } from "../types";
import { FetchPort } from "../adapters/fetchAdapter";

export function usePaymentMethods(fetchAdapter: FetchPort) {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    void fetchPaymentMethods(fetchAdapter).then((methods) =>
      setPaymentMethods(methods),
    );
  }, [fetchAdapter]);

  return {
    paymentMethods,
  };
}

const fetchPaymentMethods = async (fetchAdapter: FetchPort) => {
  const response = await fetchAdapter(
    "https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods?countryCode=AU",
  );
  const methods = remotePaymentMethodsSchema.parse(await response.json());
  return convertPaymentMethods(methods);
};

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
