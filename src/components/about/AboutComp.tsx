/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
	Box,
	Flex,
	Text,
	Button,
	Tooltip,
	useColorMode,
	Heading,
	HStack,
	Image,
} from "@chakra-ui/react";
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
import { MdWork } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Link from "next/link";
import { UilArrowRight } from "@iconscout/react-unicons";
import Footer from "../common/Footer";

const AboutComp = () => {
	const { colorMode } = useColorMode();
	const colorSelect = colorMode === "dark" ? "theme.100" : "theme.350";
	return (
		<Box
			maxWidth="1140px"
			m="15rem auto 0"
			mt="6rem"
			mb="4rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Heading mb="1.5rem" fontSize={["22", "28", "38"]}>
				Hi, I'm Curtis Oyakoya. <br /> A software engineer passionately creating
				unique <br /> web and mobile experiences.
			</Heading>
			<Text fontSize={["12", "18", "18"]}>
				I am a creative Software Engineer. Passionately working remotely and
				looking for an opportunity to work at a product-driven company to solve
				exciting problems that delight end-users. I also love to code things
				from scratch, and enjoy bringing ideas to life in the browser and native
				environment, combining the acquisition of new knowledge with independent
				work on various projects.
			</Text>
			<Button
				rounded="md"
				bg="#61DAFB"
				fontSize=".9rem"
				mt="2rem"
				p="1.2rem 1.5rem"
				rightIcon={<AiOutlineCloudDownload />}
				_hover={{
					bg: "#61DAFB",
				}}
				_active={{
					bg: "#61DAFB",
				}}
				_focus={{
					bg: "#61DAFB",
				}}
			>
				Download Resume
			</Button>
			<Text fontSize="25px" fontWeight="bolder" mt="6rem" mb="4rem">
				My Tech Stacks
			</Text>
			<Flex justifyContent="space-evenly">
				<Tooltip label="HTML" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
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
			<Flex justifyContent="space-evenly" mt="4rem">
				<Tooltip label="Nextjs" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiNextdotjs color="#000000" size="30px" />
					</Box>
				</Tooltip>

				<Tooltip label="Typescript" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiTypescript color="#3178C6" size="30px" />
					</Box>
				</Tooltip>

				<Tooltip label="Apollo Client" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiApollographql color="#311C87" size="30px" />
					</Box>
				</Tooltip>

				<Tooltip label="GraphQL" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiGraphql color="#E10098" size="30px" />
					</Box>
				</Tooltip>
				<Tooltip label="Nestjs" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiNestjs color="#E10098" size="30px" />
					</Box>
				</Tooltip>
			</Flex>
			<Flex justifyContent="space-evenly" mt="4rem">
				<Tooltip label="Nodejs" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiNodedotjs color="#339933" size="30px" />
					</Box>
				</Tooltip>
				<Tooltip label="Expo" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiExpo color="#000020" size="30px" />
					</Box>
				</Tooltip>
				<Tooltip label="Git" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiGit color="#F05032" size="30px" />
					</Box>
				</Tooltip>

				<Tooltip label="Github" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiGithub color="#181717" size="30px" />
					</Box>
				</Tooltip>
			</Flex>
			<Text fontSize="25px" fontWeight="bolder" mt="6rem">
				View my work
			</Text>
			<Box>
				<Flex mt="4rem" flexDir={{ base: "column", lg: "row" }}>
					<Box
						boxShadow="lg"
						rounded="md"
						p="1rem 1.2rem"
						mr={{ base: "0", lg: "1rem" }}
					>
						<Image
							src="https://curtisdev.netlify.app/static/media/dataware.d016f1cb.png"
							alt="Dataware"
							// width="50%"
							rounded="md"
						/>
					</Box>
					<Box boxShadow="lg" rounded="md" p="1rem 1.2rem">
						<Image
							src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
							alt="Dataware"
							// width="50%"
							rounded="md"
						/>
					</Box>
				</Flex>
				<Link href="/works">
					<Button
						rounded="md"
						bg="#61DAFB"
						fontSize=".8rem"
						mt="2rem"
						p={["0.5rem 1rem", "1rem 1.5rem", "1.5rem 2rem", "1.5rem 2rem"]}
						rightIcon={<UilArrowRight />}
						_hover={{
							bg: "#61DAFB",
						}}
						_active={{
							bg: "#61DAFB",
						}}
						_focus={{
							bg: "#61DAFB",
						}}
					>
						View More
					</Button>
				</Link>
			</Box>

			<Box
				bg="theme.300"
				mt="6rem"
				p={["1rem 2rem", "4rem 3rem", "4rem 3rem"]}
				borderRadius="1rem"
			>
				<HStack
					justifyContent="space-between"
					alignItems="center"
					flexDir={{ base: "column", lg: "row" }}
				>
					<Heading fontSize={["15", "20", "30", "30"]} mb={{ base: "1.5rem" }}>
						Interested In Working With Me?
					</Heading>
					<Flex>
						<Link href="mailto:curtsoyaks@gmail.com">
							<Button
								fontSize={[10, 15, 18, 18]}
								mr="1rem"
								borderColor="theme.350"
								borderWidth="2px"
								bg="none"
								leftIcon={<HiMail />}
							>
								Mail Me
							</Button>
						</Link>
						<Link href="/works">
							<Button
								fontSize={[10, 15, 18, 18]}
								borderColor="theme.350"
								borderWidth="2px"
								bg="none"
								leftIcon={<MdWork />}
							>
								View Project
							</Button>
						</Link>
					</Flex>
				</HStack>
			</Box>
			<Footer />
		</Box>
	);
};

export default AboutComp;
