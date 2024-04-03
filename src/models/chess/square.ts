import { ChessFieldColorValues } from './field-color';
import { ChessFileValues } from './file';
import { ChessPieceValues } from './piece';
import { ChessRankValues } from './rank';

interface ChessSquareType {
	file: ChessFileValues;
	rank: ChessRankValues;
	color: ChessFieldColorValues;
	piece?: ChessPieceValues;
}

export type { ChessSquareType };
