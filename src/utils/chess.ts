import { ChessFileValues } from '../models/chess/file';
import { ChessRankValues } from '../models/chess/rank';
import { ChessSquareType } from '../models/chess/square';

const chessSquares: ChessSquareType[] = [
	{ file: 'a', rank: '8', color: 'white', piece: 'black_rook' },
	{ file: 'b', rank: '8', color: 'black', piece: 'black_bishop' },
	{ file: 'c', rank: '8', color: 'white', piece: 'black_knight' },
	{ file: 'd', rank: '8', color: 'black', piece: 'black_queen' },
	{ file: 'e', rank: '8', color: 'white', piece: 'black_king' },
	{ file: 'f', rank: '8', color: 'black', piece: 'black_knight' },
	{ file: 'g', rank: '8', color: 'white', piece: 'black_bishop' },
	{ file: 'h', rank: '8', color: 'black', piece: 'black_rook' },

	{ file: 'a', rank: '7', color: 'black', piece: 'black_pawn' },
	{ file: 'b', rank: '7', color: 'white', piece: 'black_pawn' },
	{ file: 'c', rank: '7', color: 'black', piece: 'black_pawn' },
	{ file: 'd', rank: '7', color: 'white', piece: 'black_pawn' },
	{ file: 'e', rank: '7', color: 'black', piece: 'black_pawn' },
	{ file: 'f', rank: '7', color: 'white', piece: 'black_pawn' },
	{ file: 'g', rank: '7', color: 'black', piece: 'black_pawn' },
	{ file: 'h', rank: '7', color: 'white', piece: 'black_pawn' },

	{ file: 'a', rank: '6', color: 'white' },
	{ file: 'b', rank: '6', color: 'black' },
	{ file: 'c', rank: '6', color: 'white' },
	{ file: 'd', rank: '6', color: 'black' },
	{ file: 'e', rank: '6', color: 'white' },
	{ file: 'f', rank: '6', color: 'black' },
	{ file: 'g', rank: '6', color: 'white' },
	{ file: 'h', rank: '6', color: 'black' },

	{ file: 'a', rank: '5', color: 'black' },
	{ file: 'b', rank: '5', color: 'white' },
	{ file: 'c', rank: '5', color: 'black' },
	{ file: 'd', rank: '5', color: 'white' },
	{ file: 'e', rank: '5', color: 'black' },
	{ file: 'f', rank: '5', color: 'white' },
	{ file: 'g', rank: '5', color: 'black' },
	{ file: 'h', rank: '5', color: 'white' },

	{ file: 'a', rank: '4', color: 'white' },
	{ file: 'b', rank: '4', color: 'black' },
	{ file: 'c', rank: '4', color: 'white' },
	{ file: 'd', rank: '4', color: 'black' },
	{ file: 'e', rank: '4', color: 'white' },
	{ file: 'f', rank: '4', color: 'black' },
	{ file: 'g', rank: '4', color: 'white' },
	{ file: 'h', rank: '4', color: 'black' },

	{ file: 'a', rank: '3', color: 'black' },
	{ file: 'b', rank: '3', color: 'white' },
	{ file: 'c', rank: '3', color: 'black' },
	{ file: 'd', rank: '3', color: 'white' },
	{ file: 'e', rank: '3', color: 'black' },
	{ file: 'f', rank: '3', color: 'white' },
	{ file: 'g', rank: '3', color: 'black' },
	{ file: 'h', rank: '3', color: 'white' },

	{ file: 'a', rank: '2', color: 'white', piece: 'white_pawn' },
	{ file: 'b', rank: '2', color: 'black', piece: 'white_pawn' },
	{ file: 'c', rank: '2', color: 'white', piece: 'white_pawn' },
	{ file: 'd', rank: '2', color: 'black', piece: 'white_pawn' },
	{ file: 'e', rank: '2', color: 'white', piece: 'white_pawn' },
	{ file: 'f', rank: '2', color: 'black', piece: 'white_pawn' },
	{ file: 'g', rank: '2', color: 'white', piece: 'white_pawn' },
	{ file: 'h', rank: '2', color: 'black', piece: 'white_pawn' },

	{ file: 'a', rank: '1', color: 'black', piece: 'white_rook' },
	{ file: 'b', rank: '1', color: 'white', piece: 'white_bishop' },
	{ file: 'c', rank: '1', color: 'black', piece: 'white_knight' },
	{ file: 'd', rank: '1', color: 'white', piece: 'white_queen' },
	{ file: 'e', rank: '1', color: 'black', piece: 'white_king' },
	{ file: 'f', rank: '1', color: 'white', piece: 'white_knight' },
	{ file: 'g', rank: '1', color: 'black', piece: 'white_bishop' },
	{ file: 'h', rank: '1', color: 'white', piece: 'white_rook' }
];

const chessFiles: ChessFileValues[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const chessRanks: ChessRankValues[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const getEmptySquares = (): ChessSquareType[] => {
	return chessSquares.map(({ file, rank, color }) => ({ file, rank, color }));
};

const getDefaultSquares = (): ChessSquareType[] => {
	return chessSquares.map(({ file, rank, color, piece }) => ({ file, rank, color, piece }));
};

const getRandomSquare = (): ChessSquareType => {
	const { file, rank, color } = chessSquares[Math.random() * chessSquares.length];

	return { file, rank, color };
};

export { chessFiles, chessRanks, getEmptySquares, getDefaultSquares, getRandomSquare };
