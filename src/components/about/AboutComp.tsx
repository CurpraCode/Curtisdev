/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
} from "react-icons/si";

const AboutComp = () => {
	return (
		<Box
			mt="8rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Text fontSize="20px">
				Hi, I'm Oyakoya Curtis. A software engineer with a fervor for creating
				unique web experiences.
			</Text>
			<Text fontSize="30px" fontWeight="bolder" mt="1rem" mb="1rem">
				My Tech Stacks
			</Text>
			<Flex justifyContent="space-evenly">
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiHtml5 color="#E34F26" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiCss3 color="#1572B6" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiJavascript color="#F7DF1E" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiReact color="#61DAFB" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiNextdotjs color="#000000" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiTypescript color="#3178C6" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiApollographql color="#311C87" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiGraphql color="#E10098" size="30px" />
				</Box>
				<Box bg="white" p="0.8rem 0.9rem" borderRadius="0.6rem">
					<SiNestjs color="#E10098" size="30px" />
				</Box>
			</Flex>
		</Box>
	);
};

export default AboutComp;
