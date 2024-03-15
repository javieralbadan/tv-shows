<script setup lang="ts">
import ShowList from '@/components/ShowList.vue';
import { INITIAL_CATEGORIES } from '@/config/index.json';
</script>

<template>
	<main>
		<ShowList v-for="item in INITIAL_CATEGORIES" :key="item.id" :category="item" />
	</main>
</template>

<style scoped lang="scss"></style>
