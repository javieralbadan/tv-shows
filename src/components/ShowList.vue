<script setup lang="ts">
import ShowItemCard from '@/components/ShowItemCard.vue';
import { MAX_ITEMS_IN_LIST } from '@/config/index.json';
import type { ShowItem } from '@/types/ShowItem';

interface Category {
	id: string;
	title: string;
}

interface Props {
	category: Category;
	shows: ShowItem[];
}

const props = defineProps<Props>();
const previewShows = props.shows?.slice(0, MAX_ITEMS_IN_LIST);
</script>

<template>
	<div :id="category.id" class="show-list">
		<div class="header">
			<h2 class="title">{{ category.title }}</h2>
			<button class="button -red -disabled" disabled="true">
				{{ $t('showList.seeAll') }}
				<i class="pi pi-angle-right" />
			</button>
		</div>
		<div class="rail">
			<ShowItemCard v-for="item in previewShows"
				:key="item.id"
				:show="item"
				size="big"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
$see-all-button-width: 8rem;

.show-list {
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
	padding: 0 1rem 0 0.5rem;

	.header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.5rem;
		color: var(--color-heading);

		&::after {
			content: '';
			z-index: -1;
			position: absolute;
			top: 1.2rem;
			width: calc(100% - $see-all-button-width);
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

	.rail {
		display: flex;
		gap: 1rem;
		overflow-x: scroll;
		scroll-behavior: smooth;
		padding: 0.8rem 0;
	}

	.button .pi-angle-right {
		margin: 0.1rem 0 0 0.3rem;
	}
}
</style>
