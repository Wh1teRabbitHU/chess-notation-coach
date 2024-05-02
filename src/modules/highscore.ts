import { GameStateType } from '../models/games/game-state';
import { HighscoreType } from '../models/games/highscore';
import localStorage from './local-storage';

const highscoresKey = 'time-trial.highscore';
const maxHighscores = 10;

const getHighscores = (): HighscoreType[] => {
	const rawHighscores = localStorage.get(highscoresKey);

	if (rawHighscores === null) {
		return [];
	}

	return JSON.parse(rawHighscores) as HighscoreType[];
};

const addHighscore = (state: GameStateType) => {
	let highscores = getHighscores();
	const newHighscore = {
		timestamp: new Date().toLocaleTimeString(),
		found: state.maxRounds - state.failedCount,
		maxRounds: state.maxRounds,
		penalty: state.failedCount * state.penalty,
		times: {
			original: state.timer,
			adjusted: state.timer + state.failedCount * state.penalty
		}
	};

	highscores.push(newHighscore);
	highscores.sort((a: HighscoreType, b: HighscoreType) => b.times.adjusted - a.times.adjusted);

	if (highscores.length > maxHighscores) {
		highscores = highscores.slice(0, -1);
	}

	localStorage.set(highscoresKey, JSON.stringify(highscores));

	return highscores;
};

const clearHighscores = () => {
	localStorage.set(highscoresKey, JSON.stringify([]));
};

export default { getHighscores, addHighscore, clearHighscores };
