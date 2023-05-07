import {
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const DataTabs = ({ data }) => {
	const colors = useColorModeValue(
		["info.900", "blue.900", "teal.900", "info.500", "blue.500", "teal.500"],
		["teal.900", "blue.900", "info.900", "teal.500", "blue.500", "info.500"],
	);
	const [tabIndex, setTabIndex] = useState(0);
	const bg = colors[tabIndex];

	return (
		<Tabs
			// variant='enclosed'
			isLazy
			isFitted
			bg={bg}
			display={"flex"}
			h={"100vh"}
			onChange={(index) => setTabIndex(index)}
		>
			<TabList flexDirection={"column"} flexBasis={"300px"}>
				{data.map((tab, index) => (
					<Tab key={tab.label}>{tab.label}</Tab>
				))}
			</TabList>
			<TabPanels>
				{data.map((tab, index) => (
					<TabPanel p={4} key={tab.label}>
						{tab.content}
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
};

const Navbar = ({ tabData }) => {
	return <DataTabs data={tabData} />;
};

export default Navbar;
