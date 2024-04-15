import React, { useState } from 'react';

import { ChessSquareType } from '../../../../models/chess/square';
import { SquareHighlightType } from '../../../../models/games/square-highlight';
import { getRandomSquare, squareEqual } from '../../../../utils/chess';
import ChessBoard from '../../../components/chess-board/chess-board';
import useGameState from '../../../hooks/context/game-state';
import SidePanel from './new-game/side-panel';

import './new-game.scss';

const TimeTrialNewGamePage = () => {
	const [target, setTarget] = useState<ChessSquareType>(getRandomSquare());
	const [lastFound, setLastFound] = useState<boolean>();
	const [highlights, setHighlights] = useState<SquareHighlightType[]>([]);

	const { state, evaluateGuess } = useGameState();

	const gameRunning = state.stage === 'running';

	const onClickSquare = (selected: ChessSquareType) => {
		if (!gameRunning) {
			return;
		}

		const found = squareEqual(target, selected);
		const highlightTarget: SquareHighlightType = { color: found ? 'green' : 'blue', square: target };

		if (found) {
			setHighlights([highlightTarget]);
		} else {
			setHighlights([highlightTarget, { color: 'red', square: selected }]);
		}

		setLastFound(found);
		setTarget(getRandomSquare());
		evaluateGuess(found);
	};

	return (
		<div className='time-trial-new-game'>
			<ChessBoard
				highlights={highlights}
				onClickSquare={onClickSquare}
				emptyBoard={true}
				cursorHighlight={gameRunning}
			/>

			<SidePanel target={target} lastFound={lastFound} />
		</div>
	);
};

export default TimeTrialNewGamePage;
