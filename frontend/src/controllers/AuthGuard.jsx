import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import PageLoader from '../components/PageLoader';

export const AuthenticationGuard = ({ component: component }) => {
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => (
			<div className="w-full h-full flex justify-center align-middle items-center">
				<PageLoader />
			</div>
		),
	});

	return <Component />;
};
