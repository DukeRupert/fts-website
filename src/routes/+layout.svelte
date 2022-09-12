<script>
	import '../app.postcss';
	import Header from '$lib/sections/Header.svelte';
</script>

<Header />
<div class="bg-white">
	<main>
		<slot />
	</main>
</div>
