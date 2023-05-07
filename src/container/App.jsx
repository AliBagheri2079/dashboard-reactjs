import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

/*
	? you can customize rtl mode with chakra rtl provider, more details: 'https://chakra-ui.com/docs/styled-system/rtl-support'
	? import { RtlProvider } from '@/components/rtl-provider'
*/

//* Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};

//* Extend the theme to include custom global css reset styles
const styles = {
	global: (props) => ({
		body: {
			fontFamily: "body",
			color: mode("gray.800", "whiteAlpha.900")(props),
			bg: mode("white", "gray.800")(props),
			lineHeight: "base",
		},
		"*::placeholder": {
			color: mode("gray.400", "whiteAlpha.400")(props),
		},
		"*, *::before, &::after": {
			borderColor: mode("gray.200", "whiteAlpha.300")(props),
			wordWrap: "break-word",
		},
	}),
};

const theme = extendTheme({ styles, colors });

const App = () => {
	return (
		/*
		 * Wrap ChakraProvider at the root of your app
		 * Pass the `theme` prop to the `ChakraProvider`
		 */
		<ChakraProvider theme={theme}>{/* <HomePage /> */}</ChakraProvider>
	);
};

export default App;
