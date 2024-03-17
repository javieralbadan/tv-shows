<script setup lang="ts">
import ShowList from '@/components/ShowList.vue';
import { INITIAL_CATEGORIES } from '@/config/index.json';
</script>

<template>
	<main class="home-view">
		<ShowList v-for="item in INITIAL_CATEGORIES" :key="item.id" :category="item" />
	</main>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.home-view {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 100%;
	margin: 0 auto;
	padding: 1rem 0 3rem 0;
}

@media (min-width: $large-desktop-breakpoint) {
	.home-view {
		width: $desktop-container-width;
	}
}
</style>
