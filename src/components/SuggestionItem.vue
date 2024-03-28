<script setup lang="ts">
import CardImage from '@/components/CardImage.vue';
import DotDivider from '@/components/ui/DotDivider.vue';
import type { ShowItem } from '@/types/ShowItem';
import { RouterLink } from 'vue-router';

interface Props {
	show: ShowItem;
	size: string;
}

const props = defineProps<Props>();
const showId = props.show.externals.thetvdb || props.show.id;
const sizeClass = props.size === 'small' ? '-small' : '-big';
</script>

<template>
	<RouterLink class="suggestion-item" :to="{ name: 'show', params: { id: showId } }">
		<CardImage class="image"
			:image="show.image"
			:name="show.name"
			:sizeClass="sizeClass"
		/>
        <h3 class="name">{{ show.name }}</h3>
		<div class="content">
            <span class="leadingmeta">{{ show.language }}</span>
            <DotDivider v-if="show.language && show.averageRuntime" />
            <span v-if="show.averageRuntime" class="leadingmeta">
				{{ show.averageRuntime }}min
			</span>
		</div>
	</RouterLink>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.suggestion-item {
	position: relative;
	display: grid;
	grid-template-columns: $card-image-small-size 1fr 140px;
	grid-template-rows: calc($card-image-small-size - 1.5rem);
	gap: 0.5rem;
    align-items: center;
	padding: 0 0.3rem;
	overflow: hidden;
	transition: all 0.5s;
	background-color: var(--color-black-soft);
	border-top: 1px dashed var(--color-black);
	border-bottom: 1px dashed var(--color-black);
	cursor: pointer;
    
	&:hover {
		background-color: var(--color-black);
	}

	.name {
		font-size: 0.9rem;
		font-weight: 500;
		overflow-x: hidden;
	}
	
	.content {
		display: inline-flex;
		justify-content: flex-end;
		padding: 0.5rem;
	}
	
	.leadingmeta {
		color: var(--color-text-soft);
		font-size: 0.8rem;
	}
}

@media (min-width: $large-desktop-breakpoint) {
	.suggestion-item {
		grid-template-columns: $card-image-small-size 1fr 140px;
		grid-template-rows: calc($card-image-small-size - 1rem);
		gap: 1rem;
		padding: 0 0.5rem;
	}

	.name {
		font-size: 1rem;
		font-weight: 600;
	}
}
</style>
