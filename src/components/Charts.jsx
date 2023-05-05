import { InformationCircleIcon } from "@heroicons/react/20/solid";
import {
	AreaChart,
	BadgeDelta,
	Card,
	Flex,
	Grid,
	Icon,
	Metric,
	ProgressBar,
	Text,
	Title,
	Toggle,
	ToggleItem,
} from "@tremor/react";
import React from "react";

const kpiData = [
	{
		title: "Sales",
		metric: "$ 12,699",
		progress: 15.9,
		target: "$ 80,000",
		delta: "13.2%",
		deltaType: "moderateIncrease",
	},
	{
		title: "Profit",
		metric: "$ 45,564",
		progress: 36.5,
		target: "$ 125,000",
		delta: "23.9%",
		deltaType: "increase",
	},
	{
		title: "Customers",
		metric: "$ 1,072",
		progress: 53.6,
		target: "$ 2,000",
		delta: "10.1%",
		deltaType: "moderateDecrease",
	},
];

const performance = [
	{
		date: "2021-01-01",
		Sales: 900.73,
		Profit: 173,
		Customers: 73,
	},
	{
		date: "2021-01-02",
		Sales: 1000.74,
		Profit: 174.6,
		Customers: 74,
	},
	{
		date: "2021-03-13",
		Sales: 882,
		Profit: 682,
		Customers: 682,
	},
	{
		date: "2021-01-01",
		Sales: 900.73,
		Profit: 173,
		Customers: 73,
	},
	{
		date: "2021-01-02",
		Sales: 1000.74,
		Profit: 174.6,
		Customers: 74,
	},
	{
		date: "2021-01-02",
		Sales: 1000.74,
		Profit: 174.6,
		Customers: 74,
	},
	{
		date: "2021-03-13",
		Sales: 882,
		Profit: 682,
		Customers: 682,
	},
];

// Basic formatters for the chart values
const dollarFormatter = (value) =>
	`$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value) =>
	`${Intl.NumberFormat("us").format(value).toString()}`;

const Charts = () => {
	const [selectedKpi, setSelectedKpi] = React.useState("Sales");

	// map formatters by selectedKpi
	const formatters = {
		Sales: dollarFormatter,
		Profit: dollarFormatter,
		Customers: numberFormatter,
	};

	return (
		<>
			<Grid numColsLg={3} className="mt-6 gap-6">
				{kpiData.map((item) => (
					<Card key={item.title}>
						<Flex alignItems="start">
							<div className="truncate">
								<Text>{item.title}</Text>
								<Metric className="truncate">{item.metric}</Metric>
							</div>
							<BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
						</Flex>
						<Flex className="mt-4 space-x-2">
							<Text className="truncate">
								{`${item.progress}% (${item.metric})`}
							</Text>
							<Text>{item.target}</Text>
						</Flex>
						<ProgressBar percentageValue={item.progress} className="mt-2" />
					</Card>
				))}
			</Grid>

			<div className="mt-6">
				<Card>
					<div className="md:flex justify-between">
						<div>
							<Flex
								justifyContent="start"
								className="space-x-0.5"
								alignItems="center"
							>
								<Title> Performance History </Title>
								<Icon
									icon={InformationCircleIcon}
									variant="simple"
									tooltip="Shows day-over-day (%) changes of past performance"
								/>
							</Flex>
							<Text> Daily increase or decrease per domain </Text>
						</div>
						<div className="mt-6 md:mt-0">
							<Toggle
								color="blue"
								defaultValue={selectedKpi}
								onValueChange={(value) => setSelectedKpi(value)}
							>
								<ToggleItem value="Sales" text="Sales" />
								<ToggleItem value="Profit" text="Profit" />
								<ToggleItem value="Customers" text="Customers" />
							</Toggle>
						</div>
					</div>
					<AreaChart
						data={performance}
						index="date"
						categories={[selectedKpi]}
						colors={["blue"]}
						showLegend={false}
						valueFormatter={formatters[selectedKpi]}
						yAxisWidth={56}
						className="h-96 mt-8"
					/>
				</Card>
			</div>
		</>
	);
};

export default Charts;
