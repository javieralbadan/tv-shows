import { describe, expect, it } from 'vitest';
import { MOCK_LIST_MAPPED, MOCK_LIST_RESPONSE } from '../__mocks__/listData';
import { searchListMapper } from '../showsMapper';

describe('searchListMapper', () => {
	it('should map the give showList, of type ItemResponse, to ShowItem correctly', () => {
		const mappedResult = searchListMapper(MOCK_LIST_RESPONSE);
		expect(mappedResult).toEqual(MOCK_LIST_MAPPED);
	});
});
