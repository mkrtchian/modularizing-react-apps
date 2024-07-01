export interface PaymentStrategy {
  currencySign: string;

  getRoundUpAmount(amount: number): number;

  getTip(amount: number): number;
}

export class PaymentStrategyAU implements PaymentStrategy {
  get currencySign(): string {
    return "$";
  }

  getRoundUpAmount(amount: number): number {
    return Math.floor(amount + 1);
  }

  getTip(amount: number): number {
    return parseFloat((this.getRoundUpAmount(amount) - amount).toPrecision(10));
  }
}

export class PaymentStrategyJP implements PaymentStrategy {
  get currencySign(): string {
    return "¥";
  }

  getRoundUpAmount(amount: number): number {
    return Math.floor(amount / 100 + 1) * 100;
  }

  getTip(amount: number): number {
    return parseFloat((this.getRoundUpAmount(amount) - amount).toPrecision(10));
  }
}
