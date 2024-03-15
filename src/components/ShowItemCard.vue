<script setup lang="ts">
import type { ShowItem } from '@/types/ShowItem';

interface Props {
	show: ShowItem;
}

const props = defineProps<Props>();
console.log('🚀 ~ props:', props);
</script>

<template>
	<div class="show-card">
		<img :alt="show.name"
fetchpriority="high"
loading="eager"
:src="show.image?.medium" />
		<div class="show-card__content">
			<p class="show-card__leading">
				<span class="show-card__leading-meta">Category</span
				><span class="size-1.5 rounded-full bg-blue-700">·</span
				><span class="show-card__leading-meta">4 min. read</span>
			</p>
			<h3 class="show-card__name">{{ show.name }}</h3>
			<p class="show-card__description" v-html="show.summary" />
			<button type="button">View More ></button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.show-card {
	flex: 0 0 auto;
	align-items: flex-start;
	width: 200px;
	// margin: 0.6rem;
	overflow: hidden;
	background-color: #f9f9f9;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

	img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	&__content {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		gap: 0.2rem;
	}

	&__leading {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;

		&-meta {
			color: #678;
			font-size: 0.8rem;
		}
	}

	&__name {
		font-size: 1rem;
		font-weight: 600;
	}

	&__description {
		font-size: 0.8rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		border: none;
		border-radius: 1rem;
		background: #f43f5e;
		padding: 0.5rem;
		color: #fff;
	}
}
</style>
