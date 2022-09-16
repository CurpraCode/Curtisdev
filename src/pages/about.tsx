import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../layouts";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Curtis|Developer-About Me</title>
        <meta
          name="description"
          content="Portfolio of a software engineer, curpra code developer.... code it, debug it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}></main>
      </Layout>
    </div>
  );
};

export default About;
