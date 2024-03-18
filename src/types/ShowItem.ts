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
	premiered: string | null;
	ended: string | null;
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
		tvrage: string | number | null;
		thetvdb: string | number | null;
		imdb: string | number | null;
	};
	image: {
		medium: string;
		original: string;
	};
	summary: string; // HTML content
	updated: number; // Unix timestamp
}
