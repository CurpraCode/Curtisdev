// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const colors = {
	theme: {
		700: "#bfbfbf",
		600: "#333333",
		550: "#000000",
		500: "#1A202C",
		400: "#84a1ff",
		350: "#1a202c",
		300: "#61DAFB",
		200: "#ee2761",
		100: "#F6FAFF",
		50: "#ffffff",
	},
};
// 3. extend the theme
const theme = extendTheme({ colors, config });

export default theme;
