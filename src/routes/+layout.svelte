<script>
	import '../app.postcss';
	import Header from '$lib/sections/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
	<script
		defer
		data-domain="fts-excavation.com"
		src="https://plausible.io/js/plausible.js"></script>
</svelte:head>

<Header />
<div class="bg-white">
	<main>
		<slot />
	</main>
</div>
<Footer />
