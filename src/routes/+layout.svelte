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
	import { is_open, is_services_open, is_about_open, is_mobile_services_open } from '$lib/stores';

	// Close all menus when navigating
	$: if ($navigating === null) {
		drawerClose();
		$is_open = false;
		$is_services_open = false;
		$is_about_open = false;
		$is_mobile_services_open = false;
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
