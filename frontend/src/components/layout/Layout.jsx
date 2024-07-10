import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col items-center h-screen w-screen">
			<Header />
			<div className="flex-1 w-full">
				<Main>{children}</Main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
