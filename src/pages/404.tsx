import React from "react";
import styles from "../styles/Home.module.css";
import Layout from "../layouts";
import { Center } from "@chakra-ui/react";
const Index = () => {
	return (
		<>
			<div className={styles.container}>
				<Layout>
					<Center mt="10rem">Wrong Pages</Center>
				</Layout>
			</div>
		</>
	);
};
export default Index;
