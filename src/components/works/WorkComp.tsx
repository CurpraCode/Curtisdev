import React from "react";
import { Box, Flex, Image, Tooltip, useColorMode } from "@chakra-ui/react";
import Footer from "../common/Footer";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiApollographql,
	SiGraphql,
	SiNestjs,
	SiGit,
	SiGithub,
	SiExpo,
	SiNodedotjs,
} from "react-icons/si";
import styles from "../../styles/Home.module.css";
const WorkComp = () => {
	const { colorMode } = useColorMode();
	const colorSelect = colorMode === "dark" ? "theme.100" : "theme.350";
	return (
		<Box
			mt="6rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Flex flexDir={{ base: "column", lg: "row" }}>
				<Box
					className={styles.boxanime}
					boxShadow="lg"
					rounded="md"
					p="1rem 1.2rem"
					mr={{ base: "0", lg: "1rem" }}
				>
					<Image
						src="https://curtisdev.netlify.app/static/media/dataware.d016f1cb.png"
						alt="Dataware"
						rounded="md"
					/>
					<Flex
						display="none"
						opacity="0"
						position="absolute"
						justifyContent="space-evenly"
						bottom="5px"
					>
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.3rem 0.4rem" borderRadius="0.6rem">
								<SiHtml5 color="#E34F26" size="30px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
								<SiCss3 color="#1572B6" size="30px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
								<SiJavascript color="#F7DF1E" size="30px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
								<SiReact color="#61DAFB" size="30px" />
							</Box>
						</Tooltip>
					</Flex>
				</Box>
				<Box
					boxShadow="lg"
					rounded="md"
					p="1rem 1.2rem"
					mr={{ base: "0", lg: "1rem" }}
					className={styles.boxanime}
				>
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="Dataware"
						rounded="md"
					/>
					<Flex
						opacity="0"
						position="absolute"
						justifyContent="space-evenly"
						bottom="60px"
						left="30px"
						transform="translate(50%, 50%)"
						transition="all 0.6s ease"
						_hover={{
							opacity: 1,
							transform: "translate(0,0)",
						}}
					>
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.3rem 0.4rem" borderRadius="0.3rem">
								<SiHtml5 color="#E34F26" size="15px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.3rem 0.4rem" borderRadius="0.3rem">
								<SiCss3 color="#1572B6" size="15px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.3rem 0.4rem" borderRadius="0.3rem">
								<SiJavascript color="#F7DF1E" size="15px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.3rem 0.4rem" borderRadius="0.3rem">
								<SiReact color="#61DAFB" size="15px" />
							</Box>
						</Tooltip>
					</Flex>
				</Box>

				<Box
					boxShadow="lg"
					rounded="md"
					p="1rem 1.2rem"
					className={styles.boxanime}
				>
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
			</Flex>
			<Flex flexDir={{ base: "column", lg: "row" }}>
				<Box
					boxShadow="lg"
					rounded="md"
					p="1rem 1.2rem"
					mr={{ base: "0", lg: "1rem" }}
					className={styles.boxanime}
				>
					<Image
						src="https://curtisdev.netlify.app/static/media/dataware.d016f1cb.png"
						alt="Dataware"
						rounded="md"
					/>
				</Box>
				<Box
					boxShadow="lg"
					rounded="md"
					p="1rem 1.2rem"
					className={styles.boxanime}
				>
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
				<Box
					boxShadow="lg"
					rounded="md"
					p="1rem 1.2rem"
					className={styles.boxanime}
				>
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
			</Flex>
			<Footer />
		</Box>
	);
};

export default WorkComp;
