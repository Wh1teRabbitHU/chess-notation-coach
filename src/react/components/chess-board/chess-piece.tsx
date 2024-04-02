import React from 'react';

import { ChessPieceValues } from '../../../models/chess/piece';

interface CheckPieceProps {
	type?: ChessPieceValues;
}

const CheckPiece = ({ type }: CheckPieceProps) => {
	if (typeof type == 'undefined') {
		return <React.Fragment></React.Fragment>;
	}

	return <img src={`./assets/${type}.png`} className='check-piece' />;
};

export default CheckPiece;
