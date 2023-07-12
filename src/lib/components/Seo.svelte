<script lang="ts">
	import type { WithContext, Article } from 'schema-dts';
	import { serializeSchema } from '$lib/utils/json-ld-serializer';

	interface SeoData {
		title: string;
		description: string;
		url: string;
		og: {
			src: string;
			alt: string;
			mimeType: string;
			width: number;
			height: number;
		};
		published_at?: string;
	}

	export let data: SeoData;
	export let type: 'website' | 'article' = 'website';

	let jsonld_schema: WithContext<Article> = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: data.title,
		image: data.og.src,
		author: 'FtS Excavation',
		genre: 'excavation',
		publisher: {
			'@type': 'Organization',
			name: 'FtS Excavation',
			logo: {
				'@type': 'ImageObject',
				url: 'https://www.fts-excavation.com/logo/FtS_Logo_Cream.webp'
			}
		},
		url: data.url,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': data.url
		},
		datePublished: data.published_at,
		dateCreated: data.published_at,
		description: data.description
	};
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	{#if type == 'website'}
		<meta property="og:type" content="website" />
	{/if}
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:url" content={data.url} />
	<meta property="og:image:url" content={data.og.src} />
	<meta property="og:image:alt" content={data.og.alt} />
	<meta property="og:image:type" content={data.og.mimeType} />
	<meta property="og:image:width" content={data.og.width.toString()} />
	<meta property="og:image:height" content={data.og.height.toString()} />
	<link rel="canonical" href={data.url} />
	{#if type == 'article'}
		<meta property="og:type" content="article" />
		<meta property="og:article:published_time" content={data.published_at} />
		{@html serializeSchema(jsonld_schema)}
	{/if}
</svelte:head>
