<script setup lang="ts">
import type { ShowItem } from '@/types/ShowItem';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

interface Props {
	show: ShowItem;
}

const props = defineProps<Props>();
const cardImage = ref<string>(props.show.image?.medium);
const showId = props.show.externals.thetvdb || props.show.id;
</script>

<template>
	<RouterLink class="show-card" :to="{ name: 'show', params: { id: showId } }">
		<div class="image" :style="`background-image: url(${cardImage});`" />
		<div class="imagefallback">
			<h3 class="name">{{ show.name }}</h3>
		</div>
		<div class="content">
			<p class="leading">
				<span class="leadingmeta">{{ show.language }}</span>
				<span class="leadingdivider">·</span>
				<span class="leadingmeta">{{ show.averageRuntime }}min</span>
			</p>
			<h3 class="name">{{ show.name }}</h3>
		</div>
	</RouterLink>
</template>

<style scoped lang="scss">
$card-width: 200px;
$image-height: 250px;

.show-card {
	position: relative;
	flex: 0 0 auto;
	align-items: flex-start;
	width: $card-width;
	// margin: 0.6rem;
	overflow: hidden;
	border-radius: 0.5rem;
	transition: all 0.5s;
	box-shadow: 0 0.1rem 0.2rem #101010;
	cursor: pointer;
	opacity: 100%;

	&:first-child {
		margin-left: 0.5rem;
	}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 0.3rem #303030;
		opacity: 90%;
	}

	.image {
		width: $card-width;
		height: $image-height;
		background-origin: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.imagefallback {
		position: absolute;
		top: 0;
		z-index: -1;
		width: $card-width;
		height: $image-height;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000;
	}

	.content {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
	}

	.leading {
		display: inline-flex;
		align-items: center;
		gap: 0.2rem;
	}

	.leadingmeta {
		font-size: 0.8rem;
		color: var(--color-text-soft);
	}

	.leadingdivider {
		color: #68c;
		font-size: 3rem;
		line-height: 0.8rem;
		padding-bottom: 0.3rem;
	}

	.name {
		font-size: 1rem;
		font-weight: 600;
	}
}
</style>
