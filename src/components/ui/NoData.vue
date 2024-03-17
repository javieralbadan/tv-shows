<script setup lang="ts">
interface Props {
	linkToHome?: boolean;
}
defineProps<Props>();
</script>

<template>
	<div class="no-data -fullheight">
		<i class="pi pi-times-circle" style="font-size: 1.5rem" />
		{{ $t('app.noData') }}
		<RouterLink v-if="linkToHome" class="backhome -highlightlink" to="/">
			{{ $t('app.backHome') }}
		</RouterLink>
	</div>
</template>

<style scoped lang="scss">
.no-data {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	color: var(--color-white-soft);
}

.backhome {
	text-transform: capitalize;
}
</style>
