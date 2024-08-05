import styles from "./styles/Promotions.module.scss";

import Layout from "../components/layout/Layout";
import React from "react";

import { IoArrowForward } from "react-icons/io5";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Promotions() {
  const [email, setEmail] = React.useState("");

  const contactHandler = async () => {
    setEmail("");
    if (email) {
      alert("Success! Our team has been successfully notified!");
      try {
        const docRef = await addDoc(collection(db, "emails"), {
          date: new Date(),
          email: email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Please fill out all of the fields.");
    }
  };

  return (
    <Layout>
      <main className={styles.main}>
        <text className={styles.title}>PROMOTIONS</text>
        <div className={styles.inputContainer}>
          <input
            id="email_input"
            className={styles.input}
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
          />
          <div
            className={styles.submit}
            onClick={contactHandler}
            id="submit_btn"
          >
            <IoArrowForward className={styles.submitText} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
