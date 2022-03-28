<script lang="ts">
	import LaptopSearch from './LaptopSearch.svelte';

	import MobileSearch from './MobileSearch.svelte';
</script>

<div class="black-back" />

<MobileSearch />
<LaptopSearch />

<style>
	.black-back {
		@apply bg-black h-[900px] absolute w-full -z-10;
	}
</style>
