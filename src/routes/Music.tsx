import styles from "./styles/Music.module.scss";

import Layout from "../components/layout/Layout";

import LoveHateMe from "../assets/images/love&hate-me.jpeg";
import Swaggin from "../assets/images/swaggin&saucin.jpeg";
import FastCar from "../assets/images/fast-car.jpeg";
import MoneyLong from "../assets/images/money-long.jpeg";
import LookAtMy from "../assets/images/look-at-my.jpeg";
import DontNeedThat from "../assets/images/i-dont-need-that.jpeg";

export default function Music() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.musicContainer}>
          <div className={styles.musicItem}>
            <a
              href="https://open.spotify.com/album/0kH3VmqAlXuIvncKdv4epj?si=DQE380bgQnK8ruUcJhw26A"
              target="_blank"
              className={`${styles.musicItem} link`}
            >
              <img src={LoveHateMe} className={styles.musicImage} />
              <text className={styles.musicTitle}>Love & Hate Me</text>
            </a>
          </div>
          <div className={styles.musicItem}>
            <a
              href="https://open.spotify.com/album/4vLd4XxcGmKNGqBUmbzA7W?si=i9L_1u8-QqKN_1TfOVnn9w"
              target="_blank"
              className={`${styles.musicItem} link`}
            >
              <img src={Swaggin} className={styles.musicImage} />
              <text className={styles.musicTitle}>
                Swaggin & Saucin (Big Racks)
              </text>
            </a>
          </div>
          <div className={styles.musicItem}>
            <a
              href="https://open.spotify.com/album/2bO7HwvLILDHA0Aem47Q1w?si=uf7NC4zHRD-Ac19TX8FiDg"
              target="_blank"
              className={`${styles.musicItem} link`}
            >
              <img src={LookAtMy} className={styles.musicImage} />
              <text className={styles.musicTitle}>
                Look At My! wit Destroy Lonely
              </text>
            </a>
          </div>

          <div className={styles.musicItem}>
            <a
              href="https://open.spotify.com/album/1aNvHdQVh0j42hGbc06n8N?si=npuvg7WVS2qt_wZ7pm5xpg"
              target="_blank"
              className={`${styles.musicItem} link`}
            >
              <img src={MoneyLong} className={styles.musicImage} />
              <text className={styles.musicTitle}>
                Money Long / Fine Ho&lt;3
              </text>
            </a>
          </div>

          <div className={styles.musicItem}>
            <a
              href="https://open.spotify.com/album/0b5t1FPYXU0rH0TZN5TG1j?si=5Zfd9FBBR92n5yt1dt2NpQ"
              target="_blank"
              className={`${styles.musicItem} link`}
            >
              <img src={DontNeedThat} className={styles.musicImage} />
              <text className={styles.musicTitle}>I Don't Need That</text>
            </a>
          </div>
          <div className={styles.musicItem}>
            <a
              href="https://open.spotify.com/album/1vgEYm1w8UXTHboMddfPGX?si=2aQ3TrrqTxmILT_om0fsvg"
              target="_blank"
              className={`${styles.musicItem} link`}
            >
              <img src={FastCar} className={styles.musicImage} />
              <text className={styles.musicTitle}>Fast Car</text>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
