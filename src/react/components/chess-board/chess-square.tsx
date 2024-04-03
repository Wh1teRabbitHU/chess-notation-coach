import React from 'react';

import { ChessSquareType } from '../../../models/chess/square';
import CheckPiece from './chess-piece';
import ChessNotation from './notation';

interface ChessSquareProps {
	square: ChessSquareType;
	showNotation: boolean;
}

const ChessSquare = ({ square, showNotation }: ChessSquareProps) => {
	const { file, rank, color, piece } = square;

	return (
		<div className={`chess-square ${color}`} data-rank={rank} data-file={file}>
			<ChessNotation show={showNotation} square={square} />
			<CheckPiece type={piece} />
		</div>
	);
};

export default ChessSquare;
export type { ChessSquareProps };
