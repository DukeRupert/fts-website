<script lang="ts">
	import { onMount } from 'svelte';
	import { urlFor } from './sanityClient';
	import type { MainImage } from '$lib/types/sanity';
	export let image: MainImage;
	export let maxWidth = 1200;

	// Once loaded, the image will transition to full opacity
	let loaded = false;
	function onLoad() {
		loaded = true;
	}

	onMount(() => {
		// Fallback if load event doesn't fire
		setTimeout(() => (loaded = true), 250);
	});
</script>

{#if image}
	<img
		class="w-full h-full object-center object-cover"
		loading="lazy"
		src={urlFor(image.asset.url).width(maxWidth).fit('fillmax').url()}
		alt={image.alt}
		style="opacity: {loaded ? 1 : 0}; transition: .3s cubic-bezier(0.11, 0, 0.5, 0) opacity;"
		on:load={onLoad}
	/>
{/if}
