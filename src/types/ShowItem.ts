/* eslint-disable semi */
export interface ShowItem {
	id: number;
	url: string;
	name: string;
	type: string;
	language: string;
	genres: string[];
	status: string;
	runtime: number;
	averageRuntime: number;
	premiered: string;
	ended: string;
	officialSite: string | null;
	schedule: {
		time: string;
		days: string[];
	};
	rating: {
		average: number | null;
	};
	weight: number;
	network: {
		id: number;
		name: string;
		country: {
			name: string;
			code: string;
			timezone: string;
		};
		officialSite: string | null;
	};
	externals: {
		tvrage: string;
		thetvdb: string;
		imdb: string;
	};
	image: {
		medium: string;
		original: string;
	};
	summary: string; // HTML content
	updated: number; // Unix timestamp
}
