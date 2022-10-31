/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
	Box,
	Flex,
	Text,
	Button,
	Tooltip,
	useColorMode,
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
// import NextLink from "next/link";

const AboutComp = () => {
	const { colorMode } = useColorMode();
	const colorSelect = colorMode === "dark" ? "theme.100" : "theme.350";
	return (
		<Box
			mt="8rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Text fontSize="30px" fontWeight="bolder">
				Hi, I'm Oyakoya Curtis. <br /> A software engineer with a fervor for
				creating unique web experiences.
			</Text>
			<Text>
				I am a creative FullStack Engineer and Self-Proclaimed genius. I have
				always been passionate about everything related to technology and IT,
				especially the web professions, which I made my career by always giving
				the best of myself as a Web Developer. I also love to code things from
				scratch, and enjoy bringing ideas to life in the browser, combining the
				acquisition of new knowledge with independent work on various projects.
				Aside code I love watching movies and travelling to different places.
			</Text>
			<Text fontSize="25px" fontWeight="bolder" mt="2rem" mb="2rem">
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
			<Flex justifyContent="space-evenly" mt="2rem">
				<Tooltip label="Nextjs" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiNextdotjs color="#000000" size="30px" />
					</Box>
				</Tooltip>

				<Tooltip label="HTML" placement="top" borderRadius="4">
					<Box bg={colorSelect} p="0.8rem 0.9rem" borderRadius="0.6rem">
						<SiTypescript color="#3178C6" size="30px" />
					</Box>
				</Tooltip>

				<Tooltip label="HTML" placement="top" borderRadius="4">
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
			<Flex justifyContent="space-evenly" mt="2rem">
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
			<Box>View my work</Box>

			<Button>View Resume</Button>
		</Box>
	);
};

export default AboutComp;
