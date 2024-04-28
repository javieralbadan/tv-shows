import { BASE_URL, CURRENT_DB } from '@/config/index.json';
import { searchListMapper, showListMapper } from '@/services/mappers/showsMapper';
import { useShowStore } from '@/stores/showsStore';

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
	const data = searchListMapper(rowdata);
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

export const showService = async (page: number = 1) => {
	const store = useShowStore();
	const storedShows = store.showsByCategories;

	if (Object.keys(storedShows).length) {
		return { data: storedShows, error: null };
	}

	const response: Response = await fetch(`${BASE_URL}/shows?page=${page}`);
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	}

	const rowdata = await response.json();
	const data = showListMapper(rowdata);
	store.setItemsByCategory({ shows: data });

	return { data, error: null };
};
