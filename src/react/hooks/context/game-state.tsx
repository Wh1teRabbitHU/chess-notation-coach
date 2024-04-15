import { useContext } from 'react';

import { GameStateContext, GameStateContextType } from '../../context/game-state';

const useGameState = () => {
	const gameStateCtx = useContext<GameStateContextType>(GameStateContext);

	return {
		...gameStateCtx
	};
};

export default useGameState;
