import React from 'react';
import PrivateNavbar from '../../components/Navigation/PrivateNavbar';
import Main from '../../components/Dashboard/Main';

const Dashboard = () => {
	return (
		<div className="flex flex-col w-full h-screen">
			<PrivateNavbar />
			<Main />
		</div>
	);
};

export default Dashboard;
