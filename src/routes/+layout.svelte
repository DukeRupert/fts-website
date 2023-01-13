<script>
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import { navigating } from '$app/stores';
	import { mobileMenu } from '$lib/stores';

	$: if ($navigating) {
		$mobileMenu = false;
	}
</script>

<svelte:head>
	<script
		defer
		data-domain="fts-excavation.com"
		src="https://plausible.io/js/plausible.js"
	></script>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>

<!-- <Header />
<div class="bg-white">
	<main>
		<slot />
	</main>
</div>
<Footer /> -->
