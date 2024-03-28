<script setup lang="ts">
import CardImage from '@/components/CardImage.vue';
import DotDivider from '@/components/ui/DotDivider.vue';
import type { ShowItem } from '@/types/ShowItem';
import { RouterLink } from 'vue-router';

interface Props {
	show: ShowItem;
	size?: 'small' | 'big';
}

const props = defineProps<Props>();
const showId = props.show.externals.thetvdb || props.show.id;
const sizeClass = props.size === 'small' ? '-small' : '-big';
</script>

<template>
	<RouterLink :class="['show-card', sizeClass]" :to="{ name: 'show', params: { id: showId } }">
		<CardImage :image="show.image" :name="show.name" :sizeClass="sizeClass" />
		<div class="content">
			<p class="leading">
				<span class="leadingmeta">{{ show.language }}</span>
				<DotDivider v-if="show.language && show.averageRuntime" />
				<span v-if="show.averageRuntime" class="leadingmeta">
					{{ show.averageRuntime }}min
				</span>
			</p>
			<h3 class="name">{{ show.name }}</h3>
		</div>
	</RouterLink>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.show-card {
	position: relative;
	flex: 0 0 auto;
	align-items: flex-start;
	width: $card-image-small-size;
	overflow: hidden;
	border-radius: 0.5rem;
	transition: all 0.5s;
	box-shadow: $black-shadow;
	cursor: pointer;
	opacity: 100%;
	
	&.-big {
		width: $card-image-big-size;
	}

	&:first-child {
		margin-left: 0.5rem;
	}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 0.3rem #303030;
		opacity: 90%;
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

	.name {
		font-size: 1rem;
		font-weight: 600;
	}
}
</style>
