<script lang="ts">
	import Banner from '$components/Banner.svelte';
	import Header from '$components/Header.svelte';
	import Heroe from '$components/Heroe.svelte';
	import RefuggesHeroe from '$components/RefuggesHeroe.svelte';
	import ScrollerY from '$components/ScrollerY.svelte';
</script>

<ScrollerY>
	<Header />
	<RefuggesHeroe />
	<Heroe
		image="/static/images/6dbfc87a-22a4-4d4a-b352-99aa93a98e78.jpeg"
		text="Let your curiosity do the booking"
		buttonText="I'm flexible"
	/>
	<!-- <Banner /> -->
</ScrollerY>
