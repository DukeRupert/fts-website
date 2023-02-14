<script lang="ts">
	import type { PageData } from './$types';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { page } from '$app/stores';
	import { PortableText } from '@portabletext/svelte';
	import Features from '../Features.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Posts from '$lib/sections/Posts.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Header from '$lib/components/Header.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	const { page: pageData, posts } = data;
	const blocks = pageData?.pageBuilder as InputValue;

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

<Seo data={pageData} url={$page.url.toString()} />
<div class="relative">
	<PortableText value={blocks} components={{ types: { features: Features } }} />
	<!-- <Header data={headerData} />
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<Feature data={featureData} />
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-bold tracking-tight ">Drainage Projects</h2>
				<p class="mt-4 text-lg ">Check out the results of some of our past drainage projects.</p>
			</div>
		

			<CallToAction />
		</div>
	</div> -->
</div>
