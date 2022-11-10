import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Footer from "../common/Footer";

const WorkComp = () => {
	return (
		<Box
			mt="6rem"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Flex flexDir={{ base: "column", lg: "row" }}>
				<Box
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
				</Box>
				<Box boxShadow="lg" rounded="md" p="1rem 1.2rem">
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
				<Box boxShadow="lg" rounded="md" p="1rem 1.2rem">
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
			</Flex>
			<Flex flexDir={{ base: "column", lg: "row" }}>
				<Box
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
				</Box>
				<Box boxShadow="lg" rounded="md" p="1rem 1.2rem">
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
				<Box boxShadow="lg" rounded="md" p="1rem 1.2rem">
					<Image
						src="https://curtisdev.netlify.app/static/media/airbnb.f2fd8006.png"
						alt="airbnb"
						rounded="md"
					/>
				</Box>
			</Flex>
			<Footer />
		</Box>
	);
};

export default WorkComp;
