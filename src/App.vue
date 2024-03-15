<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<header>
		<h1>TV Shows App</h1>
		<nav>
			<button>Action</button>
			<button>Comedy</button>
			<button>Drama</button>
			<button>Sci-Fi</button>
		</nav>
	</header>

	<RouterView />
</template>

<style scoped lang="scss">
header {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #333;
	color: white;
	padding: 1rem;

	h1 {
		font-size: 1.2rem;
	}
}

button {
	border: none;
	background: none;
	color: white;
	font: inherit;
	cursor: pointer;
}
</style>
