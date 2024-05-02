import React from 'react';

import { HighscoreType } from '../../../../../models/games/highscore';

import './highscore-item.scss';

interface HighscoreItemProps {
	highscore: HighscoreType;
}

const HighscoreItem = ({ highscore }: HighscoreItemProps) => {
	return (
		<div className='highscore-item'>
			<div className='detail'>
				<div className='name'>Timestamp</div>
				<div className='value small'>{highscore.timestamp}</div>
			</div>
			<div className='detail'>
				<div className='name'>Adjusted Time</div>
				<div className='value'>{highscore.times.adjusted}</div>
			</div>
			<div className='detail'>
				<div className='name'>Rounds</div>
				<div className='value'>{highscore.maxRounds}</div>
			</div>
			<div className='detail'>
				<div className='name'>Missed</div>
				<div className='value'>{highscore.maxRounds - highscore.found}</div>
			</div>
		</div>
	);
};

export default HighscoreItem;
