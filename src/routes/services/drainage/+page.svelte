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
		title: 'Custom Solutions',
		subtitle: 'We have many different techniques to effectively solve your drainage problems.',
		features: [
			{
				title: 'French drains',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Gutter drains',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Curtain drains',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Dry wells',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Catch basins',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Water table',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			}
		]
	};
</script>

<SvelteSeo
	title="Drainage"
	description="See some of the excellent excavation work FtS Excavation has completed in the greater Puget Sound region. Here is what professional commercial and residential excavation services can do for you."
	keywords="excavation land clearing foundations leveling dirt removal residential construction utility installation tacoma puyallup"
	openGraph={{
		title: 'Drainage',
		description: `There is ALWAYS a solution. We have many different techniques to effectively solve your drainage problems.`,
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: `${$page.url.host}/image/P06_900.webp`,
				width: 960,
				height: 600,
				alt: 'Site preparation by clearing brush using a New Holland compact track loader.'
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
				<h2 class="text-3xl font-bold tracking-tight text-gray-900">Drainage Projects</h2>
				<p class="mt-4 text-lg text-gray-500">
					Check out the results of some of our past drainage projects.
				</p>
			</div>
			<div class="pt-16 pb-32">
				<Posts posts={data.data} cta={false} />
			</div>

			<CallToAction />
		</div>
	</div>
</div>
