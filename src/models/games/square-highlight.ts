import { ChessSquareType } from '../chess/square';

interface SquareHighlightType {
	color: 'red' | 'green' | 'blue';
	square: ChessSquareType;
}

export type { SquareHighlightType };
