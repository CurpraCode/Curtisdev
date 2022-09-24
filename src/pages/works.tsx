import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";

const Works: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curtis|Developer-Works</title>
        <meta
          name="description"
          content="Portfolio of a software engineer, curpra code developer.... code it, debug it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          Comming soon
        </Layout>
      </main>
    </div>
  );
};

export default Works;
