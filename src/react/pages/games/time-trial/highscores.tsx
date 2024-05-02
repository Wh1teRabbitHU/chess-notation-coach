import React from 'react';

import highscore from '../../../../modules/highscore';
import Button from '../../../components/control/button';
import HighscoreItem from './components/highscore-item';

import './highscores.scss';

const TimeTrialHighscorePage = () => {
	const highscores = highscore.getHighscores();
	const highscoreItems = highscores.map(highscore => (
		<HighscoreItem key={highscore.timestamp} highscore={highscore} />
	));

	const clearHighscores = () => {
		highscore.clearHighscores();

		window.location.reload();
	};

	return (
		<div className='highscores'>
			<h2 className='title'>Highscores</h2>

			<div className='highscore-list'>{highscoreItems}</div>

			<div className='controls'>
				<Button text='Clear' onClick={clearHighscores} disabled={highscores.length === 0} />
				<Button text='Back' target='/time-trial' />
			</div>
		</div>
	);
};

export default TimeTrialHighscorePage;
