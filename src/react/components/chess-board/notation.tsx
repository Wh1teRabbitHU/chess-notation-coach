import React from 'react';

import { ChessSquareType } from '../../../models/chess/square';
import If from '../misc/if';

interface ChessNotationProps {
	show: boolean;
	square: ChessSquareType;
}

const ChessNotation = ({ show, square }: ChessNotationProps) => {
	return (
		<If condition={show}>
			<span
				style={{
					position: 'absolute',
					left: '5%',
					top: '2%',
					fontSize: '1vh',
					color: square.color === 'black' ? 'white' : 'black'
				}}
			>{`${square.rank}-${square.file}`}</span>
		</If>
	);
};

export default ChessNotation;
