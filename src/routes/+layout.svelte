<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss';
	import '../app.postcss';
	import { AppShell, Modal, Toast } from '@skeletonlabs/skeleton';
	import Header from '$lib/sections/Navbar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import { navigating } from '$app/stores';
	import { drawerClose } from '$lib/utils/drawer';

	$: if ($navigating === null) {
		drawerClose();
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
<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="sidebarRight"><Drawer /></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
<Toast />
