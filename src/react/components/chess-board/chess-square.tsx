import React from 'react';

import { ChessFieldColorValues } from '../../../models/chess/field-color';
import { ChessFileValues } from '../../../models/chess/file';
import { ChessPieceValues } from '../../../models/chess/piece';
import { ChessRankValues } from '../../../models/chess/rank';
import CheckPiece from './chess-piece';

interface ChessSquareProps {
	rank: ChessRankValues;
	file: ChessFileValues;
	color: ChessFieldColorValues;
	piece?: ChessPieceValues;
}

const ChessSquare = ({ rank, file, color, piece }: ChessSquareProps) => {
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
