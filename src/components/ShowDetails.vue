<script setup lang="ts">
import DotDivider from '@/components/ui/DotDivider.vue';
import type { ShowItem } from '@/types/ShowItem';
import { ref } from 'vue';

interface Props {
	show: ShowItem | null;
}

const props = defineProps<Props>(); 

const schedule = ref<string>('');
const { days, time } = props.show?.schedule || {};
const finalTime = time ? `: ${time}` : '';
schedule.value = `${days}${finalTime}`;

const ended = ref<string>('');
ended.value = props.show?.ended?.split('-')[0] || '';
</script>

<template>
	<div class="show-details">
		<div class="metainfo genres">
			<span v-for="item in show?.genres" :key="item" class="itemgenre">{{ item }}</span>
		</div>
		<h2 class="showname">{{ show?.name }}</h2>
		<p class="shoetype">{{ show?.type }}</p>
		<div class="metainfo basicinfo">
			<span>{{ show?.language }}</span>
			<DotDivider />
			<span>{{ show?.averageRuntime }} min</span>
			<DotDivider v-if="ended" />
			<span v-if="ended">{{ $t('showDetails.ended') }}: {{ ended }}</span>
		</div>
		<p class="summary" v-html="show?.summary" />
		<p>{{ schedule }}</p>
		<a
			v-if="show?.officialSite"
			class="button -red"
			:href="show?.officialSite"
			target="_blank"
		>
			{{ $t('showDetails.officialSite') }}
			<i class="pi pi-external-link" />
		</a>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.show-details {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5rem;
	width: 100%;
	padding: 0 max(2rem, 10%);
}

.metainfo {
	display: inline-flex;
	align-items: center;
	color: var(--color-white);
	text-transform: uppercase;
}

.genres {
	gap: 1rem;
}

.itemgenre {
	position: relative;

	&::after {
		position: absolute;
		content: '|';
		right: -0.6rem;
		top: 0;
		color: var(--color-white-soft);
	}

	&:last-child::after {
		content: '';
	}
}

.showname {
	font-size: 3rem;
	font-weight: bold;
}

.basicinfo {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.summary {
	max-height: 400px;
	padding-right: 1rem;
	overflow-y: auto;
}

.pi-external-link {
	margin-left: 0.5rem;
}

@media (min-width: $large-desktop-breakpoint) {
	.show-details {
		width: min(1000px, 100%);
		gap: 1rem;
		padding: 0 10%;
	}
}
</style>
