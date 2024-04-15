import React, { useState } from 'react';

import { ReactChildrenType } from '../../models/common/react-children';
import { GameStateType } from '../../models/games/game-state';

interface GameStateContextProps {
	children: ReactChildrenType;
}

const defaultGameState: GameStateType = {
	stage: 'not-started',
	maxRounds: 20,
	roundCount: 0,
	failedCount: 0,
	timer: 0
};
const defaultContext = {
	state: defaultGameState,

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	updateState: (newState: GameStateType) => {},
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
		<GameStateContext.Provider value={{ state, updateState, startTimer, stopTimer, resetTimer }}>
			{children}
		</GameStateContext.Provider>
	);
};

export { GameStateContextProvider, GameStateContext };
export type { GameStateContextType };
