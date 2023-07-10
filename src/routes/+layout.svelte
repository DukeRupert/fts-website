<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss';
	import '../app.postcss';
	import { Modal, Toast } from '@skeletonlabs/skeleton';

	import Banner from '$lib/components/Banner.svelte';
	import Header from '$lib/components/Navigation/Header.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import { navigating } from '$app/stores';
	import { drawerClose } from '$lib/utils/drawer';

	$: if ($navigating === null) {
		drawerClose();
	}

	let is_banner_visible = true;

	function hide_banner() {
		is_banner_visible = false;
	}
</script>

<svelte:head>
	<script
		defer
		data-domain="fts-excavation.com"
		src="https://plausible.io/js/plausible.js"
	></script>
</svelte:head>

<Modal />
<!-- <Banner on:click={hide_banner} {is_banner_visible} /> -->
<div class="bg-white"><Header /><slot /><Footer /></div>
<Drawer />
<Toast />
