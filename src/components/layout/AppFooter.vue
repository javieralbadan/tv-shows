<template>
	<footer class="app-footer">
		<p>{{ $t('app.footerInfo') }}</p>
		<a class="designby" href="https://www.linkedin.com/in/javier-albadan/" target="_blank">
			@{{ $t('app.author') }}
		</a>
	</footer>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.app-footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
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

@media (min-width: $large-desktop-breakpoint) {
	.app-footer {
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>
