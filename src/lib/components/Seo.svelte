<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { urlFor } from '$lib/sanity/sanityImage';
	import type { SanityPage } from '$lib/types/sanity';
	import type { Post } from '$lib/types/sanity';

	export let data: SanityPage | Post;
	export let url: string;
	export let noindex = false;
	export let width = 1200;
	export let height = 630;
</script>

{#if data._type == 'post'}
	<SvelteSeo
		title={data.title}
		description={data?.excerpt}
		{noindex}
		openGraph={{
			title: data.title,
			description: data.excerpt,
			url: url,
			type: 'article',
			article: {
				publishedTime: data?.publishedAt
			},
			images: [
				{
					url: urlFor(data.image.asset).width(width).height(height).format('webp').url().toString(),
					width: width,
					height: height,
					alt: data.image.alt
				}
			]
		}}
	/>
{:else if data._type == 'page'}
	<SvelteSeo
		title={data.title}
		description={data.metaDescription}
		openGraph={{
			title: data.title,
			description: data.metaDescription,
			url: url,
			type: 'website',
			images: [
				{
					url: urlFor(data.mainImage.asset)
						.width(width)
						.height(height)
						.format('webp')
						.url()
						.toString(),
					width: width,
					height: height,
					alt: data.title
				}
			]
		}}
	/>
{/if}
