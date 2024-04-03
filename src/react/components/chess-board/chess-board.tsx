import React from 'react';

import { getDefaultSquares } from '../../../utils/chess';
import ChessSquare from './chess-square';

import './chess-board.scss';

const ChessBoard = () => {
	const squares = getDefaultSquares().map(square => (
		<ChessSquare key={`${square.file}${square.rank}`} square={square} showNotation={false} />
	));

	return <div className='chess-board'>{squares}</div>;
};

export default ChessBoard;
