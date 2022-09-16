import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("../components/home/Intro"), {
  suspense: true,
  ssr: true,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curtis|Developer</title>
        <meta
          name="description"
          content="Portfolio of a software engineer, curpra code developer.... code it, debug it."
        />
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Intro />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
