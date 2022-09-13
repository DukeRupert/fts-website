<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import AlternatingFeatures from '$lib/sections/AlternatingFeatures.svelte';
	import GradientFeatures from '$lib/sections/GradientFeatures.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Posts from '$lib/sections/Posts.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import ServiceArea from '$lib/sections/ServiceArea.svelte';
	import Reviews from '$lib/sections/Reviews.svelte';

	export let data: PageData;

	console.log(data);
</script>

<SvelteSeo
	title="FtS Excavation - Puyallup's excavation experts"
	description="Professional excavators serving both residential and commercial clients. Services include site prepartion, land development and drainage solutions. Serving the greater Puget Sound region."
	keywords="excavation land clearing foundations leveling dirt removal residential construction utility installation tacoma puyallup"
	openGraph={{
		title: "FtS Excavation - Puyallup's excavation experts",
		description: `Professional excavators serving both residential and commercial clients. Services include site prepartion, land development and drainage solutions. Serving the greater Puget Sound region.`,
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: `${$page.url.host}/image/P53_900.webp`,
				width: 960,
				height: 600,
				alt: 'FtS Excavation excavator leveling a driveway for a residential customer in Puyallup.'
			}
		]
	}}
/>

<Hero />
<AlternatingFeatures />
<ServiceArea />
<Reviews />
<Posts posts={data.data} />
<GradientFeatures />
<CallToAction />
