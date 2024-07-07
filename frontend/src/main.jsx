import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navigate from './controllers/Navigate';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navigate>
				<App />
			</Navigate>
		</BrowserRouter>
	</React.StrictMode>
);