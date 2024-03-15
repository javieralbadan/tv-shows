<script setup lang="ts">
import ShowList from '@/components/ShowList.vue';
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
		<div v-else class="show-list">
			<ShowList section-title="Action" :shows="shows" />
			<ShowList section-title="Action" :shows="shows" />
			<ShowList section-title="Action" :shows="shows" />
		</div>
	</main>
</template>

<style scoped lang="scss"></style>
