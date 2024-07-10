import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { FaHome, FaUserFriends, FaShoppingCart, FaBlog } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { SlNotebook } from 'react-icons/sl';
import { CiServer } from 'react-icons/ci';

import { MdAttachMoney } from 'react-icons/md';
import { IoTicket } from 'react-icons/io5';
import { IoTicketOutline } from 'react-icons/io5';

function AdminDashboard() {
	const { logout, user } = useAuth0();
	return (
		<div className="grid md:grid-cols-6 md:grid-rows-6 grid-rows-6 w-screen h-screen">
			<aside className="md:col-span-1 md:row-span-6 bg-blue-900 md:flex md:flex-col hidden shadow-sm">
				<div className="menu-title flex flex-col items-center justify-center h-12 mb-4 bg-slate-100 border-r-2">
					<Link
						to={'/dashboard'}
						className="sm:text-lg lg:text-2xl text-blue-800 flex align-center items-center"
					>
						<CiServer className="md:text-2xl text-xl mr-2" />
						UKOTHOST
					</Link>
				</div>
				<ul className="menu rounded-md gap-4 text-slate-100">
					<li>
						<Link
							to={'/dashboard'}
							className="bg-blue-100 text-blue-900 hover:bg-blue-200 hover:text-blue-900"
						>
							<FaHome className="md:text-2xl text-xl mr-2" />
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to={'/messages'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<BiMessageSquareDetail className="md:text-2xl text-xl mr-2" />
							Messages
							<span className="badge badge-sm">15</span>
						</Link>
					</li>
					<li>
						<Link
							to={'/clients'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<FaUserFriends className="md:text-2xl text-xl mr-2" />
							Clients
						</Link>
					</li>
					<li>
						<Link
							to={'/orders'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<FaShoppingCart className="md:text-2xl text-xl mr-2" />
							Orders
							<span className="badge badge-sm">99+</span>
						</Link>
					</li>
					<li>
						<Link
							to={'/support'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<MdOutlineSupportAgent className="md:text-2xl text-xl mr-2" />
							Support
						</Link>
					</li>
					<li>
						<Link
							to={'/reports'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<TbReportAnalytics className="md:text-2xl text-xl mr-2" />
							Reports
						</Link>
					</li>
					<li>
						<Link
							to={'/setups'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<SlNotebook className="md:text-2xl text-xl mr-2" />
							Knowledge Base
						</Link>
					</li>
					<li>
						<Link
							to={'/setups'}
							className="hover:bg-blue-100 hover:text-blue-900"
						>
							<FaBlog className="md:text-2xl text-xl mr-2" />
							Blog Post
						</Link>
					</li>
				</ul>
			</aside>
			<nav className="md:col-span-5 md:row-span-1 row-span-1 flex flex-col bg-slate-100 shadow-y-lg">
				<div className="navbar flex-auto flex flex-row justify-between items-stretch border-b-2 px-8">
					<h2 className="flex-auto navbar-start text-2xl font-bold text-blue-900">
						Dashboard
					</h2>
					<label className="flex-auto navbar-center input input-bordered flex items-center gap-2">
						<input
							type="text"
							className="grow"
							placeholder="Search"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
					<div className="navbar-end flex-1 ml-4 w-24 border-l-2 pl-2 dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="mt-1 ml-2 btn-squared avatar"
						>
							<div className="w-10 border-2 border-slate-200 rounded-lg bg-slate-300">
								<img
									alt="Tailwind CSS Navbar component"
									src={user.picture}
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-row items-stretch justify-between sm:p-4 p-1 px-4 h-64">
					<h1 className="text-lg font-bold text-slate-500">
						Welcome back, {user.given_name}!
					</h1>
				</div>
			</nav>
			<main className="sm:grid sm:grid-rows-8 grid grid-row-6 sm:gap-4 gap-4 md:col-span-5 md:row-span-6 row-span-5 p-4 bg-slate-200">
				<div className="sm:row-span-2 sm:grid sm:grid-cols-5 sm:gap-8 gap-4 bg-slate-100 text-slate-200 p-2 shadow-sm rounded-lg">
					<div className="sm:col-span-1 flex flex-row items-stretch justify-between align-middle bg-sky-900 p-4 rounded-lg">
						<h1 className="flex flex-col items-stretch justify-between">
							<MdAttachMoney className="text-5xl" />
							<span>Revenue</span>
						</h1>
						<h2 className="text-4xl font-bold">3.9k</h2>
					</div>
					<div className="sm:col-span-1 flex flex-row items-stretch justify-between align-middle bg-sky-900 p-4 rounded-lg">
						<h1 className="flex flex-col items-stretch justify-between">
							<FaUserFriends className="text-5xl" />
							<span>Clients</span>
						</h1>
						<h2 className="text-4xl font-bold">390</h2>
					</div>
					<div className="sm:col-span-1 flex flex-row items-stretch justify-between align-middle bg-sky-900 p-4 rounded-lg">
						<h1 className="flex flex-col items-stretch justify-between">
							<FaShoppingCart className="text-5xl" />
							<span>Orders</span>
						</h1>
						<h2 className="text-4xl font-bold">15k</h2>
					</div>
					<div className="sm:col-span-1 flex flex-row items-stretch justify-between align-middle bg-sky-900 p-4 rounded-lg">
						<h1 className="flex flex-col items-stretch justify-between">
							<IoTicketOutline className="text-5xl" />
							<span>Open Tickets</span>
						</h1>
						<h2 className="text-4xl font-bold">10</h2>
					</div>
					<div className="sm:col-span-1 flex flex-row items-stretch justify-between align-middle bg-sky-900 p-4 rounded-lg">
						<h1 className="flex flex-col items-stretch justify-between">
							<IoTicket className="text-5xl" />
							<span>Closed Tickets</span>
						</h1>
						<h2 className="text-4xl font-bold">25</h2>
					</div>
				</div>
				<div className="sm:row-span-6">
					<div className="sm:grid sm:grid-cols-4 gap-4 h-full">
						<div className="sm:col-span-2  bg-slate-100 p-2 rounded-lg shadow-sm">
							<h1 className="p-1">Recent Orders</h1>
							<div>Table</div>
						</div>
						<div className="sm:col-span-2  bg-slate-100 p-2 rounded-lg shadow-sm">
							<h1 className="p-1">Recent Tickets</h1>
							<div>Table</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default AdminDashboard;
