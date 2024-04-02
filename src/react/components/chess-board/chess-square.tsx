import React from 'react';

import { ChessFieldColorValues } from '../../../models/chess/field-color';
import { ChessFileValues } from '../../../models/chess/file';
import { ChessRankValues } from '../../../models/chess/rank';

interface ChessSquareProps {
	rank: ChessRankValues;
	file: ChessFileValues;
	color: ChessFieldColorValues;
}

const ChessSquare = ({ rank, file, color }: ChessSquareProps) => {
	return <div className={`chess-square ${color}`} data-rank={rank} data-file={file}></div>;
};

export default ChessSquare;
export type { ChessSquareProps };
