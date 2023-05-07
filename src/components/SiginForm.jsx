import { ArrowForwardIcon, CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Highlight,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	PinInput,
	PinInputField,
	Stack,
	Switch,
	Text,
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const SiginForm = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();

	return (
		<Container
			maxW="lg"
			py={{
				base: "12",
				md: "24",
			}}
			px={{
				base: "0",
				sm: "8",
			}}
		>
			<Stack
				spacing="8"
				rounded={"3xl"}
				boxShadow={{
					base: "none",
					sm: "md",
				}}
			>
				<Stack spacing="6" textAlign="center">
					<Heading as='h3' size='lg' noOfLines={1} lineHeight='tall'>
						<Highlight
							query={["React", "Chakra UI"]}
							styles={{ px: "2", py: "2", rounded: "2px", bg: "orange.100" }}
						>
							React & Chakra UI Dashboard
						</Highlight>
					</Heading>

					<Stack
						spacing={{
							base: "2",
							md: "3",
						}}
					>
						<HStack spacing="1" justify="center">
							<Text color="muted">Don't have an account?</Text>
							<Button variant="link" colorScheme="blue">
								Sign up
							</Button>
						</HStack>
					</Stack>
				</Stack>

				<Box
					py={{
						base: "0",
						sm: "8",
					}}
					px={{
						base: "4",
						sm: "10",
					}}
					bg={{
						base: "transparent",
						sm: "bg-surface",
					}}
					borderRadius={{
						base: "none",
						sm: "xl",
					}}
				>
					<Stack spacing={4}>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<PhoneIcon color='gray.300' />}
							/>
							<Input type='tel' placeholder='Phone number' />
						</InputGroup>

						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								color='gray.300'
								fontSize='1.2em'
								children='$'
							/>
							<Input placeholder='Enter amount' />
							{/* rome-ignore lint/correctness/noChildrenProp: <explanation> */}
							<InputRightElement children={<CheckIcon color='green.500' />} />
						</InputGroup>

						<HStack>
							<PinInput type='alphanumeric' size='lg' mask>
								<PinInputField />
								<PinInputField />
								<PinInputField />
								<PinInputField />
							</PinInput>
						</HStack>

						<Textarea isInvalid placeholder='Here is a sample placeholder' />

						<FormControl display='flex' alignItems='center' isRequired>
							<FormLabel htmlFor='email-alerts' mb='0'>
								Enable email alerts?
							</FormLabel>
							<Switch id='email-alerts' size='md' />
						</FormControl>
					</Stack>

					<Stack direction='row' justifyContent="center" mt={10} spacing={4}>
						<Button
							rightIcon={<ArrowForwardIcon />}
							colorScheme='gray'
							variant='outline'
							onClick={onOpen}
						>
							Call us
						</Button>

						<AlertDialog
							motionPreset='slideInBottom'
							leastDestructiveRef={cancelRef}
							onClose={onClose}
							isOpen={isOpen}
							isCentered
						>
							<AlertDialogOverlay />

							<AlertDialogContent>
								<AlertDialogHeader>Discard Changes?</AlertDialogHeader>
								<AlertDialogCloseButton />
								<AlertDialogBody>
									Are you sure you want to discard all of your notes? 44 words
									will be deleted.
								</AlertDialogBody>
								<AlertDialogFooter>
									<Button ref={cancelRef} onClick={onClose}>
										No
									</Button>
									<Button colorScheme='red' ml={3}>
										Yes
									</Button>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
};

export default SiginForm;
