<script setup lang="ts">
import ShowItemCard from '@/components/ShowItemCard.vue';
import { searchService } from '@/services/managers/shows';
import type { ShowItem } from '@/types/ShowItem';
import { onMounted, ref } from 'vue';

const shows = ref<ShowItem[]>([]);
const isLoading = ref(true);
const isError = ref(false);

onMounted(async () => {
	try {
		const { data, error } = await searchService({ query: 'action' });
		if (data && !error) {
			shows.value = data;
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
	<main>
		<p v-if="isLoading && !isError">Loading...</p>
		<template v-else>
			<ShowItemCard v-for="item in shows" :key="item.id" :show="item" />
		</template>
	</main>
</template>
