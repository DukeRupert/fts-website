<script lang="ts">
	import site_preparation from '$lib/assets/images/site_preparation.jpeg?as=run';
	import silveria_site_prep from '$lib/assets/images/silveria_site_prep.png?as=run';
	import Img from '@zerodevx/svelte-img';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	const title = 'Site preparation';
	const description =
		"Comprehensive site preparation services including clearing, grading, and utility installation in the Puget Sound. FTS Excavation ensures your project's success with precision and efficiency.";

	const solutions = [
		{
			title: 'Comprehensive Site Preparation',
			body: "At FtS Site Prep, we specialize in comprehensive site preparation services, transforming raw land into a canvas ready for development. From clearing and grading to excavation and utility installation, we lay the groundwork for your projects' success."
		},
		{
			title: 'Skilled Site Preparation Experts',
			body: 'Our team of skilled site preparation experts brings years of experience to every project. With precision and efficiency, we meticulously plan and execute site preparation, ensuring that your land is primed for construction.'
		},
		{
			title: 'Cutting-Edge Equipment and Technology',
			body: 'We utilize cutting-edge equipment and technology to deliver top-notch site preparation. From advanced grading machinery to GPS-guided excavation, our tools ensure that your project starts on the right foot.'
		},
		{
			title: 'Cost-Effective Solutions',
			body: "We provide cost-effective site preparation solutions without compromising on quality or safety. Our efficient processes and competitive pricing make your project's groundwork accessible and affordable."
		},
		{
			title: 'Efficient Project Management',
			body: 'Efficiency is at the heart of our site preparation services. Our expert project managers oversee every detail, from scheduling to resource allocation, ensuring that your site is prepared on time and within budget.'
		},
		{
			title: 'Client-Centric Approach',
			body: "We believe in open communication and collaboration with our clients throughout the site preparation process. Your input is essential, and we work closely with you to tailor our services to your project's specific requirements, delivering results that exceed your expectations."
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
				src={silveria_site_prep}
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
