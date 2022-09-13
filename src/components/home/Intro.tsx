import React from "react";
import { Flex, Box, Text, Link, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
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
    <Box maxW="1324px" m="0 auto">
      <Box>
        <Flex justifyContent="space-between">
          <Box mt="3rem">
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
            <Text mt="2rem">
              I build web experience <br /> and awesome web app, i solve variant
              web <br />
              problem and also write code to make things works
            </Text>
            <Button
              rounded="md"
              bg="#61DAFB"
              fontSize=".8rem"
              letterSpacing={2}
              mt="2rem"
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
            <Flex mt="2rem">
              <Link
                href="https://www.linkedin.com/in/curtis-oyakoya-b70b091b2/"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
              >
                <UilLinkedin size="60" color="#61DAFB" />
              </Link>
              <Link
                href="https://github.com/CurpraCode"
                isExternal
                _hover={{
                  textDecor: "none",
                }}
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
          <Image
            borderRadius="md"
            width="24%"
            src="/CurtisDev.jpeg"
            alt="Curtis"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Intro;
