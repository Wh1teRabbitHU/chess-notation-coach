import React from 'react';

import { ChessSquareType } from '../../../../../models/chess/square';
import { GameStateType } from '../../../../../models/games/game-state';
import If from '../../../../components/misc/if';

interface SidePanelProps {
	target: ChessSquareType;
	gameState: GameStateType;
	lastFound?: boolean;
}

const SidePanel = ({ target, gameState, lastFound }: SidePanelProps) => {
	return (
		<div className='game-details'>
			<div className='title'>
				Game {gameState.roundCount}/{gameState.maxRounds}
			</div>
			<div className='description'>Select the right square from the board on the left</div>
			<div className='notation'>
				<span className='label'>Next notation: </span>
				<span className='value'>{`${target.file}${target.rank}`}</span>
			</div>

			<If condition={typeof lastFound != 'undefined'}>
				<div className='result'>
					<span className='label'>Result:</span>
					<span className='value'>{lastFound ? 'Found!' : 'Missed!'}</span>
				</div>
			</If>
		</div>
	);
};

export default SidePanel;
