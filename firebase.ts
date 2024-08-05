import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByNErl9wbrWkm50KglaxNlYuHaY1c-nR8",
  authDomain: "futurerahma-6f969.firebaseapp.com",
  projectId: "futurerahma-6f969",
  storageBucket: "futurerahma-6f969.appspot.com",
  messagingSenderId: "368804893838",
  appId: "1:368804893838:web:d264d73e3e5212132a25df",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
