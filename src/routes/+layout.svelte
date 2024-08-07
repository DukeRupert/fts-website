<script lang="ts">
	import '../app.postcss';
	import { Modal, Toast } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Navigation/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { navigating } from '$app/stores';
	import { is_open, is_services_open, is_about_open, is_mobile_services_open } from '$lib/stores';
	import { initializeStores } from '@skeletonlabs/skeleton';

	// Initialize Skeleton stores
	initializeStores();

	// Close all menus when navigating
	$: if ($navigating === null) {
		$is_open = false;
		$is_services_open = false;
		$is_about_open = false;
		$is_mobile_services_open = false;
	}
</script>

<svelte:head>
	<script
		defer
		data-domain="plausible.angmar.dev"
		src="https://plausible.angmar.dev/js/script.js"
	></script>
</svelte:head>

<Modal />
<div class="bg-white"><Header /><slot /><Footer /></div>
<Toast />
