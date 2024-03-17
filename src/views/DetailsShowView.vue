<script setup lang="ts">
import { lookupService } from '@/services/managers/shows';
import AppLoader from '@/components/ui/AppLoader.vue';
import NoData from '@/components/ui/NoData.vue';
import BackgroundDetails from '@/components/BackgroundDetails.vue';
import ShowDetails from '@/components/ShowDetails.vue';
import type { ShowItem } from '@/types/ShowItem';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { id } = router.currentRoute.value.params;
const showId: string = Array.isArray(id) ? id[0] : id;

const show = ref<ShowItem | null>(null);
const isLoading = ref(true);
const isError = ref(false);

onMounted(async () => {
	try {
		const { data, error } = await lookupService({ showId });
		if (data && !error) {
			show.value = data;
		} else {
			isError.value = true;
		}
	} catch (error) {
		isError.value = true;
	} finally {
		isLoading.value = false;
	}
});
</script>

<template>
	<AppLoader v-if="isLoading" class="apploader" full-height />
	<NoData v-else-if="isError" link-to-home />
	<div v-else class="details-show -fullheight">
		<BackgroundDetails :image="show?.image" />
		<ShowDetails :show="show" />
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/media-queries.scss';

.apploader {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
}

.details-show {
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	background: var(--color-black-full);
}

@media (min-width: $desktop-breakpoint) {
	.details-show {
		.content {
			width: min(600px, 100%);
			padding: 0 10%;
		}
	}
}
</style>
