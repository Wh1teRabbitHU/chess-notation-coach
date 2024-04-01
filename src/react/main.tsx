import './main.scss';
import './vendor.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import DashboardPage from './pages/dashboard';

const Main = () => {
	return (
		<HashRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<DashboardPage />} />
				</Routes>
			</Layout>
		</HashRouter>
	);
};

const reactContainer = document.querySelector('#application-container');

if (reactContainer === null) {
	console.error('Unknown container selector!');
} else {
	const root = createRoot(reactContainer);

	root.render(<Main />);
}
