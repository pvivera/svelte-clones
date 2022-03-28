<script lang="ts">
	export let image: string;
	export let text: string;
	export let buttonText: string;
</script>

<div
	class="mx-5 my-10 rounded-lg h-[906px] bg-[url('{image}')] bg-center bg-cover grid grid-cols-1 content-end pb-12 tablet:mx-10"
>
	<div class="flex flex-col items-center h-full">
		<span class="mb-4 text-3xl font-medium text-white">{text}</span>
		<button class="w-32 h-12 font-semibold bg-white border rounded-full hover:bg-gray-50">
			<span class="text-airbnb-gradient">{buttonText}</span>
		</button>
	</div>
</div>
