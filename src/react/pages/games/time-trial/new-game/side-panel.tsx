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
	const { state, startGame, stopGame, restartGame } = useGameState();

	return (
		<div className='side-panel'>
			<div className='title'>Time Trial Game</div>

			<If condition={state.stage !== 'not-started'}>
				<div className='detail'>
					<span className='name'>Time elapsed: </span>
					<span className='value'>{state.timer} seconds</span>
				</div>
				<div className='detail'>
					<span className='name'>Round: </span>
					<span className='value'>{`${state.roundCount} / ${state.maxRounds}`}</span>
				</div>
			</If>

			<If condition={state.stage === 'running'}>
				<div className='detail'>
					<span className='name'>Next notation: </span>
					<span className='value'>{`${target.file}${target.rank}`}</span>
				</div>
			</If>

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
				<If condition={state.stage === 'not-started'}>
					<Button text='Start Game' onClick={startGame} />
				</If>

				<If condition={state.stage === 'running'}>
					<Button text='Stop Game' onClick={stopGame} />
				</If>

				<If condition={state.stage === 'finished'}>
					<Button text='Restart Game' onClick={restartGame} />
				</If>
			</div>
		</div>
	);
};

export default SidePanel;
