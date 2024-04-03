import React from 'react';

import { ChessSquareType } from '../../../../../models/chess/square';
import If from '../../../../components/misc/if';

interface GameDetailsProps {
	found: boolean;
	target: ChessSquareType;
	selected?: ChessSquareType;
}

const GameDetails = ({ found, target, selected }: GameDetailsProps) => {
	const squareHighlighted = typeof selected != 'undefined';

	return (
		<div className='game-details'>
			<div className='title'>Details</div>
			<div className='description'>Select the right square from the board on the left</div>
			<div className='notation'>
				<span className='label'>Notation:</span>
				<span className='value'>{`${target.file}${target.rank}`}</span>
			</div>

			<If condition={squareHighlighted}>
				<div className='result'>
					<span className='label'>Result:</span>
					<span className='value'>{found ? 'Success!' : 'Missed!'}</span>
				</div>
			</If>
		</div>
	);
};

export default GameDetails;
