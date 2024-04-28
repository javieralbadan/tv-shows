import { INITIAL_CATEGORIES } from '@/config/index.json';
import type { ItemResponse } from '@/types/ItemResponse';
import type { ShowItem } from '@/types/ShowItem';
import type { ShowListByCategory } from '@/types/ShowListByCategory';

export const searchListMapper = (list: ItemResponse[]): ShowItem[] => {
	return list.map(({ score, show }: ItemResponse) => ({
		score,
		...show,
	}));
};

export const showListMapper = (list: ShowItem[]): ShowListByCategory => {
	const genreReducer = (genreArray: string[], genre: string) => {
		const currentGenre = INITIAL_CATEGORIES.find(({ title }) => title === genre);
		if (currentGenre) {
			genreArray.push(currentGenre.id);
		}

		return genreArray;
	};

	const categoriesReducer = (acc: ShowListByCategory, show: ShowItem) => {
		if (!Array.isArray(show.genres)) {
			return acc;
		}

		const currentCategories = show.genres.reduce(genreReducer, []);
		currentCategories.map((category: string) => {
			if (acc[category] === undefined) {
				acc[category] = [];
			}

			acc[category].push(show);
		});

		return acc;
	};

	return list.reduce(categoriesReducer, {});
};
