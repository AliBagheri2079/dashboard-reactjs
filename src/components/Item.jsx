import { library } from "@fortawesome/fontawesome-svg-core";
import { faImages, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Button,
	Card,
	Col,
	Container,
	Grid,
	Image,
	Link,
	Modal,
	NextUIProvider,
	Row,
	Text,
	createTheme,
	globalCss,
	keyframes,
	styled,
} from "@nextui-org/react";
import React from "react";

library.add(fas, faImages);

const theme = createTheme({
	type: "light", // it could be "light" or "dark"
	theme: {
		colors: {
			// brand colors
			primaryLight: "$blue900",
			primaryLightHover: "$blue700",
			primaryLightActive: "$blue600",
			primaryLightContrast: "$blue600",
			primary: "#3694FF",
			primaryBorder: "$blue500",
			primaryBorderHover: "$blue600",
			primarySolidHover: "$blue700",
			primarySolidContrast: "$white",
			primaryShadow: "$blue500",

			// you can also create your own color
			myColor: "#ff4ecd",

			// ...  more colors
		},
		space: {},
		fonts: {},
	},
});

const globalStyles = globalCss({
	body: { margin: 0 },
});

const Item = () => {
	// globalStyles();

	return (
		<NextUIProvider theme={theme}>
			<Container fluid>
				<HeaderText />
				<ImgCards />
			</Container>
		</NextUIProvider>
	);
};

//NOTE: Related Header Text Component
const headerText = [
	{
		textGradient: "45deg, $blue600 -20%, $pink600 50%",
		text: "Let's",
	},
	{
		textGradient: "45deg, $purple600 -20%, $pink600 100%",
		text: "Create the",
	},
	{
		textGradient: "45deg, $yellow600 -20%, $red600 100%",
		text: "many Items",
	},
];

const HeaderText = () => {
	return (
		<React.Fragment>
			{headerText.map(({ text, textGradient }) => (
				<Text
					key={text}
					h1
					size={60}
					weight="bold"
					css={{
						textGradient,
					}}
				>
					{text}
				</Text>
			))}
		</React.Fragment>
	);
};

//NOTE: Related Image Cards Component
const imageList = [
	{
		title: "Cherry",
		img: "/images/fruit-3.jpeg",
		price: "$10.00",
	},
	{
		title: "Lemon",
		img: "/images/fruit-4.jpeg",
		price: "$5.30",
	},
	{
		title: "Avocado",
		img: "/images/fruit-5.jpeg",
		price: "$15.70",
	},
	{
		title: "Banana",
		img: "/images/fruit-7.jpeg",
		price: "$7.50",
	},
	{
		title: "Watermelon",
		img: "/images/fruit-8.jpeg",
		price: "$12.20",
	},
];

const scaleUp = keyframes({
	"0%": { transform: "scale(1)" },
	"100%": { transform: "scale(1.2)" },
});

const StyledButton = styled(Button, {
	backgroundColor: "$blue600 !important",
	cursor: "pointer",
	"&:active": {
		animation: `${scaleUp} 200ms`,
	},
});

const ImgCards = () => {
	const [visible, setVisible] = React.useState(false);
	const [modalInfo, setModalInfo] = React.useState("");

	const handler = React.useCallback((item) => {
		setVisible(true);
		setModalInfo(item);
	}, []);
	const closeHandler = () => setVisible(false);

	return (
		<Grid.Container gap={2} justify="flex-start">
			{imageList.map((item) => (
				<Grid xs={12} sm={6} md={4} key={item.title}>
					<Card isPressable css={{ w: "100%", h: "400px" }}>
						<Card.Body css={{ p: 0 }}>
							<Card.Image
								src={`https://nextui.org${item.img}`}
								objectFit="cover"
								width="100%"
								height="100%"
								alt={item.title}
							/>
						</Card.Body>

						<Card.Footer
							isBlurred
							css={{
								position: "absolute",
								bgBlur: "#ffffff66",
								borderTop:
									"$borderWeights$light solid rgba(255, 255, 255, 0.2)",
								bottom: 0,
								zIndex: 1,
							}}
						>
							<Row>
								<Col>
									<Text color="#000" size={12}>
										Available soon.
									</Text>
									<Text color="#000" size={12}>
										Get notified.
									</Text>
								</Col>

								<Col>
									<Row justify="flex-end">
										<StyledButton
											// color="gradient"
											// flat
											shadow
											rounded
											auto
											icon={
												<FontAwesomeIcon icon="fa-solid fa-images" bounce />
											}
											onPress={() => handler(item)}
										>
											See Photo
										</StyledButton>

										<PhotoModal
											visible={visible}
											closeHandler={closeHandler}
											item={modalInfo}
										/>
									</Row>
								</Col>
							</Row>
						</Card.Footer>
					</Card>
				</Grid>
			))}
		</Grid.Container>
	);
};

//NOTE: Related Photo Modal Component
const PhotoModal = React.memo(({ visible, closeHandler, item }) => {
	return (
		<Modal
			noPadding
			blur
			aria-labelledby="photo-modal"
			open={visible}
			onClose={closeHandler}
		>
			<Modal.Header
				css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
			>
				<Text color="#363449">
					Photo by{" "}
					<Link
						color
						rel="noopener noreferrer"
						target="_blank"
						href="https://nextui.org"
					>
						NextUI
					</Link>
				</Text>
			</Modal.Header>

			<Modal.Body>
				<Image
					src={`https://nextui.org${item.img}`}
					alt={item.title}
					objectFit="cover"
					showSkeleton
				/>
			</Modal.Body>
		</Modal>
	);
});

export default Item;
