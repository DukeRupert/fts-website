<script lang="ts">
	import { urlFor } from './sanityClient';
	import type { MainImage } from '$lib/types/sanity';
	export let image: MainImage;
	export let maxWidth = 1200;

	// Once loaded, the image will transition to full opacity
	let loaded = false;
</script>

{#if image}
	<img
		class="w-full h-full object-center object-cover"
		loading="lazy"
		src={urlFor(image.asset.url).width(maxWidth).fit('fillmax').url()}
		alt={image.alt}
		style="opacity: {loaded ? 1 : 0}; transition: .5s opacity;"
		on:load={() => (loaded = true)}
	/>
{/if}
