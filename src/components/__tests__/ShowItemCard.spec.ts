import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ShowItemCard from '../ShowItemCard.vue';

const MOCK_SHOW_ITEM = {
	id: 1,
	url: 'mock-url',
	name: 'Moke show name',
	type: 'tv show',
};

describe('ShowItemCard', () => {
	it('renders properly', () => {
		const wrapper = mount(ShowItemCard, { show: MOCK_SHOW_ITEM });
		expect(wrapper.text()).toContain('Hello Vitest');
	});
});
