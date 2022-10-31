import React, { useRef } from "react";
import {
	Flex,
	Box,
	Heading,
	IconButton,
	useColorMode,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	useMediaQuery,
	Link,
	Collapse,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Footer from "./Footer";

const links = [
	{ name: "Home", to: "/" },
	{ name: "About Me", to: "/about" },
	{ name: "Works", to: "/works" },
	{ name: "Contact", to: "/contact" },
];

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { pathname } = useRouter();

	const colorSelect = colorMode === "dark" ? "theme.100" : "theme.500";
	const bgMode = colorMode === "dark" ? "theme.350" : "theme.50";
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement | null>(null);
	const [isTab] = useMediaQuery("(max-width: 991px)");
	return (
		<Flex
			bg={bgMode}
			position="fixed"
			top="0"
			zIndex="50"
			width="95%"
			p={["0.1rem 0.3rem", "0.3rem 0.5rem", "2rem 2rem", "2rem 2rem"]}
			minH={"6rem"}
			justifyContent="space-between"
			alignItems="center"
			fontWeight="600"
		>
			<NextLink href="/" passHref>
				<Heading
					_hover={{
						cursor: "pointer",
						textDecor: "none",
						color: "theme.300",
					}}
					fontSize="1rem"
					letterSpacing="0.2rem"
					as={Link}
					textDecor={"none"}
				>
					CurtisDev
				</Heading>
			</NextLink>
			<Box
				display="flex"
				justifyContent={["end", "end", "end", "space-between"]}
				alignItems="center"
			>
				<Box
					display={["none", "none", "none", "flex"]}
					w={["100%", "100%", "100%", "100%"]}
					alignItems="center"
					fontSize={["1rem", "1.2rem"]}
				>
					{links.map(({ name, to }, index) => (
						<NextLink href={to} passHref key={index}>
							<Link
								fontSize="1rem"
								fontWeight={600}
								px={["2rem", "4rem", "5rem", "1rem"]}
								_hover={{
									textDecor: "none",
									color: "theme.300",
								}}
								_focus={{
									textDecor: "none",
									bg: "none",
									border: "none",
								}}
								_active={{
									textDecor: "none",
									bg: "none",
									border: "none",
								}}
								onClick={onClose}
								color={pathname === to ? "theme.300" : colorSelect}
							>
								{name}
							</Link>
						</NextLink>
					))}
					<Box mr={["1.2rem", "1.2rem", "1.2rem", "0rem"]}>
						<IconButton
							_focus={{
								border: "none",
								outline: "none",
							}}
							_hover={{
								border: "none",
								outline: "none",
							}}
							_active={{
								border: "none",
								outline: "none",
							}}
							rounded={60}
							size={"sm"}
							aria-label="Toggle Mode"
							color="theme.100"
							onClick={toggleColorMode}
							ml={{ base: "1rem", sm: "1rem", md: "1rem", lg: "1rem" }}
						>
							{colorMode === "light" ? (
								<MoonIcon color="theme.300" />
							) : (
								<SunIcon color="theme.300" />
							)}
						</IconButton>
					</Box>
				</Box>

				<Flex
					display={["flex", "flex", "flex", "none"]}
					justifyContent={"flex-end"}
					mr={["1.5rem"]}
					alignItems="center"
				>
					<Box mr={["1.2rem", "1.2rem", "1.2rem", "0rem"]}>
						<IconButton
							_focus={{
								border: "none",
								outline: "none",
							}}
							_hover={{
								border: "none",
								outline: "none",
							}}
							_active={{
								border: "none",
								outline: "none",
							}}
							rounded={60}
							size={"sm"}
							aria-label="Toggle Mode"
							color="theme.100"
							onClick={toggleColorMode}
							ml={{ base: "1rem", sm: "1rem", md: "1rem", lg: "1rem" }}
						>
							{colorMode === "light" ? (
								<MoonIcon color="theme.300" />
							) : (
								<SunIcon color="theme.300" />
							)}
						</IconButton>
					</Box>
					<Box ref={btnRef} onClick={onOpen}>
						<HamburgerIcon fontSize={"1.5rem"} />
					</Box>
				</Flex>
				{isTab && (
					<Box display={["flex", "flex", "none", "none"]}>
						<Drawer
							isOpen={isOpen}
							placement="right"
							onClose={onClose}
							finalFocusRef={btnRef}
							size={isTab && "full"}
						>
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton
									mt="2rem"
									_focus={{
										outline: 0,
									}}
								/>
								<DrawerBody>
									<Flex direction={"column"} align="start" gap={9} mt={"6rem"}>
										{links.map(({ name, to }, index) => (
											<NextLink key={index} href={to}>
												<Collapse in={isOpen} animateOpacity>
													<Link
														color={pathname === to ? "theme.300" : colorSelect}
														fontWeight={700}
														px={["0.6rem", "0.6rem", "1rem", "2rem"]}
														py=".8rem"
														_hover={{
															textDecor: "none",
															color: "theme.300",
														}}
														_focus={{
															textDecor: "none",
															bg: "none",
															border: "none",
														}}
														_active={{
															textDecor: "none",
															bg: "none",
															border: "none",
														}}
														onClick={onClose}
													>
														{name}
													</Link>
												</Collapse>
											</NextLink>
										))}
									</Flex>
									<Footer />
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</Box>
				)}
			</Box>
		</Flex>
	);
}
