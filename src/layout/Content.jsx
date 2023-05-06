import Data from "../components/Data";
import Item from "../components/Item";
import { Tab, TabList, Text, Title } from "@tremor/react";
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
					<Tab value="1" text="Data" />
					<Tab value="2" text="Item" />
				</TabList>

				{selectedView === "1" ? <Data /> : <Item />}
			</div>
		</main>
	);
}
