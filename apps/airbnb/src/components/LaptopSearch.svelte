<script lang="ts">
	import {
		GlobeAltIconOutline,
		UserCircleIconSolid,
		MenuIconOutline,
		SearchIconSolid
	} from '@codewithshin/svelte-heroicons';

	import { scrollerYStore } from '$stores/scrollerY.store';
	import { onDestroy } from 'svelte';

	let onTop = true;

	const unsubscribe = scrollerYStore.subscribe((value) => {
		onTop = !value || value === 0;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="hidden tablet:block">
	<div class="grid h-20 grid-cols-2 px-10 text-white  {onTop ? 'bg-transparent' : 'bg-white'}">
		<div class="my-auto">
			<svg
				width="30"
				height="32"
				class={onTop ? 'fill-white' : 'fill-red-500'}
				style="display: block;"
				><path
					d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"
				/></svg
			>
		</div>
		<div class="flex my-auto justify-self-end">
			<span
				class="p-3 text-sm rounded-full cursor-pointer {onTop
					? 'text-white hover:bg-white/20'
					: 'text-black hover:bg-gray-500/5'}">Become a Host</span
			>
			<span
				class="p-3 -ml-1 text-sm rounded-full cursor-pointer {onTop
					? 'text-white hover:bg-white/20'
					: 'text-black hover:bg-gray-500/5'}"
			>
				<GlobeAltIconOutline className="h-5" />
			</span>
			<div
				class="flex py-[5px] pl-3 ml-1 text-sm text-gray-500 bg-white rounded-full cursor-pointer
            {onTop ? 'border-0' : 'border hover:shadow-md'}"
			>
				<div class="my-auto ml-0 mr-2">
					<MenuIconOutline className="h-5" />
				</div>
				<div class="my-auto mr-1">
					<UserCircleIconSolid className="h-7" />
				</div>
			</div>
		</div>
	</div>

	<div class="mt-2 mb-4">
		<div class="flex justify-around px-40 text-white">
			<div class="grow" />
			<div class="grow-0 link-selected">Places to stay</div>
			<div class="grow-0 link">Experiences</div>
			<div class="grow-0 link">Online Experiences</div>
			<div class="grow" />
		</div>
	</div>

	<div class="flex flex-row h-16 mx-10 mt-6 mb-8 bg-white rounded-full">
		<div
			class="flex flex-col w-full h-full py-4 px-8 rounded-full cursor-pointer hover:bg-gray-300/50"
		>
			<span class="text-xs font-semibold">Location</span>
			<span class="text-sm font-light text-gray-500">Where are you</span>
		</div>
		<div class="border-l w-[1px] h-8 my-auto" />
		<div
			class="flex flex-col w-full h-full py-4 px-8 rounded-full cursor-pointer hover:bg-gray-300/50"
		>
			<span class="text-xs font-semibold">Check in</span>
			<span class="text-sm font-light text-gray-500">Add dates</span>
		</div>
		<div class="border-l w-[1px] h-8 my-auto" />
		<div
			class="flex flex-col w-full h-full py-4 px-8 rounded-full cursor-pointer hover:bg-gray-300/50"
		>
			<span class="text-xs font-semibold">Check out</span>
			<span class="text-sm font-light text-gray-500">Add dates</span>
		</div>
		<div class="border-l w-[1px] h-8 my-auto" />
		<div
			class="flex flex-col w-full h-full py-2 px-8 rounded-full cursor-pointer hover:bg-gray-300/50"
		>
			<div class="flex flex-row w-full">
				<div class="flex flex-col grow my-auto">
					<span class="text-xs font-semibold">Guests</span>
					<span class="text-sm font-light text-gray-500">Add guests</span>
				</div>
				<SearchIconSolid
					className="h-12 p-3 -mr-6 grow-0 my-auto text-white bg-refugees bg-transparent rounded-full cursor-pointer"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.link,
	.link-selected {
		@apply relative px-3 py-2 cursor-pointer;
	}

	.link::after {
		content: '';
		@apply h-[2px] absolute bottom-0 left-[50%] w-1 border-0 border-gray-300 transition-all duration-100 ease-in-out;
	}

	.link-selected::after {
		content: '';
		@apply h-[2px] absolute bottom-0 left-[45%] w-5 border;
	}

	.link:hover {
		@apply text-gray-300;
	}

	.link:hover::after {
		@apply border;
	}
</style>
