<script lang="ts">
	import hardscape_patio from '$lib/assets/images/fts_hardscape_bonney_lake_patio.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	const title = 'Hardscape';
	const description =
		"Custom hardscape designs and installations in the Puget Sound. From patios to retaining walls, FTS Excavation transforms outdoor spaces with quality and precision.";

	const solutions = [
		{
			title: 'Custom Hardscape Design',
			body: 'At FtS Hardscapes, we specialize in crafting custom hardscape designs that enhance the beauty and functionality of your outdoor spaces. Our team collaborates closely with you to create unique, eye-catching features that reflect your vision and style.'
		},
		{
			title: 'Skilled Craftsmanship',
			body: "Our skilled craftsmen are experts in hardscape construction, ensuring that every project is executed with precision and attention to detail. From paver installations to retaining walls and outdoor living spaces, our team's workmanship speaks for itself."
		},
		{
			title: 'Quality Materials',
			body: "We source and use only the highest-quality materials for your hardscape projects. Whether it's natural stone, interlocking pavers, or durable concrete, our materials are built to withstand the elements and stand the test of time."
		},
		{
			title: 'Functional and Aesthetic Balance',
			body: "We strike the perfect balance between functionality and aesthetics in our hardscape designs. Our creations not only enhance the usability of your outdoor areas but also add an artistic touch that elevates your property's curb appeal."
		},
		{
			title: 'Project Management Excellence',
			body: 'Efficient project management is at the core of our hardscape services. We meticulously plan, schedule, and execute each project, ensuring that it is completed on time and within budget while maintaining the highest quality standards.'
		},
		{
			title: 'Client-Centric Approach',
			body: 'We prioritize open communication and collaboration with our clients throughout the hardscape project. Your input is valued every step of the way, ensuring that the final result exceeds your expectations and aligns with your outdoor living dreams.'
		}
	];

	const seoData = {
		title: `${title} | FtS Excavation`,
		description: description,
		url: 'https://www.fts-excavation.com/hardscape',
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
				{title}
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				{description}
			</p>
		</div>
	</div>
	<div class="relative overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<Img
				src={hardscape_patio}
				alt="Dug out trench for building works of new house concrete foundation on construction site"
				class="mb-[-12%] mt-8 rounded-xl shadow-2xl ring-1 ring-gray-900/10"
			/>
			<div class="relative" aria-hidden="true">
				<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
			</div>
		</div>
	</div>
	<div class="mx-auto mt-16 max-w-2xl sm:mt-20 px-6 lg:px-8 lg:mt-24 lg:max-w-none">
		<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
			{#each solutions as { title, body }}
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg
							class="h-5 w-5 flex-none text-secondary-600"
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
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">{body}</p>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
	<Blog
		title={`${title} projects`}
		body="See what FtS Excavation can do for you."
		posts={data.posts}
	/>
	<CallToAction />
</div>
