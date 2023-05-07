import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import React from "react";

const accordionData = [
	{
		title: "Title 1",
		description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    `,
	},
	{
		title: "Title 2",
		description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    `,
	},
	{
		title: "Title 3",
		description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    `,
	},
	{
		title: "Title 4",
		description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    `,
	},
	{
		title: "Title 5",
		description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    `,
	},
];

const AccordionComponent = () => {
	return (
		<Accordion allowMultiple>
			{accordionData.map((data) => (
				<AccordionItem key={data.title}>
					{({ isExpanded }) => (
						<>
							<h2>
								<AccordionButton>
									<Box as="span" flex='1' textAlign='left'>
										{data.title}
									</Box>
									{isExpanded ? (
										<MinusIcon fontSize='12px' />
									) : (
										<AddIcon fontSize='12px' />
									)}
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>{data.description}</AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default AccordionComponent;
