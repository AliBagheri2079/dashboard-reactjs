import Charts from "../components/Charts";
import TableData from "../components/TableData";
import { Card, Grid, Tab, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";

export default function Content() {
	const [selectedView, setSelectedView] = useState("1");

	return (
		<main className="bg-slate-50 p-6 sm:p-10">
			<div className="container mx-auto">
				<Title>Dashboard</Title>
				<Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

				<TabList
					defaultValue="1"
					onValueChange={(value) => setSelectedView(value)}
					className="mt-6"
				>
					<Tab value="1" text="Chart" />
					<Tab value="2" text="Table" />
				</TabList>

				{selectedView === "1" ? <Charts /> : <TableData />}
			</div>
		</main>
	);
}

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// library.add(fas, faInfoCircle);
// <FontAwesomeIcon icon="fa-solid fa-circle-info" beatFade />
