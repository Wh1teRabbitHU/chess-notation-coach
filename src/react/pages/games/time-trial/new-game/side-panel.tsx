import React from 'react';

import { ChessSquareType } from '../../../../../models/chess/square';
import Button from '../../../../components/control/button';
import If from '../../../../components/misc/if';
import useGameState from '../../../../hooks/context/game-state';

import './side-panel.scss';

interface SidePanelProps {
	target: ChessSquareType;
	lastFound?: boolean;
}

const SidePanel = ({ target, lastFound }: SidePanelProps) => {
	const { state, startTimer } = useGameState();

	return (
		<div className='side-panel'>
			<div className='title'>Time Trial Game</div>
			<div className='detail'>
				<span className='name'>Time elapsed: </span>
				<span className='value'>{state.timer} seconds</span>
			</div>
			<div className='detail'>
				<span className='name'>Round: </span>
				<span className='value'>{`${state.roundCount}/${state.maxRounds}`}</span>
			</div>
			<div className='detail'>
				<span className='name'>Next notation: </span>
				<span className='value'>{`${target.file}${target.rank}`}</span>
			</div>

			<If condition={typeof lastFound != 'undefined'}>
				<div className='detail'>
					<span className='name'>Result: </span>
					<span className='value'>{lastFound ? 'Found!' : 'Missed!'}</span>
				</div>

				<div className='detail'>
					<span className='name'>Hit / Missed: </span>
					<span className='value'>
						{state.roundCount - state.failedCount} / {state.failedCount}
					</span>
				</div>
			</If>

			<div className='description'>
				Select the right square from the board on the left as fast as you can. The goal of the game is to find
				the right square as fast as possible, without missing the right position!
			</div>

			<div className='control'>
				<Button text='Start Game' onClick={startTimer} />
			</div>
		</div>
	);
};

export default SidePanel;
