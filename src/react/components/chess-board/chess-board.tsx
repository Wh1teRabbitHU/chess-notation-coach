import React from 'react';

import { getDefaultSquares, getEmptySquares } from '../../../utils/chess';
import ChessSquare from './chess-square';

import './chess-board.scss';

interface ChessBoardProps {
	emptyBoard: boolean;
}

const ChessBoard = ({ emptyBoard }: ChessBoardProps) => {
	const squareData = emptyBoard ? getEmptySquares() : getDefaultSquares();
	const squares = squareData.map(square => (
		<ChessSquare key={`${square.file}${square.rank}`} square={square} showNotation={false} />
	));

	return <div className='chess-board'>{squares}</div>;
};

export default ChessBoard;
