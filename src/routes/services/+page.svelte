<script lang="ts">
	import type { PageData } from './$types';
	import Serializer from '$lib/sanity/pageBuilder/serializer.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/sanity/sanityImage';
	export let data: PageData;
	const { page: pageData } = data;
	interface SeoData {
		type: 'article' | 'page';
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

	const seoData: SeoData = {
		type: 'page',
		url: $page.url.toString(),
		title: pageData.title,
		metaDescription: pageData.metaDescription,
		image: {
			url: urlFor(pageData.mainImage.asset).width(1200).height(630).format('webp').url().toString(),
			height: 630,
			width: 1200,
			alt: pageData.title
		}
	};
</script>

<Seo seo={seoData} />
<Serializer data={pageData.pageBuilder} />
<CallToAction />
