import { Popover, Transition } from "@headlessui/react";
import {
	AcademicCapIcon,
	BanknotesIcon,
	BuildingStorefrontIcon,
	ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

const solutions = [
	{
		name: "Insights",
		description: "Measure actions your users take",
		href: "##",
		icon: <AcademicCapIcon aria-hidden="true" />,
	},
	{
		name: "Automations",
		description: "Create your own targeted content",
		href: "##",
		icon: <BanknotesIcon aria-hidden="true" />,
	},
	{
		name: "Reports",
		description: "Keep track of your growth",
		href: "##",
		icon: <BuildingStorefrontIcon aria-hidden="true" />,
	},
];

const PopoverLink = () => {
	return (
		<div className="w-full max-w-sm px-4 pt-3">
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
						>
							<span>Popover Link</span>
							<ChevronDownIcon
								className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-blue-500 transition duration-150 ease-in-out group-hover:text-opacity-80`}
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/4 transform px-4 sm:px-0 lg:max-w-3xl">
								<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
									<div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
										{solutions.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
											>
												<div className="flex h-10 w-10 shrink-0 items-center justify-center text-blue-500 sm:h-12 sm:w-12">
													{item.icon}
												</div>

												<div className="ml-4">
													<p className="text-sm font-medium text-gray-900">
														{item.name}
													</p>
													<p className="text-sm text-gray-500">
														{item.description}
													</p>
												</div>
											</a>
										))}
									</div>

									<div className="bg-gray-50 p-4">
										<a
											href="##"
											className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
										>
											<span className="flex items-center">
												<span className="text-sm font-medium text-gray-900">
													Documentation
												</span>
											</span>
											<span className="block text-sm text-gray-500">
												Start integrating products and tools
											</span>
										</a>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
};

export default PopoverLink;
