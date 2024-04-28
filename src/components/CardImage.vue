<script setup lang="ts">
import { ref } from 'vue';

interface ImageProps {
	medium: string;
	original: string;
}

interface Props {
	name: string;
	image: ImageProps | undefined;
	sizeClass: string;
}

const props = defineProps<Props>();
const image = props.image?.medium || props.image?.original || '';

const cardImage = ref<string>('');
cardImage.value = image ? `background-image: url(${image});` : '';
</script>

<template>
	<div :class="['card-image', sizeClass]">
		<div class="image" :style="cardImage" />
		<div v-if="sizeClass !== '-small'" class="imagefallback">
			<h3 class="name">{{ name }}</h3>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

$card-width-big: 200px;
$image-height-big: 250px;

.image {
	background-repeat: no-repeat;
	background: #000;
}

.imagefallback {
	position: absolute;
	top: 0;
	z-index: -1;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000;
}

.card-image {
	&.-small {
		.image {
			width: $card-image-small-size;
			height: $card-image-small-size;
			background-size: contain;
			background-position: center center;
		}

		.imagefallback {
			width: $card-image-small-size;
			height: $card-image-small-size;
		}
	}
}
.card-image {
	&.-big {
		.image {
			width: $card-width-big;
			height: $image-height-big;
			background-size: cover;
			background-position: top center;
		}
		
		.imagefallback {
			width: $card-width-big;
			height: $image-height-big;
		}
	}
}
</style>
