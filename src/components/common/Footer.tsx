import React from "react";
import { Flex, Box, Text, Link, } from "@chakra-ui/react";
import {
	UilArrowRight,
	UilLinkedin,
	UilGithub,
	UilTwitter,
} from "@iconscout/react-unicons";

const Footer = () => {
	return (
		<Box>
			<Flex mt="5rem">
				<Link
					href="https://www.linkedin.com/in/curtis-oyakoya-b70b091b2/"
					isExternal
					_hover={{
						textDecor: "none",
					}}
					mr="2rem"
				>
					<UilLinkedin size="60" color="#61DAFB" />
				</Link>
				<Link
					href="https://github.com/CurpraCode"
					isExternal
					_hover={{
						textDecor: "none",
					}}
					mr="2rem"
				>
					<UilGithub size="60" color="#61DAFB" />
				</Link>
				<Link
					href="https://twitter.com/CurpraCode"
					isExternal
					_hover={{
						textDecor: "none",
					}}
				>
					<UilTwitter size="60" color="#61DAFB" />
				</Link>
			</Flex>
		</Box>
	);
};

export default Footer;
