<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import ShowList from '@/components/ShowList.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import NoData from '@/components/ui/NoData.vue';
import { INITIAL_CATEGORIES } from '@/config/index.json';
import { showService } from '@/services/managers/showsManager';
import type { ShowListByCategory } from '@/types/ShowListByCategory';
import { onMounted, ref } from 'vue';

const shows = ref<ShowListByCategory | null>(null);
const isLoading = ref(true);
const isError = ref(false);

onMounted(async () => {
	try {
		const { data, error } = await showService();
		if (data && !error) {
			shows.value = data as ShowListByCategory;
		} else {
			isError.value = true;
		}
	} catch (error) {
		isError.value = true;
	} finally {
		isLoading.value = false;
	}
});
</script>

<template>
	<main class="home-view">
		<SearchBar />
		<AppLoader v-if="isLoading && !isError" />
		<NoData v-else-if="isError" />
		<template v-else-if="shows">
			<ShowList
				v-for="category in INITIAL_CATEGORIES"
				:key="category.id"
				:category="category"
				:shows="shows[category.id]"
			/>
		</template>
	</main>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.home-view {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 100%;
	margin: 0 auto;
	padding: 1rem 0 3rem 0;
}

@media (min-width: $large-desktop-breakpoint) {
	.home-view {
		width: $desktop-container-width;
	}
}
</style>
