<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<template>
	<AppHeader />
	<div class="content">
		<RouterView />
	</div>
	<AppFooter />
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.content {
	margin-top: $mobile-header-height;
}

@media (min-width: $large-desktop-breakpoint) {
	.content {
		margin-top: $desktop-header-height;
	}
}
</style>
