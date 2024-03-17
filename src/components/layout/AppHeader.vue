<script setup lang="ts">
import { INITIAL_CATEGORIES } from '@/config/index.json';
import { useRouter } from 'vue-router';
import VueScrollTo from 'vue-scrollto';

const router = useRouter();
const delayToScroll = 200;
const duration = 500;
const options = {
	offset: -100,
};

const goToCategory = (element: string) => {
	const currentName = router.currentRoute.value.name;
	if (currentName !== 'home') {
		router.push('/');
	}

	setTimeout(() => {
		VueScrollTo.scrollTo(element, duration, options);
	}, delayToScroll);
};
</script>

<template>
	<div class="app-header">
		<header class="header">
			<h1 class="title">
				<RouterLink to="/">{{ $t('app.title') }}</RouterLink>
			</h1>
			<nav class="nav">
				<button
					v-for="item in INITIAL_CATEGORIES"
					:key="item.id"
					class="button navbutton"
					@click="goToCategory(`#${item.id}`)"
				>
					{{ item.title }}
				</button>
			</nav>
		</header>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.app-header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: $header-z-index;
	height: $mobile-header-height;
	background-color: var(--color-black-full);
}

.header {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: $desktop-padding;
	gap: 0.5rem;
	color: var(--color-white);
	width: 100%;

	.title {
		font-size: 1.2rem;
	}

	.nav {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: 1rem 0;
		padding-bottom: 0.4rem;
		overflow-x: auto;
		overflow-y: hidden;
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

@media (min-width: $large-desktop-breakpoint) {
	.app-header {
		height: $desktop-header-height;
	}

	.header {
		flex-direction: row;
		justify-content: space-between;
		width: $desktop-container-width;
		padding: $desktop-padding;
		margin: 0 auto;

		.nav {
			width: unset;
		}
	}
}
</style>
