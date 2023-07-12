<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/Blog/Card.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Posts from '$lib/sections/Posts.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	console.log(data);

	const seoData = {
		title: 'Projects | FtS Excavation',
		description:
			'FtS Excavation brings skilled professionals, advanced equipment, and reliable service to all residential, commercial, and industrial excavation projects in the Puget Sound.',
		url: 'https://www.fts-excavation.com/projects',
		og: {
			src: 'https://www.fts-excavation.com/image/seo/FtS-Excavation_1200.jpg',
			alt: 'FtS Excavation clearing land in the Puget Sound region.',
			mimeType: 'jpeg',
			width: 1200,
			height: 675
		}
	};
</script>

<Seo data={seoData} />

<div class="relative mt-28">
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="unstyled text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Projects
				</h1>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					We are proud to showcase a few examples of the work we are doing in the Greater Puget
					Sound region.
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each data.posts as post}
					<Card data={post} />
				{/each}
			</div>
		</div>
		<CallToAction />
	</div>
</div>
