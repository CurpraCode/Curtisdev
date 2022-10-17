import React, { Suspense } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Loader = dynamic(() => import("../components/common/Loader"));

const ContactForm = dynamic(() => import("../components/contact/ContactForm"), {
	suspense: true,
	ssr: true,
});

const contact: NextPage = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			transition={{ linear: [0.17, 0.67, 0.83, 0.97] }}
		>
			<div className={styles.container}>
				<Layout>
					<Suspense fallback={<Loader />}>
						<ContactForm />
					</Suspense>
				</Layout>
			</div>
		</motion.div>
	);
};

export default contact;
