<script setup lang="ts">
import { RouterView } from 'vue-router';
import { INITIAL_CATEGORIES } from '@/config/index.json';
</script>

<template>
	<header class="header">
		<h1 class="title">
			<RouterLink to="/">TV Shows App</RouterLink>
		</h1>
		<nav class="nav">
			<button v-for="item in INITIAL_CATEGORIES" :key="item.id" class="button navbutton">
				{{ item.title }}
			</button>
		</nav>
	</header>

	<RouterView />

	<footer class="footer">
		<p>Rotterdam, NL. 2024</p>
		<a class="designby" href="https://www.linkedin.com/in/javier-albadan/" target="_blank">
			@javier-albadan
		</a>
	</footer>
</template>

<style scoped lang="scss">
$desktop-padding: 1rem;

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-black-full);
	color: var(--color-white);
	padding: $desktop-padding;

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
			background-color: var(--color-indigo);
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

.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-black-full);
	color: var(--color-white);
	padding: $desktop-padding;

	.designby {
		color: var(--color-white-soft);
		transition: color 0.5s;

		&:hover {
			color: var(--color-red);
		}
	}
}
</style>
