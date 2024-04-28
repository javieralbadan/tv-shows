<script setup lang="ts">
import BackgroundDetails from '@/components/BackgroundDetails.vue';
import ShowDetails from '@/components/ShowDetails.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import NoData from '@/components/ui/NoData.vue';
import { lookupService } from '@/services/managers/showsManager';
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
			show.value = data as ShowItem;
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
	<div class="details-show -fullheight">
		<AppLoader v-if="isLoading" class="app-loader" full-height />
		<NoData v-else-if="isError" link-to-home />
		<template v-else>
			<BackgroundDetails :image="show?.image" />
			<ShowDetails :show="show" />
		</template>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/constants.scss';

.app-loader {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
}

.details-show {
	position: relative;
	display: flex;
	align-items: center;
	background: var(--color-black-full);
}
</style>
@/services/managers/showsManager