import React, { useState } from 'react';

import { ChessSquareType } from '../../models/chess/square';
import { ReactChildrenType } from '../../models/common/react-children';
import { GameStateType } from '../../models/games/game-state';
import { SquareHighlightType } from '../../models/games/square-highlight';

interface GameStateContextProps {
	children: ReactChildrenType;
}

const defaultGameState: GameStateType = {
	stage: 'not-started',
	maxRounds: 10,
	roundCount: 0,
	failedCount: 0,
	timer: 0,
	highlights: []
};
const defaultContext = {
	state: defaultGameState,

	setState: <AttrType extends keyof GameStateType>(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		attribute: AttrType,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		newState: GameStateType[AttrType]
	) => {},
	startGame: () => {},
	stopGame: () => {},
	restartGame: () => {},

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	evaluateGuess: (found: boolean, target: ChessSquareType, selected: ChessSquareType) => {},
	startTimer: () => {},
	stopTimer: () => {},
	resetTimer: () => {}
};

type GameStateContextType = typeof defaultContext;

const GameStateContext = React.createContext<GameStateContextType>(defaultContext);

const GameStateContextProvider = ({ children }: GameStateContextProps) => {
	const [state, setState] = useState<GameStateType>(defaultGameState);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

	const setStateAttr = <AttrType extends keyof GameStateType>(
		stateAttr: AttrType,
		newValue: GameStateType[AttrType]
	) => {
		setState(prev => ({ ...prev, [stateAttr]: newValue }));
	};

	const startGame = () => {
		startTimer();
		setStateAttr('stage', 'running');
	};

	const stopGame = () => {
		resetTimer();
		setState(prev => ({ ...prev, stage: 'not-started', highlights: [] }));
	};

	const restartGame = () => {
		startTimer();
		setStateAttr('stage', 'running');
	};

	const evaluateGuess = (found: boolean, target: ChessSquareType, selected: ChessSquareType) => {
		const maxRoundReached = state.roundCount + 1 === state.maxRounds;
		const highlightTarget: SquareHighlightType = { color: found ? 'green' : 'blue', square: target };
		const highlights: SquareHighlightType[] = found
			? [highlightTarget]
			: [highlightTarget, { color: 'red', square: selected }];

		setState({
			...state,
			highlights,
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
		setStateAttr('timer', 0);
	};

	return (
		<GameStateContext.Provider
			value={{
				state,
				setState: setStateAttr,
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
