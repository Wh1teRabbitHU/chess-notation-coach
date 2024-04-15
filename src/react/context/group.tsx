import React from 'react';

import { ReactChildrenType } from '../../models/common/react-children';
import { GameStateContextProvider } from './game-state';

interface ContextGroupProps {
	children: ReactChildrenType;
}

const ContextGroup = ({ children }: ContextGroupProps) => {
	return <GameStateContextProvider>{children}</GameStateContextProvider>;
};

export default ContextGroup;
