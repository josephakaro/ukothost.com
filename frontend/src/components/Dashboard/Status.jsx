import React from 'react';
import { FaBuildingUser } from 'react-icons/fa6';
import { MdOutlineMailOutline, MdOutlineDns } from 'react-icons/md';

import { BsGlobeEuropeAfrica } from 'react-icons/bs';

function Status() {
	return (
		<div className="flex flex-row gap-4 justify-between items-center">
			<div className="flex flex-row align-middle items-center justify-between bg-base-100 w-96 h-28 rounded-md p-4 shadow-sm">
				<div className="flex flex-col items-start align-middle">
					<FaBuildingUser className="text-5xl" />
					<span className="font-semibold">Clients</span>
				</div>
				<span className="font-bold text-5xl">876</span>
			</div>
			<div className="flex flex-row align-middle items-center justify-between bg-base-100 w-96 h-28 rounded-md p-4 shadow-sm">
				<div className="flex flex-col items-start align-middle">
					<BsGlobeEuropeAfrica className="text-5xl" />
					<span className="font-semibold">Websites</span>
				</div>
				<span className="font-bold text-5xl">3k</span>
			</div>
			<div className="flex flex-row align-middle items-center justify-between bg-base-100 w-96 h-28 rounded-md p-4 shadow-sm">
				<div className="flex flex-col items-start align-middle">
					<MdOutlineMailOutline className="text-5xl" />
					<span className="font-semibold ml-1">Emails</span>
				</div>
				<span className="font-bold text-5xl">10k</span>
			</div>
			<div className="flex flex-row align-middle items-center justify-between bg-base-100 w-96 h-28 rounded-md p-4 shadow-sm">
				<div className="flex flex-col items-start align-middle">
					<MdOutlineDns className="text-5xl" />
					<span className="font-semibold ml-2">VPS</span>
				</div>
				<span className="font-bold text-5xl">2.5k</span>
			</div>
		</div>
	);
}

export default Status;
