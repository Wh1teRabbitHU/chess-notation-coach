import React from 'react';

import { ChessSquareDetails } from '../../../utils/chess';
import ChessSquare from './chess-square';

import './chess-board.scss';

const ChessBoard = () => {
	const squares = [];

	for (const detail of ChessSquareDetails) {
		squares.push(<ChessSquare file={detail.file} rank={detail.rank} color={detail.color} />);
	}

	return <div className='chess-board'>{squares}</div>;
};

export default ChessBoard;
