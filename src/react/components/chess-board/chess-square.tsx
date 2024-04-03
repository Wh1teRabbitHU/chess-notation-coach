import React from 'react';

import { ChessSquareType } from '../../../models/chess/square';
import { SquareHighlightType } from '../../../models/games/square-highlight';
import CheckPiece from './chess-piece';
import ChessNotation from './notation';

interface ChessSquareProps {
	square: ChessSquareType;
	showNotation: boolean;
	highlight?: SquareHighlightType;
	onClick: (square: ChessSquareType) => void;
}

const ChessSquare = ({ square, showNotation, highlight, onClick }: ChessSquareProps) => {
	const { file, rank, color, piece } = square;
	const className = `chess-square ${color}${typeof highlight == 'undefined' ? '' : ` ${highlight.color}-highlight`}`;

	return (
		<div className={className} data-rank={rank} data-file={file} onClick={() => onClick(square)}>
			<ChessNotation show={showNotation} square={square} />
			<CheckPiece type={piece} />
		</div>
	);
};

export default ChessSquare;
export type { ChessSquareProps };
