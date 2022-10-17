import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../layouts";
import styles from "../styles/Home.module.css";
import { Suspense } from "react";
const AboutComp = dynamic(() => import("../components/about/AboutComp"));
const Loader = dynamic(() => import("../components/common/Loader"));

const About: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Curtis|Developer-About Me</title>
				<meta
					name="description"
					content="Portfolio of a software engineer, curpra code developer.... code it, debug it."
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Layout>
				<Suspense fallback={<Loader />}>
					<main className={styles.main}>
						<AboutComp />
					</main>
				</Suspense>
			</Layout>
		</div>
	);
};

export default About;
