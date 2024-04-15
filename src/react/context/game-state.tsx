import React, { useState } from 'react';

import { ReactChildrenType } from '../../models/common/react-children';
import { GameStateType } from '../../models/games/game-state';

interface GameStateContextProps {
	children: ReactChildrenType;
}

const defaultGameState: GameStateType = {
	stage: 'not-started',
	maxRounds: 10,
	roundCount: 0,
	failedCount: 0,
	timer: 0
};
const defaultContext = {
	state: defaultGameState,

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	updateState: (newState: GameStateType) => {},
	startGame: () => {},
	stopGame: () => {},
	restartGame: () => {},

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	evaluateGuess: (found: boolean) => {},
	startTimer: () => {},
	stopTimer: () => {},
	resetTimer: () => {}
};

type GameStateContextType = typeof defaultContext;

const GameStateContext = React.createContext<GameStateContextType>(defaultContext);

const GameStateContextProvider = ({ children }: GameStateContextProps) => {
	const [state, setState] = useState<GameStateType>(defaultGameState);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

	const updateState = (newState: GameStateType) => {
		setState(newState);
	};

	const startGame = () => {
		startTimer();
		setState(prev => ({ ...prev, stage: 'running' }));
	};

	const stopGame = () => {
		resetTimer();
		setState(prev => ({ ...prev, stage: 'not-started' }));
	};

	const restartGame = () => {
		startTimer();
		setState({ ...defaultGameState, stage: 'running' });
	};

	const evaluateGuess = (found: boolean) => {
		const maxRoundReached = state.roundCount + 1 === state.maxRounds;

		updateState({
			...state,
			roundCount: state.roundCount + 1,
			failedCount: state.failedCount + (found ? 0 : 1),
			stage: maxRoundReached ? 'finished' : 'running'
		});

		if (maxRoundReached) {
			stopTimer();
		}
	};

	const startTimer = () => {
		resetTimer();

		setIntervalId(
			setInterval(() => {
				setState(prev => ({ ...prev, timer: prev.timer + 1 }));
			}, 1000)
		);
	};

	const stopTimer = () => {
		clearInterval(intervalId);
	};

	const resetTimer = () => {
		clearInterval(intervalId);
		setState(prev => ({ ...prev, timer: 0 }));
	};

	return (
		<GameStateContext.Provider
			value={{
				state,
				updateState,
				startGame,
				stopGame,
				restartGame,
				evaluateGuess,
				startTimer,
				stopTimer,
				resetTimer
			}}
		>
			{children}
		</GameStateContext.Provider>
	);
};

export { GameStateContextProvider, GameStateContext };
export type { GameStateContextType };
