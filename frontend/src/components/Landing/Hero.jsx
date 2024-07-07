import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Hero() {
	const { isAuthenticated, loginWithRedirect } = useAuth0();
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage:
					'url(https://ukothost.fra1.cdn.digitaloceanspaces.com/assets/bghero.jpg)',
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-lg">
					<h1 className="mb-5 text-5xl font-bold">
						Welcome to UkothHost
					</h1>
					<p className="mb-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					{!isAuthenticated && (
						<button
							className="btn btn-primary"
							onClick={() => loginWithRedirect()}
						>
							Get Free Trial
						</button>
					)}
					{isAuthenticated && (
						<Link className="btn btn-primary" to="/dashboard">
							Access Dashboard
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Hero;
