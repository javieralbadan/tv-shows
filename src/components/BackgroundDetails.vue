<script setup lang="ts">
import { ref } from 'vue';

interface ImageProps {
	medium: string;
	original: string;
}

interface Props {
	image: ImageProps | undefined;
}

const props = defineProps<Props>();
const backgroundImage = ref<string>('');

const image = props.image?.original || props.image?.medium || '';
backgroundImage.value = image ? `background-image: url(${image});` : '';
</script>

<template>
	<div class="show-details">
		<div class="background" :style="backgroundImage" />
		<div class="backdrop" />
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/media-queries.scss';

$background-width: 75%;

.background {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-position: center;
	background-origin: center;
	background-size: cover;
	background-repeat: no-repeat;
}

.backdrop {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		90deg,
		var(--color-black-full) 0%,
		rgb(20 20 20 / 98%) 10%,
		rgb(20 20 20 / 90%) 15%,
		rgb(20 20 20 / 70%) 50%,
		rgb(20 20 20 / 90%) 85%,
		rgb(20 20 20 / 98%) 90%,
		var(--color-black-full) 100%
	);
}

@media (min-width: $desktop-breakpoint) {
	.background {
		width: $background-width;
		background-position: center right 25%;
	}

	.backdrop {
		width: $background-width;
	}
}
</style>
