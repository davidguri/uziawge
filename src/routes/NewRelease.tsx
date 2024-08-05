import styles from "./styles/NewRelease.module.scss";

import Layout from "../components/layout/Layout";

export default function NewRelease() {
  return (
    <Layout>
      <main className={styles.main}>
        <text className={styles.title}>MOLLY WORLD</text>
        coming soon...
      </main>
    </Layout>
  );
}
