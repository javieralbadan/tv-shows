<script setup lang="ts">
import { lookupService } from '@/services/managers/shows';
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
	<div class="details-show">
		<h1>This is the details show page</h1>
		<p>Received Parameter: {{ $route.params.id }}</p>
		<p>TV Show detail: {{ show }}</p>
	</div>
</template>

<style scoped lang="scss">
$header-height: 65px;
$footer-height: 55px;

@media (min-width: 1024px) {
	.details {
		height: calc(100vh - $header-height - $footer-height);
		display: flex;
		align-items: center;
	}
}
</style>
