<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { SearchIconSolid } from '@codewithshin/svelte-heroicons';
	import { scrollerYStore } from '$stores/scrollerY.store';
	import { modalStore } from '$stores/modal.store';

	let onTop = true;

	const unsubscribe = scrollerYStore.subscribe((value) => {
		onTop = !value || value === 0;
	});

	onDestroy(() => {
		unsubscribe();
	});

	let searchText;

	function showModal(show) {
		modalStore.set(show);

		if (show) {
			setTimeout(() => searchText && searchText.focus(), 250);
		}
	}
</script>

<div
	class="sticky top-0 z-50 flex shadow-sm py-4 px-2 h-20 tablet:hidden transition duration-500 
    {onTop ? 'bg-black' : 'bg-white'}"
>
	<div class="w-full px-3">
		<button
			class="{onTop
				? 'bg-white'
				: 'bg-gray-100'} h-[46px] rounded-full flex flex-col items-center py-1 text-center cursor-pointer w-full"
			on:click={() => showModal(true)}
		>
			<div class="flex items-center">
				<SearchIconSolid
					className="h-8 p-2 text-red-600 bg-transparent rounded-full cursor-pointer"
				/>
				<span type="text" class="text-sm font-medium text-black bg-transparent"
					>Where are you going?</span
				>
			</div>
		</button>
	</div>
</div>

{#if $modalStore}
	<div
		class="absolute top-0 z-50 w-full h-full bg-white"
		in:fly={{ y: 300, duration: 300 }}
		out:fly={{ y: 300, duration: 300 }}
	>
		<div class="flex flex-col px-4">
			<div class="flex mt-20 align-middle">
				<div
					class="rounded-full cursor-pointer w-9 h-9 hover:bg-gray-100/50"
					on:click={() => showModal(false)}
				>
					<div class="pt-2 pl-2">
						<svg
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="presentation"
							focusable="false"
							class="block h-5 stroke-[4px] stroke-black/70 "
							><g fill="none"
								><path
									d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
								/></g
							></svg
						>
					</div>
				</div>
				<input
					type="text"
					class="ml-10 outline-none placeholder:text-gray-400 placeholder:font-light"
					placeholder="Where are you going?"
					bind:this={searchText}
				/>
			</div>
			<div class="flex flex-col px-4 mt-6">
				<span class="text-sm">Go anywhere, anytime</span>
				<button
					class="justify-start mt-6 border rounded-full shadow-lg cursor-pointer h-14 shadow-black/10 hover:shadow-hover"
				>
					<div class="flex mx-6">
						<div class="grid w-1/2 text-center justify-items-start">
							<span class="text-lg font-bold text-airbnb-gradient">I'm flexible</span>
						</div>
						<div class="grid w-1/2 justify-items-end">
							<video autoplay width="28" height="28"
								><source
									src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality"
									type="video/mp4"
								/>
								<track kind="captions" />
							</video>
						</div>
					</div>
				</button>
			</div>
		</div>
	</div>
{/if}
