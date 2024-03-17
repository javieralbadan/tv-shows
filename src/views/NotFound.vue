<template>
	<main class="not-found -fullheight">
		<h1>
			{{ $t('app.notFound') }}
			<RouterLink class="backhome" to="/">
				{{ $t('app.backHome') }}
			</RouterLink>
		</h1>
		<img alt="" src="@/../public/not-found.svg" />
	</main>
</template>

<style scoped lang="scss">
.not-found {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		max-width: 400px;
		margin: 2rem 1rem;
	}

	.backhome {
		color: var(--color-yellow);
		transition: all 0.5s;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
