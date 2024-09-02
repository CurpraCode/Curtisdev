import React from "react";
import {
  Box,
  Flex,
  Image,
  Tooltip,
  useColorMode,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
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

const projects = [
  {
    title: "Dataware",
    imgsrc: "https://curtisdev.netlify.app/static/media/dataware.d016f1cb.png",
    url: "https://dataware.netlify.app/",
    skills: [
      {
        techTitle: "HTML",
        tech: SiHtml5,
        color: "#E34F26",
      },
      {
        techTitle: "CSS",
        tech: SiCss3,
        color: "#1572b6",
      },
      {
        techTitle: "JavaScript",
        tech: SiJavascript,
        color: "#F7DF1E",
      },
    ],
  },
  {
    title: "Airbnb-Clone",
    imgsrc: "https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png",
    url: "https://airbnb-curpra-clone.vercel.app/",
    skills: [
      {
        techTitle: "JavaScript",
        tech: SiJavascript,
        color: "#F7DF1E",
      },
      {
        techTitle: "Nextjs",
        tech: SiNextdotjs,
        color: "000000",
      },
      {
        techTitle: "Reactjs",
        tech: SiReact,
        color: "#61DAFB",
      },
    ],
  },
  {
    title: "Webzerve",
    imgsrc: "/webzerve.png",
    url: "https://webzerve.vercel.app",
    skills: [
      {
        techTitle: "TypeScript",
        tech: SiTypescript,
        color: "#3178C6",
      },
      {
        techTitle: "Nextjs",
        tech: SiNextdotjs,
        color: "#000000",
      },
      {
        techTitle: "Nestjs",
        tech: SiNestjs,
        color: "#E10098",
      },
    ],
  },
  {
    title: "Weaverbuxx",
    imgsrc: "/spectacreditcard.png",
    url: "https://weaverbuxx.com",
    skills: [
      {
        techTitle: "JavaScript",
        tech: SiJavascript,
        color: "#F7DF1E",
      },
      {
        techTitle: "React",
        tech: SiReact,
        color: "#61DAFB",
      },
      {
        techTitle: "Nodejs",
        tech: SiNodedotjs,
        color: "#339933",
      },
    ],
  },
  {
    title: "MovieWebapp",
    imgsrc: "https://curtisdev.netlify.app/static/media/cm.8ae40d90.png",
    url: "https://weaverbuxx.com",
    skills: [
      {
        techTitle: "JavaScript",
        tech: SiJavascript,
        color: "#F7DF1E",
      },
      {
        techTitle: "React",
        tech: SiReact,
        color: "#61DAFB",
      },
      {
        techTitle: "Nodejs",
        tech: SiNodedotjs,
        color: "#339933",
      },
    ],
  },

  {
    title: "Curtisdev",
    imgsrc: "/curtiswebbg.png",
    url: "https://curtisdev.com",
    skills: [
      {
        techTitle: "TypeScript",
        tech: SiTypescript,
        color: "#3178C6",
      },
      {
        techTitle: "Nextjs",
        tech: SiNextdotjs,
        color: "#000000",
      },
      {
        techTitle: "Nodejs",
        tech: SiNodedotjs,
        color: "#339933",
      },
    ],
  },
  {
    title: "PostEat",
    imgsrc: "/posteat.png",
    url: "https://dev.posteat.co.uk/",
    skills: [
      {
        techTitle: "React",
        tech: SiReact,
        color: "#3178C6",
      },
      {
        techTitle: "Expo",
        tech: SiExpo,
        color: "#3178C6",
      },
      {
        techTitle: "TypeScript",
        tech: SiTypescript,
        color: "#3178C6",
      },
      {
        techTitle: "Nextjs",
        tech: SiNextdotjs,
        color: "#000000",
      },
      {
        techTitle: "Nodejs",
        tech: SiNodedotjs,
        color: "#339933",
      },
    ],
  },
];

const WorkComp = () => {
  const { colorMode } = useColorMode();
  const colorSelect = colorMode === "dark" ? "theme.100" : "theme.350";
  return (
    <Box
      mt="6rem"
      p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
    >
      <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing="40px" pt="2rem" pb="4rem">
        {projects.map((project) => {
          return (
            <Box
              key={project.title}
              className={styles.boxanime}
              boxShadow="lg"
              rounded="md"
              p="1rem 1.2rem"
              mr={{ base: "0", lg: "1rem" }}
            >
              <Link href={project.url}>
                <Image src={project.imgsrc} alt={project.title} rounded="md" />
                <Flex className={styles.boxflex} justifyContent="space-evenly">
                  {project.skills.map((tool) => {
                    return (
                      <Tooltip
                        key={tool.color}
                        label={tool.techTitle}
                        placement="top"
                        borderRadius="4"
                      >
                        <Box
                          bg={colorSelect}
                          p="0.5rem 0.7rem"
                          mr="1rem"
                          borderRadius="0.3rem"
                        >
                          <tool.tech color={tool.color} size="25px" />
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Flex>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
      <Footer />
    </Box>
  );
};

export default WorkComp;
