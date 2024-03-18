import { describe, expect, it } from 'vitest';
import { MOCK_LIST_MAPPED, MOCK_LIST_RESPONSE } from '../__mocks__/listData';
import { showListMapper } from '../showsMapper';

describe('showListMapper', () => {
	it('should map the give showList, of type ItemResponse, to ShowItem correctly', () => {
		const mappedResult = showListMapper(MOCK_LIST_RESPONSE);
		expect(mappedResult).toEqual(MOCK_LIST_MAPPED);
	});
});
