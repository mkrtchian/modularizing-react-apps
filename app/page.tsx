"use client";

import { Payment } from "./components/Payment";
import { PaymentStrategyJP } from "./models/PaymentStrategy";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My app</h1>
      <section>
        <Payment
          amount={10}
          fetchAdapter={fetch}
          strategy={new PaymentStrategyJP()}
        />
      </section>
    </main>
  );
}
