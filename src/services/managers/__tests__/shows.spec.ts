import * as mappers from '@/services/mappers/showsMapper';
import { describe, expect, it, vi } from 'vitest';
import { MOCK_LIST_RESPONSE, MOCK_SHOW_DETAIL_RESPONSE } from '../__mocks__/serviceData';
import { lookupService, searchService } from '../showsManager';

describe('searchService', () => {
	it('searchService should return error when response status is not 200', async () => {
		vi.spyOn(mappers, 'showListMapper');
		const mockResponse = { status: 404, statusText: 'Not Found' };
		const fetchMock = vi.fn().mockResolvedValue(mockResponse);
		global.fetch = fetchMock;

		const result = await searchService({ query: 'thriller' });

		expect(result.data).toBeNull();
		expect(result.error).toBe(mockResponse.statusText);
		expect(mappers.showListMapper).not.toHaveBeenCalled();
	});

	it('searchService should return data when response status is 200', async () => {
		vi.spyOn(mappers, 'showListMapper');
		const mockResponse = {
			status: 200,
			json: async () => MOCK_LIST_RESPONSE,
		};
		const fetchMock = vi.fn().mockResolvedValue(mockResponse);
		global.fetch = fetchMock;

		const result = await searchService({ query: 'thriller' });

		expect(result.data).toBeDefined();
		expect(result.error).toBeNull();
		expect(mappers.showListMapper).toHaveBeenCalled();
	});
});

describe('lookupService', () => {
	it('lookupService should return error when response status is not 200', async () => {
		const mockResponse = { status: 404, statusText: 'Not Found' };
		const fetchMock = vi.fn().mockResolvedValue(mockResponse);
		global.fetch = fetchMock;

		const result = await searchService({ query: 'thriller' });

		expect(result.data).toBeNull();
		expect(result.error).toBe(mockResponse.statusText);
	});

	it('lookupService should return data when response status is 200', async () => {
		const mockResponse = {
			status: 200,
			json: async () => MOCK_SHOW_DETAIL_RESPONSE,
		};
		const fetchMock = vi.fn().mockResolvedValue(mockResponse);
		global.fetch = fetchMock;

		const result = await lookupService({ showId: '28839' });

		expect(result.data).toBeDefined();
		expect(result.error).toBeNull();
	});
});
