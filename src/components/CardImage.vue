<script setup lang="ts">
import { ref } from 'vue';

interface ImageProps {
	medium: string;
	original: string;
}

interface Props {
	name: string;
	image: ImageProps | undefined;
}

const props = defineProps<Props>();
const image = props.image?.medium || props.image?.original || '';

const cardImage = ref<string>('');
cardImage.value = image ? `background-image: url(${image});` : '';
</script>

<template>
	<div class="card-image">
		<div class="image" :style="cardImage" />
		<div class="imagefallback">
			<h3 class="name">{{ name }}</h3>
		</div>
	</div>
</template>

<style scoped lang="scss">
$card-width: 200px;
$image-height: 250px;

.image {
	width: $card-width;
	height: $image-height;
	background-position: center;
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
</style>
