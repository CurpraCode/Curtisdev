import React, { useState } from "react";
import {
	Flex,
	Box,
	Heading,
	Button,
	Image as ChakraImage,
	Input,
	Textarea,
	Spinner,
	useColorModeValue,
	useColorMode,
	Text,
} from "@chakra-ui/react";
import { useMail } from "../../hooks/useMail";
import { useForm } from "react-hook-form";
import { Imail } from "../../interface/mail.interface";
import { UilMessage } from "@iconscout/react-unicons";
import Footer from "../common/Footer";

const ContactForm = () => {
	const { loading, sendEmailer } = useMail();
	const { colorMode } = useColorMode();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Imail>();

	const handleMail = async (data: any) => {
		console.log(data);
		const res = await sendEmailer(data);
		console.log(res);
	};
	return (
		<Box
			mt={["5rem", "5.5rem", "7rem", "7rem"]}
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "1rem 2rem", "1rem 2rem"]}
		>
			<Flex
				align="center"
				justify="space-between"
				direction={["column", "column", "column", "row"]}
				gap={{ base: "1rem", md: "1rem" }}
				color={useColorModeValue("theme.500", "theme.100")}
				// mt="6rem"
				w="100%"
			>
				<Box display="flex" flexDir="column" w="100%">
					<Heading
						fontWeight={400}
						fontSize={{ base: "1.4rem", md: "1.5rem", lg: "1.6rem" }}
						mb="0.8rem"
					>
						Contact Me
					</Heading>
					<Box as="form" onSubmit={handleSubmit(handleMail)} w="100%">
						<Box py=".6rem">
							<Input
								fontSize="1rem"
								fontWeight={400}
								type="text"
								placeholder="Enter your name"
								_focus={{
									outline: 0,
								}}
								_placeholder={{
									color: colorMode === "light" ? "theme.500" : "theme.100",
								}}
								{...register("name", { required: true })}
								bg={colorMode === "light" ? "theme.100" : "theme.500"}
							/>
							<Text color="red" fontSize="0.6rem">
								{errors.name && "Name is required"}
							</Text>
						</Box>

						<Box py=".6rem">
							<Input
								fontSize="1rem"
								fontWeight={400}
								type="email"
								placeholder="Enter your email"
								_focus={{
									outline: 0,
								}}
								_placeholder={{
									color: colorMode === "light" ? "theme.500" : "theme.100",
								}}
								bg={colorMode === "light" ? "theme.100" : "theme.500"}
								{...register("email", { required: true })}
							/>
							<Text color="red" fontSize="0.6rem">
								{errors.email && "Email is required"}
							</Text>
						</Box>

						<Box py=".6rem">
							<Input
								bg={colorMode === "light" ? "theme.100" : "theme.500"}
                border="none"
								fontSize="1rem"
								fontWeight={400}
								type="text"
								placeholder="Enter Subject"
								_focus={{
									outline: "none",
                  border: "none",
								}}
								_placeholder={{
									color: colorMode === "light" ? "theme.500" : "theme.100",
								}}
								{...register("subject", { required: true })}
							/>
							<Text color="red" fontSize="0.6rem">
								{errors.subject && "Subject is required"}
							</Text>
						</Box>

						<Box py=".6rem">
							<Textarea
								bg={colorMode === "light" ? "theme.100" : "theme.500"}
								fontSize="1rem"
								fontWeight={400}
								mt="1rem"
								focusBorderColor="theme.300"
								placeholder="Enter your message"
								_placeholder={{
									color: colorMode === "light" ? "theme.500" : "theme.100",
								}}
								size="md"
								resize={"vertical"}
								{...register("message", { required: true })}
							/>
							<Text color="red" fontSize="0.6rem">
								{errors.message && "Message is required"}
							</Text>
						</Box>

						<Button
							size="lg"
							w="100%"
							mt="1.5rem"
							color={useColorModeValue("theme.500", "theme.100")}
							bg={"theme.300"}
							_hover={{
								bg: "theme.300",
							}}
							rightIcon={<UilMessage />}
							type="submit"
							_focus={{
								borderColor: "theme.300",
								outline: "none",
							}}
							_active={{
								borderColor: "theme.300",
							}}
						>
							{loading ? (
								<Spinner
									thickness="4px"
									speed="0.65s"
									emptyColor="gray.200"
									color={colorMode === "light" ? "theme.500" : "theme.100"}
									size="md"
								/>
							) : (
								"Send"
							)}
						</Button>
					</Box>
				</Box>
				<Box display="block" w="100%"></Box>
			</Flex>
			<Footer />
		</Box>
	);
};

export default ContactForm;
