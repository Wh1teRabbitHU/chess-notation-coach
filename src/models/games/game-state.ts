import { GameStageValues } from './game-stage';
import { SquareHighlightType } from './square-highlight';

interface GameStateType {
	maxRounds: number;
	penalty: number;
	stage: GameStageValues;
	roundCount: number;
	failedCount: number;
	timer: number;
	highlights: SquareHighlightType[];
}

export type { GameStateType };
