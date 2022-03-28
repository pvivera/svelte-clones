<script lang="ts">
	import { scrollerYStore } from '$stores/scrollerY.store';
	let y;

	$: scrollerYStore.set(y);
</script>

<svelte:window bind:scrollY={y} />

<slot />
