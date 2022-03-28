<script>
	import '../app.css';
	import { modalStore } from '$stores/modal.store';
</script>

<slot />

<svelte:head>
	{#if $modalStore}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>
