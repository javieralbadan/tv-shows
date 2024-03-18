import { BASE_URL, CURRENT_DB } from '@/config/index.json';
import { showListMapper } from '@/services/mappers/showsMapper';

interface SearchProps {
	query?: string;
}

interface LookupProps {
	showId: string;
}

export const searchService = async ({ query = '*' }: SearchProps) => {
	const response: Response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	}

	const rowdata = await response.json();
	const data = showListMapper(rowdata);
	return { data, error: null };
};

export const lookupService = async ({ showId }: LookupProps) => {
	const response: Response = await fetch(`${BASE_URL}/lookup/shows?${CURRENT_DB}=${showId}`);
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	}

	const rowdata = await response.json();
	return { data: rowdata, error: null };
};
