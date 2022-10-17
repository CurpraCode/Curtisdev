import type { NextPage } from "next";
import React, { Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const Loader = dynamic(() => import("../components/common/Loader"));
const Intro = dynamic(() => import("../components/home/Intro"), {
	suspense: true,
	ssr: true,
});

const Home: NextPage = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			transition={{ linear: [0.17, 0.67, 0.83, 0.97] }}
		>
			<div className={styles.container}>
				<Head>
					<title>Curtis|Developer</title>
					<meta
						name="description"
						content="Portfolio of a software engineer, curpra code developer.... code it, debug it."
					/>
					<link rel="icon" href="/icon-192x192.png" />
				</Head>
				{/* <Flex
					direction={"column"}
					align="center"
					justify={"center"}
					flex="1"
					width="100%"
					bg={useColorModeValue("theme.100", "theme.500")}
				> */}
				<Layout>
					<Suspense fallback={<Loader />}>
						<main className={styles.main}>
							<Intro />
						</main>
					</Suspense>
				</Layout>
				{/* </Flex> */}
			</div>
		</motion.div>
	);
};

export default Home;
