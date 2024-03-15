<script setup lang="ts">
import { RouterView } from 'vue-router';
import { INITIAL_CATEGORIES } from '@/config/index.json';
</script>

<template>
	<header class="header">
		<h1 class="title">TV Shows App</h1>
		<nav class="nav">
			<button v-for="item in INITIAL_CATEGORIES" :key="item.id" class="button navbutton">
				{{ item.title }}
			</button>
		</nav>
	</header>

	<RouterView />
</template>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: var(--color-black-full);
	color: white;
	padding: 1rem;

	.title {
		font-size: 1.2rem;
	}

	.navbutton {
		position: relative;
		color: #ddd;
		transition: color 0.5s;

		&::after {
			content: '';
			position: absolute;
			bottom: -0.5rem;
			width: 40%;
			height: 1px;
			background-color: var(--vt-c-indigo);
			transition: all 0.5s;
		}

		&:hover {
			color: var(--color-red);

			&::after {
				bottom: -0.1rem;
				width: 80%;
				background-color: var(--color-red);
			}
		}
	}
}
</style>
