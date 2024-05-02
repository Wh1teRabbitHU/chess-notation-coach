import './main.scss';
import './vendor.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout/layout';
import DashboardPage from './pages/dashboard';
import TimeTrialMenuPage from './pages/games/time-trial/menu';
import TimeTrialNewGamePage from './pages/games/time-trial/time-trial';
import TimeTrialHighscorePage from './pages/games/time-trial/highscore';
import TimeTrialHelpPage from './pages/games/time-trial/help';
import ContextGroup from './context/group';

const Main = () => {
	return (
		<HashRouter>
			<ContextGroup>
				<Layout>
					<Routes>
						<Route path='/' element={<DashboardPage />} />

						<Route path='/time-trial' element={<TimeTrialMenuPage />} />
						<Route path='/time-trial/new-game' element={<TimeTrialNewGamePage />} />
						<Route path='/time-trial/highscore' element={<TimeTrialHighscorePage />} />
						<Route path='/time-trial/help' element={<TimeTrialHelpPage />} />
					</Routes>
				</Layout>
			</ContextGroup>
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
