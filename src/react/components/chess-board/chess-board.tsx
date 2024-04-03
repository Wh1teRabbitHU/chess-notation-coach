import React from 'react';

import { ChessSquareType } from '../../../models/chess/square';
import { SquareHighlightType } from '../../../models/games/square-highlight';
import { getDefaultSquares, getEmptySquares, squareEqual } from '../../../utils/chess';
import ChessSquare from './chess-square';

import './chess-board.scss';

interface ChessBoardProps {
	highlights: SquareHighlightType[];
	onClickSquare: (square: ChessSquareType) => void;
	emptyBoard: boolean;
}

const ChessBoard = ({ highlights, emptyBoard, onClickSquare }: ChessBoardProps) => {
	const squareData = emptyBoard ? getEmptySquares() : getDefaultSquares();
	const squares = squareData.map(square => {
		const highlight = highlights.find(h => squareEqual(h.square, square));

		return (
			<ChessSquare
				key={`${square.file}${square.rank}`}
				onClick={onClickSquare}
				square={square}
				highlight={highlight}
				showNotation={false}
			/>
		);
	});

	return <div className='chess-board'>{squares}</div>;
};

export default ChessBoard;
