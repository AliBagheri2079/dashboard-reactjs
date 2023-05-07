import AccordionComponent from "../components/Accordion";
import ImageCards from "../components/ImageCards";
import SiginForm from "../components/SiginForm";
import Navbar from "../layout/Navbar";
import React from "react";

const tabData = [
	{
		label: "Accordion",
		content: <AccordionComponent />,
	},
	{
		label: "Sigin Form",
		content: <SiginForm />,
	},
	{
		label: "Image Cards",
		content: <ImageCards />,
	},
	{
		label: "Item 4",
		content:
			"Perhaps the surest dish ever invented but fills the stomach more than rice.",
	},
	{
		label: "Item 5",
		content: "Perhaps the greatest dish ever invented.",
	},
	{
		label: "Item 6",
		content:
			"Perhaps the surest dish ever invented but fills the stomach more than rice.",
	},
];
const HomePage = () => {
	return <Navbar tabData={tabData} />;
};

export default HomePage;
