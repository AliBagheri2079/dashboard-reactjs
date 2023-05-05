import ComboboxInput from "../components/ComboboxInput";
import PopoverLink from "../components/Popover";
import SwitchButton from "../components/SwitchButton";
import {
	EllipsisVerticalIcon,
	HomeModernIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Navbar = () => {
	return (
		<nav className="p-4 bg-gray-700 text-gray-100">
			<div className="container flex justify-between h-16 mx-auto">
				<ul className="items-stretch hidden space-x-3 lg:flex">
					<li className="flex">
						<a
							rel="noopener noreferrer"
							href="#home"
							className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-500 border-blue-500"
						>
							Home
						</a>
					</li>
					<li className="flex">
						<PopoverLink />
					</li>
				</ul>

				<a
					rel="noopener noreferrer"
					href="#home"
					aria-label="Back to homepage"
					className="flex items-center p-2"
				>
					<HomeModernIcon className="w-10 aspect-square fill-blue-500" />
				</a>

				<div className="hidden items-center md:space-x-4 lg:flex">
					<SwitchButton />

					<ComboboxInput />

					<button
						type="button"
						className="px-6 py-2 mt-1 font-semibold rounded bg-blue-500 text-gray-700"
					>
						Log in
					</button>
				</div>

				<button title="Open menu" type="button" className="p-4 lg:hidden">
					<EllipsisVerticalIcon className="w-8 aspect-square " />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
