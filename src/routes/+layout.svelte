<script>
	import '../app.postcss';
	import Header from '$lib/sections/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';
</script>

<Header />
<div class="bg-white">
	<main>
		<slot />
	</main>
</div>
<Footer />
