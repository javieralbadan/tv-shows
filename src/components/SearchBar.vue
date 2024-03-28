<script setup lang="ts">
import SuggestionsContainer from '@/components/SuggestionsContainer.vue';
import { searchService } from '@/services/managers/shows';
import type { ShowItem } from '@/types/ShowItem';
import debounce from 'lodash.debounce'; // Import debounce from lodash
import { ref } from 'vue';

const showSuggestions = ref(false);
const isInputFocused = ref(false);

const suggestions = ref<ShowItem[]>([]);
const isLoading = ref(true);
const isError = ref(false);

const searchMovies = async ({ target }: Event) => {
	const query = (target as HTMLInputElement).value;
	try {
		const { data, error } = await searchService({ query });
	
		if (data && !error) {
			suggestions.value = data;
		} else {
			isError.value = true;
		}
	} catch (error) {
		isError.value = true;
	} finally {
		isLoading.value = false;
		checkSuggestions();
	}
};

const DELAY_TIME = 500;
const onType = debounce(searchMovies, DELAY_TIME);
const onFocus = () => {
	isInputFocused.value = true;
	debounce(checkSuggestions, DELAY_TIME);
};
const onBlur = () => {
	isInputFocused.value = false;
	debounce(checkSuggestions, DELAY_TIME);
};
const checkSuggestions = () => {
	showSuggestions.value = !!suggestions.value.length && isInputFocused.value;
};
</script>

<template>
	<div class="search-bar">
		<input placeholder="Search for movies"
			@blur="onBlur"
			@focus="onFocus"
			@keyup="onType"
		/>
		<SuggestionsContainer v-show="showSuggestions" :shows="suggestions" />
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.search-bar {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 1rem 1rem 0 1rem;

	input {
		z-index: 2;
		width: $width-suggestions;
		padding: 0.3rem 0.8rem;
		border: none;
		border-radius: 3rem;
		font-size: 1.1rem;
		color: var(--color-white);
		background-color: var(--color-black-soft);
		border: 1px solid var(--color-white-soft);
		transition: all 0.5s;

		&:active,
		&:focus,
		&:focus-visible {
			outline-width: 1px;
			outline-color: var(--color-black);
			box-shadow: $white-shadow;
		}
	}
}

@media (min-width: $large-desktop-breakpoint) {
	.search-bar {
		input {
			padding: 0.5rem 1rem;
			font-size: 1.3rem;
		}
	}
}
</style>
