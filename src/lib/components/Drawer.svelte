<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
</script>

<Drawer position="right" width="fit-content">
	{#if $drawerStore.id === 'navigation'}
		<div class="p-4 h-full">
			<MobileMenu />
		</div>
	{:else if $drawerStore.id === 'something'}
		<p>Show something else</p>
	{:else}
		<p>(fallback contents)</p>
	{/if}
</Drawer>
