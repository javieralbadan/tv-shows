<script setup lang="ts">
import { searchService } from '@/services/managers/shows';
import ShowItemCard from '@/components/ShowItemCard.vue';
import type { ShowItem } from '@/types/ShowItem';
import { onMounted, ref } from 'vue';

interface CategoryProps {
	id: string;
	title: string;
}

interface Props {
	category: CategoryProps;
}

const props = defineProps<Props>();
const shows = ref<ShowItem[]>([]);
const isLoading = ref(true);
const isError = ref(false);

onMounted(async () => {
	try {
		const { data, error } = await searchService({ query: props.category.id });
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
	<div class="show-list">
		<div class="header">
			<h2 class="title">{{ category.title }}</h2>
			<button class="button -red seeallbutton">See all ></button>
		</div>
		<p v-if="isLoading && !isError">Loading...</p>
		<div v-else class="rail">
			<ShowItemCard v-for="item in shows" :key="item.id" :show="item" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.show-list {
	display: flex;
	flex-direction: column;
	margin: 1rem 1.5rem;
	padding: 0 0.8rem;

	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		color: var(--color-heading);

		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			top: 1.2rem;
			width: 100%;
			height: 1px;
			border-bottom: 1px solid var(--color-black-soft);
		}
	}

	.title {
		margin: 0 1rem;
		padding: 0 1rem;
		font-weight: bold;
		background-color: var(--color-background);
	}

	.seeallbutton {
		// border: 1rem solid var(--color-background);
	}

	.rail {
		display: flex;
		gap: 1rem;
		overflow-x: scroll;
		scroll-behavior: smooth;
		padding: 0.8rem 0;
	}
}
</style>
