import { Payment } from "./components/Payment";
import { FetchPort } from "./hooks/fetchAdapter";
import styles from "./page.module.css";

export default function Home(
  { fetchAdapter }: { fetchAdapter: FetchPort } = { fetchAdapter: fetch },
) {
  return (
    <main className={styles.main}>
      <h1>My app</h1>
      <section>
        <Payment amount={10} fetchAdapter={fetchAdapter} />
      </section>
    </main>
  );
}
