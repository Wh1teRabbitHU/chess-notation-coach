import React, { useState } from 'react';

import { ChessSquareType } from '../../../../models/chess/square';
import { GameStateType } from '../../../../models/games/game-state';
import { SquareHighlightType } from '../../../../models/games/square-highlight';
import { getRandomSquare, squareEqual } from '../../../../utils/chess';
import ChessBoard from '../../../components/chess-board/chess-board';
import SidePanel from './new-game/side-panel';

import './new-game.scss';

const MAX_GAMES = 20;

const TimeTrialNewGamePage = () => {
	const [state, setState] = useState<GameStateType>({
		stage: 'not-started',
		roundCount: 0,
		failedCount: 0,
		maxRounds: MAX_GAMES
	});
	const [target, setTarget] = useState<ChessSquareType>(getRandomSquare());
	const [lastFound, setLastFound] = useState<boolean>();
	const [highlights, setHighlights] = useState<SquareHighlightType[]>([]);

	const onClickSquare = (selected: ChessSquareType) => {
		const found = squareEqual(target, selected);
		const highlightTarget: SquareHighlightType = { color: found ? 'green' : 'blue', square: target };

		if (found) {
			setHighlights([highlightTarget]);
		} else {
			const highlightGuess: SquareHighlightType = { color: 'red', square: selected };

			setHighlights([highlightTarget, highlightGuess]);
		}

		setLastFound(found);
		setTarget(getRandomSquare());
		setState(prev => ({
			...prev,
			roundCount: prev.roundCount + 1,
			failedCount: prev.failedCount + (found ? 0 : 1),
			stage: prev.roundCount + 1 === prev.maxRounds ? 'finished' : 'running'
		}));
	};

	return (
		<div className='time-trial-new-game'>
			<ChessBoard highlights={highlights} onClickSquare={onClickSquare} emptyBoard={true} />
			<SidePanel target={target} lastFound={lastFound} gameState={state} />
		</div>
	);
};

export default TimeTrialNewGamePage;
