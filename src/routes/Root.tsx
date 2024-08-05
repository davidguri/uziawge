import styles from "./styles/Root.module.scss";
import Layout from "../components/layout/Layout";

import { Link } from "react-router-dom";

import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoMailOutline,
} from "react-icons/io5";
import { AiOutlineSpotify } from "react-icons/ai";

export default function Root() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <section className={styles.heroSection}>
            <div className={styles.titleContainer}>
              <Link className={"link"} to="/">
                <text className={styles.heroTitle}>
                  <span className={styles.titleBreak}>FUTURE</span>
                  <span className={styles.titleBreak}>RAHMA</span>
                </text>
              </Link>
            </div>
            <div className={styles.linksContainer}>
              <Link className={"link"} to="/music">
                <text className={styles.linkText}>MUSIC</text>
              </Link>
              <Link className={"link"} to="/merch">
                <text className={styles.linkText}>MERCH</text>
              </Link>
              <Link className={"link"} to="/promotions">
                <text className={styles.linkText}>PROMOS</text>
              </Link>
              <Link className={"link"} to="/new_release">
                <text className={styles.linkText}>MOLLY WORLD</text>
              </Link>
              <div className={styles.socialLinksContainer}>
                <a
                  href="https://www.instagram.com/futureRahma"
                  className="link"
                  target="_blank"
                  id="instagram"
                >
                  <IoLogoInstagram className={styles.socialIcon} />
                </a>
                <a
                  href="https://open.spotify.com/artist/16AIvrFqhQyhBbe7HXIWkw?autoplay=true"
                  className="link"
                  target="_blank"
                  id="spotify"
                >
                  <AiOutlineSpotify className={styles.socialIcon} />
                </a>
                <a
                  href="mailto:futurerahma@futurerahma.com"
                  className="link"
                  id="email"
                >
                  <IoMailOutline className={styles.socialIcon} />
                </a>
                <a
                  href="https://soundcloud.com/futurerahma"
                  className="link"
                  target="_blank"
                  id="soundcloud"
                >
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
