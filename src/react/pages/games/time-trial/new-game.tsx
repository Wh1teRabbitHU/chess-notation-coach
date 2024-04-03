import React, { useMemo, useState } from 'react';

import { ChessSquareType } from '../../../../models/chess/square';
import { SquareHighlightType } from '../../../../models/games/square-highlight';
import { getRandomSquare, squareEqual } from '../../../../utils/chess';
import ChessBoard from '../../../components/chess-board/chess-board';
import GameDetails from './new-game/game-details';

import './new-game.scss';

const TimeTrialNewGamePage = () => {
	const [target] = useState<ChessSquareType>(getRandomSquare());
	const [selected, selectSquare] = useState<ChessSquareType>();

	const squareHighlighted = typeof selected != 'undefined';
	const found = squareHighlighted ? squareEqual(target, selected) : false;
	const highlights = useMemo(() => {
		if (typeof selected == 'undefined') {
			return [];
		}

		const highlight: SquareHighlightType = { color: found ? 'green' : 'red', square: selected };

		return [highlight];
	}, [found, selected]);

	return (
		<div className='time-trial-new-game'>
			<ChessBoard highlights={highlights} onClickSquare={selectSquare} emptyBoard={true} />
			<GameDetails found={found} target={target} selected={selected} />
		</div>
	);
};

export default TimeTrialNewGamePage;
