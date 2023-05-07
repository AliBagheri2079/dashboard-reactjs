import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Grid,
	GridItem,
	Heading,
	Image,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";
import React from "react";

const gridData = [
	{
		num: 1,
	},
	{
		num: 2,
	},
	{
		num: 3,
	},
];

const ImageCards = () => {
	const toast = useToast();

	return (
		<Grid templateColumns='repeat(3, 1fr)' gap={6}>
			{gridData.map(({ num }) => (
				<GridItem key={num}>
					<Card>
						<CardBody>
							<Image
								src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
								alt='Green double couch with wooden legs'
								borderRadius='lg'
							/>
							<Stack mt='6' spacing='3'>
								<Heading size='md'>Living room Sofa</Heading>
								<Text>
									This sofa is perfect for modern tropical spaces, baroque
									inspired spaces, earthy toned spaces and for people who love a
									chic design with a sprinkle of vintage design.
								</Text>
								<Text color='blue.600' fontSize='2xl'>
									$450
								</Text>
							</Stack>
						</CardBody>

						<Divider />

						<CardFooter>
							<ButtonGroup spacing='2'>
								<Button
									variant='solid'
									colorScheme='blue'
									onClick={() =>
										toast({
											position: "bottom-left",
											title: "Selected Card Item",
											description: "We've created your account for you.",
											status: "info",
											duration: 9000,
											isClosable: true,
										})
									}
								>
									Show Toast
								</Button>

								<Button variant='ghost' colorScheme='blue'>
									Add to cart
								</Button>
							</ButtonGroup>
						</CardFooter>
					</Card>
				</GridItem>
			))}
		</Grid>
	);
};

export default ImageCards;
