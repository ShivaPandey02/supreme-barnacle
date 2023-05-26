import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LoginPage } from "./auth/login";
import { useSelector } from "react-redux";
import { Account } from "./auth/profile/[name]";
import type { RootState } from "../store";

export default function Home() {
  const isSignedIn = useSelector((state: RootState) => state.userSession);
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.grid}>
          <a className={styles.card}>
            {isSignedIn.loginStatus ? <Account /> : <LoginPage />}
          </a>
        </div>
      </main>
    </div>
  );
}
