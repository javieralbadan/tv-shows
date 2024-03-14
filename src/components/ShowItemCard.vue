<script setup lang="ts">
import type { ShowItem } from '@/types/ShowItem';

interface Props {
	show: ShowItem;
}

const props = defineProps<Props>();
console.log('🚀 ~ props:', props);
</script>

<template>
	<div class="greetings">
		<h1 class="green">{{ show.name }}</h1>
		<h3>
			You’ve successfully created a project with
			<a href="https://vitejs.dev/" rel="noopener" target="_blank">Vite</a> +
			<a href="https://vuejs.org/" rel="noopener" target="_blank">Vue 3</a>. What's next?
		</h3>
	</div>
</template>

<style scoped>
h1 {
	font-weight: 500;
	font-size: 2.6rem;
	position: relative;
	top: -10px;
}

h3 {
	font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
	text-align: center;
}

@media (min-width: 1024px) {
	.greetings h1,
	.greetings h3 {
		text-align: left;
	}
}
</style>
