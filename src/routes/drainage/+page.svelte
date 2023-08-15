<script lang="ts">
	import drainage from '$lib/assets/images/drainage.jpeg?run';
	import Img from '@zerodevx/svelte-img';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';
	export let data: PageData;

	const solutions = [
		{
			title: 'French Drains',
			body: 'A trench filled with gravel or rock that contains a perforated pipe that redirects surface or groundwater away from an area.'
		},
		{
			title: 'Gutter Drains',
			body: 'Gutters and drain spouts are important but they work so much better when paired with a good gutter drain system.'
		},
		{
			title: 'Curtain Drains',
			body: 'Similar to a french drain except that it is installed underground and often out of sight. Useful to direct water away from a home.'
		},
		{
			title: 'Dry Well',
			body: 'A drywell is used to quickly transfer excess surface water into the subsoil. Proper location and construction are crucial.'
		},
		{
			title: 'Catch Basin',
			body: 'Installing catch basins correctly is extremely important to the operation of most drainage solutions.'
		},
		{
			title: 'Erosion Control',
			body: 'Your best ally in the fight against excess water is land. We integrate and support natural solutions through erosion control.'
		}
	];

	const seoData = {
		title: 'Drainage | FtS Excavation',
		description:
			'Protect your property with our top-notch drainage services. Our team of experts designs and implements tailored drainage solutions that effectively channel water away, preventing costly damage and ensuring a dry and stable environment.',
		url: 'https://www.fts-excavation.com/drainage',
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
<div class="bg-white py-16 sm:py-32">
	<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Drainage</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Protect your property with our top-notch drainage services. Our team of experts designs and
				implements tailored drainage solutions that effectively channel water away, preventing
				costly damage and ensuring a dry and stable environment.
			</p>
		</div>
	</div>
	<div class="relative overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<Img
				src={drainage}
				alt="A beautiful green lawn with a graveled drainage ditch."
				class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
			/>
			<div class="relative" aria-hidden="true">
				<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
			</div>
		</div>
	</div>
	<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
		<dl
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
		>
			{#each solutions as { title, body }}
				<div class="relative pl-9">
					<dt class="inline font-semibold text-gray-900">
						<svg
							class="absolute left-1 top-1 h-5 w-5 text-secondary-600"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
						</svg>
						{title}
					</dt>
					<dd class="inline">
						{body}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
	{#if data.posts}
		<Blog
			title="Drainage Projects"
			body="Discover how we have solved drainage issues all over the Puget Sound."
			posts={data.posts}
		/>
	{/if}
	<CallToAction />
</div>
