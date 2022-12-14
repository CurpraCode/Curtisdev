import React from "react";
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Typewriter from "typewriter-effect";
import { UilArrowRight } from "@iconscout/react-unicons";
import Footer from "../common/Footer";
import { GiWorld } from "react-icons/gi";

const Intro = () => {
	return (
		<Box
			mt="8rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Box>
				<Flex justifyContent="space-between">
					<Box mt="1rem">
						<Flex alignItems="center" mb="2rem" fontWeight="bold">
							<Text mr="4">Hello World</Text> <GiWorld />
						</Flex>

						<Typewriter
							options={{
								strings: [
									"I am Curtis Oyakoya",
									"I am a React Engineer",
									"I am a Frontend Engineer",
									"I am a Software Engineer",
								],
								autoStart: true,
								loop: true,
							}}
						/>
						<Text
							mt="2rem"
							mb="2rem"
							fontSize={["2rem", "1.8rem", "2.5rem", "2.5rem"]}
							fontWeight="bold"
						>
							I build unique web <br /> and mobile applications
						</Text>
						<NextLink href="/about" passHref>
							<Button
								rounded="md"
								bg="#61DAFB"
								fontSize=".8rem"
								letterSpacing={2}
								mb="4rem"
								p="1.5rem 2rem"
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
								About Me
							</Button>
						</NextLink>
						<Footer />
					</Box>
					<Box width="25%" display={["none", "none", "none", "block"]}>
						<Image
							borderRadius="lg"
							width="100%"
							height="100%"
							objectFit="cover"
							src="/CurtisDev.jpeg"
							alt="Curtis"
						/>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default Intro;
