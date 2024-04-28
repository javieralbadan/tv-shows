import { defineStore } from 'pinia';
import { ref } from 'vue';

interface GrouperProps {
	shows: Object;
}

export const useShowStore = defineStore('postList', () => {
	const showsByCategories = ref<Object>({});

	const setItemsByCategory = ({ shows }: GrouperProps) => {
		showsByCategories.value = shows;
	};

	return { showsByCategories, setItemsByCategory };
});
