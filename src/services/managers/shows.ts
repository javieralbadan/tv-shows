import { showListMapper } from '@/services/mappers/showsMapper';
import { BASE_URL } from '@/config/index.json';

interface props {
	query?: string;
}

export const searchService = async ({ query = '*' }: props) => {
	const response: Response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
	if (response.status !== 200) {
		return { data: null, error: response.statusText };
	}

	const rowdata = await response.json();
	const data = showListMapper(rowdata);
	return { data, error: null };
};
