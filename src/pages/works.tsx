import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../components/common/Loader"));
const WorkComp = dynamic(() => import("../components/works/WorkComp"));

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

			<Layout>
				<main className={styles.main}>
					<Suspense fallback={<Loader />}>
						<WorkComp />
					</Suspense>
				</main>
			</Layout>
		</div>
	);
};

export default Works;
