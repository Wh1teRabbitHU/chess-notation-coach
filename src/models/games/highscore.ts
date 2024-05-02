interface HighscoreType {
	timestamp: string;
	times: {
		original: number;
		adjusted: number;
	};
	maxRounds: number;
	found: number;
	penalty: number;
}

export type { HighscoreType };
