import React from 'react';

import ChessBoard from '../../../components/chess-board/chess-board';

const TimeTrialNewGamePage = () => {
	return (
		<div className='time-trial-container'>
			<ChessBoard emptyBoard={true} />
		</div>
	);
};

export default TimeTrialNewGamePage;
