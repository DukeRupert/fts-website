<script lang="ts">
	import drainage from '$lib/assets/images/drainage.jpeg?as=run';
	import Img from '@zerodevx/svelte-img';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	const title = 'Drainage';
	const description =
		'Our team specializes in keeping your property dry and safe, addressing drainage issues with precision and efficiency. From stormwater management to foundation protection, we ensure that water flows where it should, providing peace of mind and preserving the integrity of your space.';

	const solutions = [
		{
			title: 'Comprehensive Drainage Solutions',
			body: 'At FtS Drainage, we specialize in comprehensive drainage solutions to keep your property safe and dry. From addressing surface water runoff to protecting foundations and basements, our expertise covers all aspects of effective drainage.'
		},
		{
			title: 'Skilled Drainage Experts',
			body: 'Our team of skilled drainage experts is dedicated to resolving water-related issues with precision and efficiency. With years of experience, we assess, plan, and execute drainage projects that deliver lasting results and peace of mind.'
		},
		{
			title: 'Cutting-Edge Drainage Technology',
			body: 'We employ cutting-edge drainage technology and methods to ensure optimal performance. From French drains to surface grading and stormwater management, we use the latest tools and techniques to keep water at bay.'
		},
		{
			title: 'Preventative Foundation Protection',
			body: 'Our drainage solutions go beyond surface water management. We offer preventative foundation protection services, safeguarding your property against potential damage caused by water infiltration and ensuring the longevity of your structure.'
		},
		{
			title: 'Efficient Project Management',
			body: 'Efficiency is paramount in our drainage services. Our expert project management ensures that your drainage issues are resolved on time and within budget, minimizing disruption to your property while maximizing effectiveness.'
		},
		{
			title: 'Client-Centric Approach',
			body: 'We believe in transparent communication and collaboration with our clients. Throughout the drainage project, your input is valued, and we work closely with you to tailor our solutions to your specific needs, ensuring your complete satisfaction.'
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
				src={drainage}
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
	{#if data.posts}
		<Blog
			title={`${title} projects`}
			body="See what FtS Excavation can do for you."
			posts={data.posts}
		/>
	{/if}
	<CallToAction />
</div>
