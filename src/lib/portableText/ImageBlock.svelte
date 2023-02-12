<script lang="ts">
	import SanityImage from '$lib/sanity/SanityImage.svelte';
	import type { Image } from '$lib/types/sanity';

	export let portableText;

	const value = portableText?.value as Image;
</script>

{#if value.asset}
	<figure>
		<SanityImage image={value} />
		{#if value.caption}
			<figcaption>{value.caption}</figcaption>
		{/if}
	</figure>
{/if}
