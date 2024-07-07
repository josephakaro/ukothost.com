// React Components
import React from 'react';
import { Link } from 'react-router-dom';

// Auth0 Components
import { useAuth0 } from '@auth0/auth0-react';

// React Icons
import { AiOutlineCloudServer } from 'react-icons/ai';

// Reusable Components
import { LoginButton } from '../Buttons/LoginButton';
import { LogoutButton } from '../Buttons/LogoutButton';
import { SignupButton } from '../Buttons/SignupButton';

function PublicNavbar() {
	const { isAuthenticated } = useAuth0();

	return (
		<div>
			<div className="navbar bg-sky-600 shadow-lg fixed top-0 left-0 z-[1]">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="#">Parent</Link>
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
								<a>Item 3</a>
							</li>
						</ul>
					</div>
					<Link to={'/'} className="btn btn-ghost text-xl">
						<AiOutlineCloudServer className="text-slate-100 text-5xl" />
						<span className="text-slate-100">UKOTHOST</span>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to={'about'}>About</Link>
						</li>
						<li>
							<details>
								<summary>More</summary>
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
				<div className="navbar-end xs:hidden">
					{!isAuthenticated && (
						<div className="flex flex-row items-end gap-3 w-44">
							<SignupButton />
							<LoginButton />
						</div>
					)}
					{isAuthenticated && <LogoutButton />}
				</div>
			</div>
		</div>
	);
}

export default PublicNavbar;
