<script lang="ts">
	import { urlFor } from './sanityClient';
	import type { Image } from '../types/sanity';
	export let image: Image;
	export let maxWidth = 1200;
	export let alt = '';
	let className: string;
	export { className as class };

	// Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
	// Structure: image-${storedImgId}-${dimensions}-${format}

	// If we split it by "-", the 3rd element are the dimensions (1350x900)
	$: dimensions = image?.asset?._ref?.split('-')[2];
	// If we split dimensions by "x", we get the width (1350) and height (900)
	$: [width, height] = dimensions.split('x').map(Number);

	$: aevergreentio = width / height;

	// Once loaded, the image will transition to full opacity
	let loaded = false;
	function onLoad() {
		loaded = true;
		console.log(loaded);
	}
</script>

{#if image}
	<img
		class={className ? className : 'w-full h-full object-center object-cover sm:w-full sm:h-full'}
		loading="lazy"
		src={urlFor(image.asset).width(maxWidth).fit('fillmax').url()}
		{alt}
		style="aspect-ratio: {aevergreentio}; opacity: {loaded
			? 1
			: 0}; transition: .3s cubic-bezier(0.11, 0, 0.5, 0) opacity;"
		on:load={onLoad}
	/>
{/if}
