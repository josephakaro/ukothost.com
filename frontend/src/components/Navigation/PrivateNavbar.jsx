import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateNavbar = () => {
	const { logout, user } = useAuth0();
	return (
		<nav className="navbar bg-base-100 shadow-md">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">UKOTHOST</a>
			</div>
			<div className="flex-none items-start w-[30vw] gap-8">
				<div className="dropdown dropdown-end">
					<div className="flex items-stretch gap-2">
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-squared bg-green-600 text-slate-100 rounded-md"
							>
								Create
							</div>
							<ul
								tabIndex={0}
								className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
							>
								<li>
									<a>Dedicated Server</a>
								</li>
								<li>
									<a>Managed WordPress</a>
								</li>
								<li>
									<a>Managed Database</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="divider divider-horizontal"></div>
				<div className="flex flex-row w-64 gap-4">
					<div className="flex-none dropdown dropdown-end">
						<div
							tabIndex="0"
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt={user.name + 'profile image'}
									src={user.picture}
								/>
							</div>
						</div>
						<ul
							tabIndex="0"
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
								<button
									onClick={() =>
										logout({
											returnTo: window.location.origin,
										})
									}
								>
									Logout
								</button>
							</li>
						</ul>
					</div>
					<div className="flex flex-col justify-center text-sm flex-1">
						<h1 className="font-bold">{user.name}</h1>
						<h1 className="text-sm font-thin">
							{user.preferred_username}
						</h1>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default PrivateNavbar;
