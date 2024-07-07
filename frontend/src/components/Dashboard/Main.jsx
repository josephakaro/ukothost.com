import React from 'react';
import LineChart from './LineChart';

import {
	MdDashboard,
	MdOutlineEmail,
	MdOutlineDns,
	MdOutlineLogout,
	MdOutlineDomain,
} from 'react-icons/md';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';
import Status from './Status';
import AreaChart from './AreaChart';

const Main = () => {
	return (
		<div className="grid lg:grid-cols-12 grid-cols-1 bg-base-300 h-full max-w-full">
			<div className="flex flex-col lg:col-span-1 md:col-span-2 bg-base-200 p-2 w-full shadow-md">
				<ul className="flex-1 items-start flex flex-col gap-4">
					<li className="flex flex-row gap-1 justify-center items-center text-nowrap">
						<MdDashboard className="lg:text-xl sm:text-lg  font-bold" />
						<a href="/">Dashboard</a>
					</li>
					<li className="flex flex-row gap-1 justify-center items-center text-nowrap">
						<BsGlobeEuropeAfrica className="lg:text-xl  font-bold" />
						<a href="/websites">Websites</a>
					</li>
					<li className="flex flex-row lg:gap-2 sm:gap-1 justify-center items-center text-nowrap">
						<MdOutlineEmail className="lg:text-xl font-bold" />
						<a href="/emails">Emails</a>
					</li>
					<li className="flex flex-row lg:gap-2 sm:gap-1 justify-center items-center text-nowrap">
						<MdOutlineDomain className="lg:text-xl sm:text-lg  font-bold" />
						<a href="domains">Domains</a>
					</li>
					<li className="flex flex-row lg:gap-2 sm:gap-1 justify-center items-center text-nowrap">
						<MdOutlineDns className="lg:text-xl sm:text-lg  font-bold" />
						<a href="/vps">VPS</a>
					</li>
				</ul>
				<div className="flex-none lg:gap-2 sm:gap-1 flex flex-row justify-center items-center text-nowrap mb-4 text-red-500">
					<MdOutlineLogout className="lg:text-2xl sm:text-lg  font-bold" />
					<a href="#">Log out</a>
				</div>
			</div>
			<div className="lg:col-span-11 lg:p-4">
				<Status />
				<div className="flex flex-row justify-between gap-4 mt-8">
					<LineChart />
					<AreaChart />
				</div>
			</div>
		</div>
	);
};

export default Main;
