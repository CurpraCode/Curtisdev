import {
	Button,
	Flex,
	Heading,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { Suspense } from "react";
import Loader from "../../components/common/Loader";
import styles from "../../styles/Home.module.css";
import Layout from "../../layouts";

export default function Works() {
	const router = useRouter();
	const { title } = router.query;
	return (
		<Layout>
			<Suspense fallback={<Loader />}>
				<main className={styles.main}>
					<Flex
						direction={"column"}
						align="center"
						justify={"center"}
						flex="1"
						w="100%"
						bg={useColorModeValue("theme.100", "theme.500")}
						className={styles.container}
						gap="2rem"
					>
						<Heading
							color={useColorModeValue("theme.500", "theme.100")}
							fontSize="2rem"
						>
							Coming Soon!
						</Heading>
						<NextLink href="/" passHref>
							<Button
								as={Link}
								_hover={{
									textDecoration: "none",
								}}
								bgGradient="linear(to-r, theme.300, theme.200, 'theme.600)"
								bg={"theme.300"}
								color={useColorModeValue("theme.500", "theme.100")}
								variant="solid"
							>
								Go to Home
							</Button>
						</NextLink>
					</Flex>
				</main>
			</Suspense>
		</Layout>
	);
}
