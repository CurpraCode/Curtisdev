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
					<Flex className={styles.boxflex} justifyContent="space-evenly">
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiHtml5 color="#E34F26" size="25px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiCss3 color="#1572B6" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiJavascript color="#F7DF1E" size="25px" />
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
					<Flex className={styles.boxflex} justifyContent="space-evenly">
						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiJavascript color="#F7DF1E" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								borderRadius="0.3rem"
								mr="1rem"
							>
								<SiReact color="#61DAFB" size="25px" />
							</Box>
						</Tooltip>
						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiNextdotjs color="#000000" size="25px" />
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
					<Flex className={styles.boxflex} justifyContent="space-evenly">
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiHtml5 color="#E34F26" size="25px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiCss3 color="#1572B6" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiJavascript color="#F7DF1E" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.5rem 0.7rem" borderRadius="0.3rem">
								<SiReact color="#61DAFB" size="25px" />
							</Box>
						</Tooltip>
					</Flex>
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
					<Flex className={styles.boxflex} justifyContent="space-evenly">
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiHtml5 color="#E34F26" size="25px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiCss3 color="#1572B6" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiJavascript color="#F7DF1E" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.5rem 0.7rem" borderRadius="0.3rem">
								<SiReact color="#61DAFB" size="25px" />
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
					<Flex className={styles.boxflex} justifyContent="space-evenly">
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiHtml5 color="#E34F26" size="25px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiCss3 color="#1572B6" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiJavascript color="#F7DF1E" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.5rem 0.7rem" borderRadius="0.3rem">
								<SiReact color="#61DAFB" size="25px" />
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
					<Flex className={styles.boxflex} justifyContent="space-evenly">
						<Tooltip label="HTML" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiHtml5 color="#E34F26" size="25px" />
							</Box>
						</Tooltip>
						<Tooltip label="CSS" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiCss3 color="#1572B6" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="JavaScript" placement="top" borderRadius="4">
							<Box
								bg={colorSelect}
								p="0.5rem 0.7rem"
								mr="1rem"
								borderRadius="0.3rem"
							>
								<SiJavascript color="#F7DF1E" size="25px" />
							</Box>
						</Tooltip>

						<Tooltip label="Reactjs" placement="top" borderRadius="4">
							<Box bg={colorSelect} p="0.5rem 0.7rem" borderRadius="0.3rem">
								<SiReact color="#61DAFB" size="25px" />
							</Box>
						</Tooltip>
					</Flex>
				</Box>
			</Flex>
			<Footer />
		</Box>
	);
};

export default WorkComp;
