/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const AboutComp = () => {
	return (
		<Box
			mt="8rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Text>
				Hi, I'm Oyakoya Curtis. A software engineer with a fervor for creating
				unique web experiences.
			</Text>
			<Box>
				<Text>Skills</Text>
			</Box>

			<Flex></Flex>
		</Box>
	);
};

export default AboutComp;
