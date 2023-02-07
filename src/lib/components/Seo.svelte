<script lang="ts">
	import SvelteSeo from 'svelte-seo';

	interface SeoData {
		type: string;
		url: string;
		title: string;
		metaDescription: string;
		publishedAt?: string;
		image: {
			url: string;
			height: number;
			width: number;
			alt: string;
		};
	}

	export let seo: SeoData;
	export let noindex = false;
</script>

{#if seo.type == 'article'}
	<SvelteSeo
		title={seo.title}
		description={seo.metaDescription}
		{noindex}
		openGraph={{
			title: seo.title,
			description: seo.metaDescription,
			url: seo.url,
			type: 'article',
			article: {
				publishedTime: seo.publishedAt
			},
			images: [
				{
					url: seo.image.url,
					width: seo.image.width,
					height: seo.image.height,
					alt: seo.image.alt
				}
			]
		}}
	/>
{:else if seo.type == 'page'}
	<SvelteSeo
		title={seo.title}
		description={seo.metaDescription}
		openGraph={{
			title: seo.title,
			description: seo.metaDescription,
			url: seo.url,
			type: 'website',
			images: [
				{
					url: seo.image.url,
					width: seo.image.width,
					height: seo.image.height,
					alt: seo.image.alt
				}
			]
		}}
	/>
{:else}
	<SvelteSeo title={seo.title} description={seo.metaDescription} />
{/if}
