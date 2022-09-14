<script lang="ts">
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Posts from '$lib/sections/Posts.svelte';

	export let data: PageData;
</script>

<SvelteSeo
	title="Projects"
	description="See some of the excellent excavation work FtS Excavation has completed in the greater Puget Sound region. Here is what professional commercial and residential excavation services can do for you."
	keywords="excavation land clearing foundations leveling dirt removal residential construction utility installation tacoma puyallup"
	openGraph={{
		title: 'Projects',
		description: `See some of the excellent excavation work FtS Excavation has completed in the greater Puget Sound region. Here is what professional commercial and residential excavation services can do for you.`,
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
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-base font-semibold text-evergreen-500 tracking-wide uppercase">Projects</h1>
			<p
				class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				See what we do
			</p>
			<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
				We are proud to showcase a few examples of the work we are doing in the Greater Puget Sound
				region.
			</p>
		</div>
		<div class="pt-16 pb-32">
			<Posts posts={data.data} />
		</div>
		<CallToAction />
	</div>
</div>
