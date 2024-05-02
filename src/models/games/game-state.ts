import { GameStageValues } from './game-stage';
import { SquareHighlightType } from './square-highlight';

interface GameStateType {
	stage: GameStageValues;
	roundCount: number;
	failedCount: number;
	maxRounds: number;
	timer: number;
	highlights: SquareHighlightType[];
}

export type { GameStateType };
