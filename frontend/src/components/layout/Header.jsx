import React from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { BiListMinus } from 'react-icons/bi';

const Header = () => {
	return (
		<div className="navbar bg-white text-slate-500 shadow-sm fixed top-0 left-0 z-[1]">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-circle swap swap-rotate lg:hidden"
					>
						<input type="checkbox" />
						<AiOutlineAlignLeft className="text-2xl swap-off fill-current" />
						<BiListMinus className="text-2xl swap-on fill-current" />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<li>
							<a>Products</a>
							<ul className="p-2">
								<li>
									<a>Featured Products</a>
								</li>
								<li>
									<a>Dedicated Server</a>
								</li>
								<li>
									<a>WordPress Hosting</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Solutions</a>
							<ul className="p-2">
								<li>
									<a>Cpanel Hosting</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Developers</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Partners</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Pricing</a>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">
					<img
						src="https://ukothost.fra1.cdn.digitaloceanspaces.com/assets/ukoth_Normal.png"
						alt="logo"
						width={100}
					/>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-lg">
					<li>
						<details>
							<summary>Products</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Solutions</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Developers</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Partners</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Pricing</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end flex gap-4 items-stretch">
				<button className="btn btn-ghost rounded-full text-slate-500">
					Log in
				</button>
				<button className="btn btn-ghost bg-blue-700 rounded-full text-slate-200">
					Sign up
				</button>
			</div>
		</div>
	);
};

export default Header;
