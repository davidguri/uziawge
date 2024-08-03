import styles from "./styles/Root.module.scss";
import Layout from "../components/layout/Layout";

import StarsBackground from "../components/global/Starry.component";

import { Link } from "react-router-dom";

import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoMailOutline,
} from "react-icons/io5";

export default function Root() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <StarsBackground />
            <div className={styles.titleContainer}>
              <Link className={"link"} to="/">
                <text className={styles.heroTitle}>
                  <span className={styles.titleBreak}>FUTURE</span>
                  <span className={styles.titleBreak}>RAHMA</span>
                </text>
              </Link>
            </div>
            <div className={styles.linksContainer}>
              <Link className={"link"} to="/ads">
                <text className={styles.linkText}>ADS</text>
              </Link>
              <Link className={"link"} to="/music">
                <text className={styles.linkText}>MUSIC</text>
              </Link>
              <Link className={"link"} to="/merch">
                <text className={styles.linkText}>MERCH</text>
              </Link>
              <Link className={"link"} to="/merch">
                <text className={styles.linkText}>FANPAGE</text>
              </Link>
              <div className={styles.socialLinksContainer}>
                <a href="https://instagram.com/" className="link">
                  <IoLogoInstagram className={styles.socialIcon} />
                </a>
                <a href="https://instagram.com/" className="link">
                  <IoMailOutline className={styles.socialIcon} />
                </a>
                <a href="https://instagram.com/" className="link">
                  <IoLogoSoundcloud className={styles.socialIcon} />
                </a>
              </div>
              <div className={styles.aboutContainer}>
                <text className={styles.aboutText}>
                  FutureRahma lorem ipsum dolor sit amet lorem ipsum dolor sit
                  amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                </text>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
