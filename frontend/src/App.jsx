import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Controllers
import { AuthenticationGuard } from './controllers/AuthGuard';

// Protected Routes
import Dashboard from './Pages/Auth/Dashboard';
import Domains from './Pages/Auth/Domains';
import PrivateServers from './Pages/Auth/PrivateServers';
import Website from './Pages/Auth/Website';
import Email from './Pages/Auth/Email';

// Public Routes
import Landing from './Pages/Public/Landing';
import About from './Pages/Public/About';
import Contact from './Pages/Public/Contact';
import NotFound from './Pages/Error/NotFound';

// Page Middlewares
import PageLoader from './components/PageLoader';

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className="page-layout">
				<PageLoader />
			</div>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route
				path="/dashboard"
				element={<AuthenticationGuard component={Dashboard} />}
			/>
			<Route
				path="/domain"
				element={<AuthenticationGuard component={Domains} />}
			/>
			<Route
				path="/vps"
				element={<AuthenticationGuard component={PrivateServers} />}
			/>
			<Route
				path="/websites"
				element={<AuthenticationGuard component={Website} />}
			/>
			<Route
				path="/emails"
				element={<AuthenticationGuard component={Email} />}
			/>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
export default App;
