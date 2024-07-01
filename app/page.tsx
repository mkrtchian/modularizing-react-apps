"use client";

import { Payment } from "./components/Payment";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My app</h1>
      <section>
        <Payment amount={10} fetchAdapter={fetch} countryCode="JP" />
      </section>
    </main>
  );
}
