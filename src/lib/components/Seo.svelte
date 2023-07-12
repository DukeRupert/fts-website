<script lang="ts">
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
	}

	export let data: SeoData;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={data.url} />
	<meta property="og:image:url" content={data.og.src} />
	<meta property="og:image:alt" content={data.og.alt} />
	<meta property="og:image:type" content={data.og.mimeType} />
	<meta property="og:image:width" content={data.og.width.toString()} />
	<meta property="og:image:height" content={data.og.height.toString()} />
	<link rel="canonical" href={data.url} />
</svelte:head>
