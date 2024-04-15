import { GameStageValues } from './game-stage';

interface GameStateType {
	stage: GameStageValues;
	roundCount: number;
	failedCount: number;
	maxRounds: number;
	timer: number;
}

export type { GameStateType };
