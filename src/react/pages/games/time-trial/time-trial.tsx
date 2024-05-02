import React, { useState } from 'react';

import { ChessSquareType } from '../../../../models/chess/square';
import { getRandomSquare, squareEqual } from '../../../../utils/chess';
import ChessBoard from '../../../components/chess-board/chess-board';
import useGameState from '../../../hooks/context/game-state';
import SidePanel from './components/side-panel';

import './time-trial.scss';

const TimeTrialNewGamePage = () => {
	const [lastFound, setLastFound] = useState<boolean>();
	const [target, setTarget] = useState<ChessSquareType>(getRandomSquare());
	const { state, evaluateGuess } = useGameState();

	const gameRunning = state.stage === 'running';

	const onClickSquare = (selected: ChessSquareType) => {
		if (!gameRunning) {
			return;
		}

		const found = squareEqual(target, selected);

		setLastFound(found);
		setTarget(getRandomSquare());
		evaluateGuess(found, target, selected);
	};

	return (
		<div className='time-trial-new-game'>
			<ChessBoard onClickSquare={onClickSquare} emptyBoard={true} cursorHighlight={gameRunning} />

			<SidePanel target={target} lastFound={lastFound} />
		</div>
	);
};

export default TimeTrialNewGamePage;
