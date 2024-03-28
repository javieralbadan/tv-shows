<script setup lang="ts">
import SuggestionItem from '@/components/SuggestionItem.vue';
import type { ShowItem } from '@/types/ShowItem';

interface Props {
	shows: ShowItem[];
}

defineProps<Props>();
</script>

<template>
	<div class="suggestions-container">
		<SuggestionItem v-for="item in shows"
			:key="item.id"
			:show="item"
			size="small"
		/>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.suggestions-container {
	position: absolute;
	top: calc(100% + 0.3rem);
	display: flex;
	flex-direction: column;
	z-index: 1;
	gap: 0.5rem;
	width: $width-suggestions;
	height: auto;
	padding: 1rem 0;
	background-color: var(--color-black-soft);
	border-radius: 0 0 1rem 1rem;
	box-shadow: $white-shadow;
}

@media (min-width: $large-desktop-breakpoint) {
	.suggestions-container {
		top: 50%;
		padding: 2.5rem 0 1rem;
	}
}
</style>
