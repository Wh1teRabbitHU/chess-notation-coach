import React from 'react';

import { ChessSquareType } from '../../../models/chess/square';
import CheckPiece from './chess-piece';

interface ChessSquareProps {
	square: ChessSquareType;
}

const ChessSquare = ({ square }: ChessSquareProps) => {
	const { file, rank, color, piece } = square;

	return (
		<div className={`chess-square ${color}`} data-rank={rank} data-file={file}>
			<span
				style={{
					position: 'absolute',
					left: '5%',
					top: '2%',
					fontSize: '1vh',
					color: color === 'black' ? 'white' : 'black'
				}}
			>{`${rank}-${file}`}</span>
			<CheckPiece type={piece} />
		</div>
	);
};

export default ChessSquare;
export type { ChessSquareProps };
