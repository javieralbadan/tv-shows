import type { ItemResponse } from '@/types/ItemResponse';
import type { ShowItem } from '@/types/ShowItem';

export const showListMapper = (showList: ItemResponse[]): ShowItem[] => {
	return showList.map(({ score, show }) => ({
		score,
		...show,
	}));
};
