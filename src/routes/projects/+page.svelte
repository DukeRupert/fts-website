<script lang="ts">
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Posts from '$lib/sections/Posts.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

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

<div class="relative">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-32 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="unstyled text-base font-semibold text-primary-500 tracking-wide uppercase">
				Projects
			</h1>
			<h2 class="unstyled mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
				See what we do
			</h2>
			<p class="unstyled max-w-xl mt-4 mx-auto text-xl">
				We are proud to showcase a few examples of the work we are doing in the Greater Puget Sound
				region.
			</p>
		</div>
		<div class="pt-16 pb-32">
			<Posts posts={data.data} cta={false} />
		</div>
		<CallToAction />
	</div>
</div>
