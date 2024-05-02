import React from 'react';

import { ChessSquareType } from '../../../models/chess/square';
import { getDefaultSquares, getEmptySquares, squareEqual } from '../../../utils/chess';
import useGameState from '../../hooks/context/game-state';
import ChessSquare from './chess-square';

import './chess-board.scss';

interface ChessBoardProps {
	emptyBoard: boolean;
	cursorHighlight: boolean;
	onClickSquare: (square: ChessSquareType) => void;
}

const ChessBoard = ({ emptyBoard, cursorHighlight, onClickSquare }: ChessBoardProps) => {
	const { state } = useGameState();
	const squareData = emptyBoard ? getEmptySquares() : getDefaultSquares();
	const squares = squareData.map(square => {
		const highlight = state.highlights.find(h => squareEqual(h.square, square));

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

	const className = `chess-board${cursorHighlight ? ' cursor-highlight' : ''}`;

	return <div className={className}>{squares}</div>;
};

export default ChessBoard;
