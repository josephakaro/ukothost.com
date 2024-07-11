import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../../components/layout/Layout';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaDatabase } from 'react-icons/fa';
import { BsDropletFill } from 'react-icons/bs';
import { SiKubernetes, SiNvidia } from 'react-icons/si';
import { MdOutlineAppShortcut } from 'react-icons/md';
import { TiCloudStorage } from 'react-icons/ti';
import { IoMdHelpCircleOutline } from 'react-icons/io';

function Landing() {
	const { loginWithRedirect } = useAuth0();
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
			<div className="sm:h-[50vh] sm:min-w-[100vw] flex flex-col items-center p-8 justify-center align-middle">
				<div className="stats stats-vertical sm:stats-horizontal h-full w-full p-0 overflow-hidden">
					<div className="stat place-items-center min-w-[50vw]">
						<div className="stat-value">#1</div>
						<div className="stat-title text-wrap">
							In IaaS usability, VPS for SMBs, & SMB Hosting on G2
						</div>
					</div>
					<div className="stat place-items-center">
						<div className="stat-value">99.99%</div>
						<div className="stat-title text-wrap">
							Uptime SLA for Droplets and Volumes block storage
						</div>
					</div>
					<div className="stat place-items-center">
						<div className="stat-value">600k+</div>
						<div className="stat-title text-wrap">
							Customers building with UkotHost
						</div>
					</div>
				</div>
			</div>

			{/* Community Section Here */}
			<div className="sm:flex sm:flex-col items-start sm:items-center justify-center p-4 align-middle bg-green-200 sm:w-full sm:h-[100vh] w-full h-[100vh]">
				<div
					className="hero  bg-base-200 sm:min-w-[80vw] sm:min-h-[50vh] min-w-full min-h-full rounded-2xl overflow-hidden"
					style={{
						backgroundImage:
							'url(https://www.digitalocean.com/_next/static/media/cta-deploy.865d801c.svg)',
						width: '50%',
						height: '50%',
					}}
				>
					<div className="hero-overlay"></div>
					<div className=" flex flex-1 align-top items-start sm:items-center w-full h-[50vh] hero-content lg:flex-row-reverse">
						<div className="">
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

			{/* Products Section Here */}
			<div className="flex flex-col items-center justify-between gap-4 sm:p-12 p-8 w-full h-full">
				<div className="text-center">
					<h1 className="text-5xl font-bold">
						A cloud for your entire journey
					</h1>
					<p className="py-6 font-light text-wrap">
						UkotHost's suite of products is designed to be with you
						on every step of your journey, whether you want to do it
						yourself or get help from the experts.
					</p>
					<a className="btn btn-link text-slate-600 text-lg">
						See all Products
					</a>
				</div>
				<div className="grid sm:grid-cols-3 grid-col-span-1 grid-cols-1 gap-8 mt-8">
					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title border-b-2 border-dashed pb-4">
							<BsDropletFill className="text-3xl text-blue-700 mr-3" />
							Virtual machines
						</div>
						<div className="card-body">
							<p>
								UkotHost Droplets are simple, scalable virtual
								machines for all your web hosting and VPS
								hosting needs.
							</p>
						</div>
						<div className="card-actions">
							<a className="btn btn-link text-slate-700">
								Learn More
							</a>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title border-b-2 border-dashed pb-4">
							<SiKubernetes className="text-3xl text-blue-700 mr-3" />
							Kubernetes
						</div>
						<div className="card-body">
							<p>
								UkotHost Kubernetes is a managed solution that
								is easy to scale and includes a 99.5% SLA and
								free control plane.
							</p>
						</div>
						<div className="card-actions">
							<a className="btn btn-link text-slate-700">
								Learn More
							</a>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title border-b-2 border-dashed pb-4">
							<SiNvidia className="text-3xl text-blue-700 mr-3" />
							NVIDIA H100 GPUs
						</div>
						<div className="card-body">
							<p>
								NVIDIA H100 GPUs are now available via
								Paperspace by DigitalOcean. Build epic AI/ML
								applications.
							</p>
						</div>
						<div className="card-actions">
							<a className="btn btn-link text-slate-700">
								Learn More
							</a>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title border-b-2 border-dashed pb-4">
							<MdOutlineAppShortcut className="text-3xl text-blue-700 mr-3" />
							App Platform
						</div>
						<div className="card-body">
							<p>
								App Platform is our fully-managed PaaS solution
								to get your app to market fast that's super
								simple to set up and cost-effective.
							</p>
						</div>
						<div className="card-actions">
							<a className="btn btn-link text-slate-700">
								Learn More
							</a>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title border-b-2 border-dashed pb-4">
							<FaDatabase className="text-3xl text-blue-700 mr-3" />
							Managed databases
						</div>
						<div className="card-body">
							<p>
								App Platform is our fully-managed PaaS solution
								to get your app to market fast that's super
								simple to set up and cost-effective.
							</p>
						</div>
						<div className="card-actions">
							<a className="btn btn-link text-slate-700">
								Learn More
							</a>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title border-b-2 border-dashed pb-4">
							<TiCloudStorage className="text-3xl text-blue-700 mr-3" />
							Storage
						</div>
						<div className="card-body">
							<p>
								DigitalOcean Spaces object storage and Volumes
								block storage are business-ready storage
								solutions
							</p>
						</div>
						{/* <div className="card-actions">
							<a className="btn btn-link text-slate-700">
								Learn More
							</a>
						</div> */}
					</div>
					<div className="card sm:col-span-3 col-span-1 sm:card-side  bg-blue-200 border-2 border-slate-300 rounded-2xl p-3">
						<figure>
							<IoMdHelpCircleOutline className="sm:text-lg text-4xl mr-3 text-blue-800" />
						</figure>
						<div className="card-body">
							<p>
								*Redis is a registered trademark of Redis Labs
								Ltd. Any rights therein are reserved to Redis
								Labs Ltd. Any use by DigitalOcean is for
								referential purposes only and does not indicate
								any sponsorship, endorsement or affiliation
								between Redis and DigitalOcean.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Value offering Section Here */}
			<div className="flex flex-col items-center bg-blue-300 justify-between gap-4 sm:p-12 p-8 w-full h-full">
				<div className="text-center">
					<h1 className="text-5xl font-bold text-wrap">
						Benefits to activate the builder in you
					</h1>
					<p className="py-6 font-light text-wrap">
						From simple tools and predictable pricing to support
						designed for growing businesses, UkotHost's cloud is
						built to serve the unique needs of startups and SMBs.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 grid-col-span-1 grid-cols-1 gap-8 mt-8">
					<div className="card col-span-1 bg-slate-50 border-2 border-slate-200 rounded-2xl p-4">
						<div className="card-title text-2xl font-bold p-4">
							Build and ship faster using simple tools
						</div>
						<div className="card-body">
							<p>
								All of our products are built with simplicity at
								their core, so you can spend your time focusing
								on building apps, not infrastructure.
							</p>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title text-2xl font-bold p-4">
							Grow profitably with predictable cloud costs
						</div>
						<div className="card-body">
							<p>
								Our predictable pricing and leading
								price-to-performance ratio contribute to an ROI
								of 186%, according to a Forrester study.
							</p>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title text-2xl font-bold p-4">
							Reduce your roadblocks with dedicated support
						</div>
						<div className="card-body">
							<p>
								Get free, personalized support or upgrade to
								paid plans to receive dedicated help and faster
								response times
							</p>
						</div>
					</div>

					<div className="card col-span-1 bg-slate-100 border-2 border-slate-300 rounded-2xl p-4">
						<div className="card-title text-2xl font-bold p-4">
							Improve customer experience by building on a
							reliable platform
						</div>
						<div className="card-body">
							<p>
								Deliver superior customer experience with our
								globally distributed platform, minimal downtime,
								and intuitive products.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Landing;
