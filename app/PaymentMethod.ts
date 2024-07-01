import { RemotePaymentMethod } from "./Payment";

export class PaymentMethod {
  constructor(private remotePaymentMethod: RemotePaymentMethod) {}

  get provider() {
    return this.remotePaymentMethod.name;
  }

  get label() {
    if (this.provider === "cash") {
      return `Pay in ${this.provider}`;
    }
    return `Pay with ${this.provider}`;
  }

  get isDefaultMethod() {
    return this.provider === "cash";
  }
}
