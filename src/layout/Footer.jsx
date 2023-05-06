import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ThemeProvider, createUseStyles } from "react-jss";

/*
 * Using `theme` function is better when you have many theme dependant styles.
 * Note that in this case you don't need to use useTheme(), it subscribes to the them automatically
 */
const useStyle = createUseStyles((theme) => ({
	wrapper: {
		backgroundColor: theme.color.primary,
		minHeight: theme.size.viewportHeight,
	},
	flexCenter: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "1rem",
	},
}));

const Wrapper = ({ children, ...props }) => {
	const classes = useStyle(props);

	return (
		<div className={`${classes.wrapper} ${classes.flexCenter}`}>{children}</div>
	);
};

const theme = {
	color: {
		primary: "#374151",
		info: "lightblue",
	},
	size: {
		base: "1rem",
		viewportHeight: "10vh",
	},
};

const Footer = () => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<h1 className="text-slate-200 text-xl">Created by Ali Bagheri</h1>
			<FontAwesomeIcon
				className="text-blue-600 text-lg"
				icon="fa-solid fa-copyright"
				shake
			/>
		</Wrapper>
	</ThemeProvider>
);

export default Footer;
