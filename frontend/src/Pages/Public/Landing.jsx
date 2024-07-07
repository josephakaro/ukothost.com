import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../../components/layout/Layout';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

function Landing() {
	const { loginWithRedirect, signupWithRedirect } = useAuth0();
	return (
		<Layout>
			{/* Hero Section Here */}
			<div
				className="hero text-slate-200 min-h-screen max-w-ful"
				style={{
					backgroundImage:
						'url(https://www.digitalocean.com/api/static-content/v1/images?src=%2F_next%2Fstatic%2Fmedia%2Fnews.4a0b961d.svg&width=750)',
				}}
			>
				<div className="hero-overlay bg-opacity-10"></div>
				<div className="hero-content text-center max-w-xl">
					<div className="max-w-xl">
						<h1 className="text-5xl font-bold">
							Learn Here. Dream Here. Develop Here.
						</h1>
						<p className="py-6">
							Join the wave of developers building and scaling
							apps with simple cloud tools, top-tier reliability,
							and predictable pricing. Powerful and
							production-ready, our cloud platform has the
							solutions you need to succeed.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button
								className="btn btn-ghost bg-slate-200 text-slate-700 hover:bg-blue-700 hover:text-slate-200 transition-all duration-500 rounded-full"
								onClick={() => loginWithRedirect()}
							>
								Sign with Email
							</button>
							<button
								className="btn btn-ghost bg-slate-200 text-slate-700 hover:bg-blue-700 hover:text-slate-200 transition-all duration-500 rounded-full"
								onClick={() => loginWithRedirect()}
							>
								<FcGoogle className="text-xl mr-3" />
								Sign with Email
							</button>
							<button
								className="btn btn-ghost bg-slate-200 text-slate-700 hover:bg-blue-700 hover:text-slate-200 transition-all duration-500  rounded-full"
								onClick={() => loginWithRedirect()}
							>
								<FaGithub className="text-xl mr-3" />
								Sign with Email
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Section Here */}
			<div className="sm:h-[50vh] sm:min-w-[50vw] flex flex-col items-center justify-center align-middle">
				<div className="stats stats-vertical sm:stats-horizontal w-full p-1 my-8 overflow-hidden">
					<div className="stat place-items-center">
						<div className="stat-value">#1</div>
						<div className="stat-title">
							In IaaS usability, VPS for SMBs, & SMB Hosting on G2
						</div>
					</div>

					<div className="stat place-items-center">
						<div className="stat-value">99.99%</div>
						<div className="stat-title">
							Uptime SLA for Droplets and Volumes block storage
						</div>
					</div>

					<div className="stat place-items-center">
						<div className="stat-value">600k+</div>
						<div className="stat-title">
							Customers building with UkotHost
						</div>
					</div>
				</div>
			</div>

			{/* Community Section Here */}
			<div className="sm:flex sm:flex-col flex flex-col items-center justify-center p-4 align-middle bg-green-200 sm:w-full sm:h-[100vh] w-[100vw] h-[100vh]">
				<div
					className="hero  bg-base-200 sm:w-[100vw] sm:h-[50vh] w-[100vw] h-[100vh] rounded-2xl overflow-hidden"
					style={{
						backgroundImage:
							'url(https://www.digitalocean.com/_next/static/media/cta-deploy.865d801c.svg)',
						width: '50%',
						height: '50%',
					}}
				>
					<div className="hero-overlay"></div>
					<div className=" flex hero-content lg:flex-row-reverse">
						<div className="w-full">
							<h1 className="sm:text-5xl text-3xl font-bold">
								<img
									src="https://www.digitalocean.com/_next/static/media/deploy-logo-footer.edebbe83.svg"
									alt="deploy"
									width={250}
								/>
							</h1>
							<p className="sm:py-6 py-5 text-slate-200">
								UkotHost's virtual conference for developers,
								startups, and founders is back on July 22, 2024
							</p>
							<button className="btn btn-ghost rounded-lg bg-slate-200">
								Register Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Landing;
