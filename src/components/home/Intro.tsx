import React from "react";
import { Flex, Box, Text, Link, Image, Button } from "@chakra-ui/react";
// import { useRouter } from "next/router";
import NextLink from "next/link";
import Typewriter from "typewriter-effect";
import {
  UilArrowRight,
  UilLinkedin,
  UilGithub,
  UilTwitter,
} from "@iconscout/react-unicons";

const Intro = () => {
  return (
    <Box
      mt="1rem"
      p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
    >
      <Box>
        <Flex justifyContent="space-between">
          <Box mt="1rem">
            <Text mb="2rem">Hello World</Text>

            <Typewriter
              options={{
                strings: [
                  "Oyakoya Curtis",
                  "React Developer",
                  "Frontend Engineer",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <Text
              mt="2rem"
              fontSize={["1.2rem", "1.8rem", "2.5rem", "2.5rem"]}
              fontWeight="bold"
            >
              I build web experience <br /> and awesome web applications
            </Text>
            <NextLink href="/about" passHref>
              <Button
                rounded="md"
                bg="#61DAFB"
                fontSize=".8rem"
                letterSpacing={2}
                mt="2rem"
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
          <Box width="27%" display={["none", "none", "none", "block"]}>
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
