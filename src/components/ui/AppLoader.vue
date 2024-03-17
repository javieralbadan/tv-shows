<script setup lang="ts">
interface Props {
	fullHeight?: boolean;
}
defineProps<Props>();
</script>

<template>
	<div class="app-loader -fullheight">
		<i class="pi pi-spin pi-spinner" style="font-size: 2rem" />
		{{ $t('app.loading') }}
	</div>
</template>

<style scoped lang="scss">
.app-loader {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	color: var(--color-white-soft);
}
</style>
