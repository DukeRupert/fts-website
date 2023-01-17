<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Posts from '$lib/sections/Posts.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Header from '$lib/components/Header.svelte';

	export let data: PageData;

	const headerData = {
		title: 'Drainage',
		subtitle: '"There is ALWAYS a solution."',
		image: {
			src: '/image/drainage.webp',
			alt: 'A white gravel drain installed in a green lawn.'
		}
	};

	const featureData = {
		title: 'Multiple Techniques',
		subtitle: '"There is ALWAYS a solution."',
		features: [
			{
				title: 'French drains',
				body: 'A trench filled with gravel or rock that contains a perforated pipe that redirects surface or groundwater away from an area.'
			},
			{
				title: 'Gutter drains',
				body: 'Gutters and drain spouts are important but they work so much better when paired with a good gutter drain system.'
			},
			{
				title: 'Curtain drains',
				body: 'Similar to a french drain except that it is installed underground and often out of sight. Useful to direct water away from a home.'
			},
			{
				title: 'Dry wells',
				body: 'A drywell is used to quickly transfer excess surface water into the subsoil. Proper location and construction are crucial.'
			},
			{
				title: 'Catch basins',
				body: 'Installing catch basins correctly is extremely important to the operation of most drainage solutions.'
			},
			{
				title: 'Erosion Control',
				body: 'Your best ally in the fight against excess water is land. We integrate and support natural solutions through erosion control.'
			}
		]
	};
</script>

<SvelteSeo
	title="Drainage"
	description="FtS Excavation are drainage experts capable of solving any excess water problems you may face in the Puget Sound."
	keywords="excavation land clearing foundations leveling dirt removal residential construction utility installation tacoma puyallup"
	openGraph={{
		title: 'Drainage',
		description: `There is ALWAYS a solution. We have many different techniques to effectively solve your drainage problems.`,
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: `${$page.url.host}/image/drainage.webp`,
				width: 961,
				height: 640,
				alt: 'A white gravel drain installed in a green lawn.'
			}
		]
	}}
/>

<div class="relative">
	<Header data={headerData} />
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<Feature data={featureData} />
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-bold tracking-tight ">Drainage Projects</h2>
				<p class="mt-4 text-lg ">Check out the results of some of our past drainage projects.</p>
			</div>
			<div class="pt-16 pb-32">
				<Posts posts={data.data} cta={false} />
			</div>

			<CallToAction />
		</div>
	</div>
</div>
