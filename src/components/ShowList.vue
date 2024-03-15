<script setup lang="ts">
import ShowItemCard from '@/components/ShowItemCard.vue';
import type { ShowItem } from '@/types/ShowItem';

interface Props {
	sectionTitle: string;
	shows: ShowItem[];
}

const props = defineProps<Props>();
console.log('🚀 ~ props:', props);
</script>

<template>
	<div class="show-list">
		<h2>{{ sectionTitle }}</h2>
		<div class="show-list__rail">
			<ShowItemCard v-for="item in shows" :key="item.id" :show="item" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.show-list {
	display: flex;
	flex-direction: column;
	margin: 1rem 1.5rem;

	h2 {
		font-weight: bold;
	}

	&__rail {
		display: flex;
		gap: 1rem;
		overflow-x: scroll;
		scroll-behavior: smooth;
		padding: 0.5rem 0;
	}
}
</style>
