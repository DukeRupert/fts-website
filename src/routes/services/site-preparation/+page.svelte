<script lang="ts">
	import site_preparation from '$lib/assets/images/site_preparation.jpeg?run';
	import Img from '@zerodevx/svelte-img';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

	const solutions = [
		{
			title: 'Experience',
			body: 'FtS Excavation brings years of experience and expertise to every job ensuring the projects success.'
		},
		{
			title: 'Attention to detail',
			body: 'We are meticulous, ensuring that all work is completed to the highest standards.'
		},
		{
			title: 'Communication',
			body: 'Our bids are transparent and clear so you know exactly what you will get.'
		},
		{
			title: 'Timeliness',
			body: 'We complete the work within the agreed-upon timeline, without unnecessary delays.'
		},
		{
			title: 'Flexibility',
			body: 'We are flexible and able to adapt to changing project requirements, without compromising on quality or safety.'
		},
		{
			title: 'Licensing and Insurance',
			body: 'We are properly licensed and insured to perform the work required.'
		}
	];

	const seoData = {
		title: 'Site Preparation | FtS Excavation',
		description:
			'We clear, grade, and prepare sites for construction projects with precision and efficiency. Trust us for reliable and comprehensive site preparation.',
		url: 'https://www.fts-excavation.com/services/site-preparation',
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
			<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Site Preparation
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				We clear, grade, and prepare sites for construction projects with precision and efficiency.
				Trust us for reliable and comprehensive site preparation.
			</p>
		</div>
	</div>
	<div class="relative overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<Img
				src={site_preparation}
				alt="Dug out trench for building works of new house concrete foundation on construction site"
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
			title="Site Preparation Projects"
			body="Our experience team has helped prepare sites all over the Puget Sound."
			posts={data.posts}
		/>
	{/if}
	<CallToAction />
</div>
