<script lang="ts">
	import hardscape_patio from '$lib/assets/images/fts_hardscape_bonney_lake_patio.jpg?as=run';
	import { CldImage } from 'svelte-cloudinary';
	import Img from '@zerodevx/svelte-img';
	import Feature from './(components)/Feature.svelte';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	const title = 'Public Works';
	const description =
		"Expert excavation services for government projects in the Puget Sound. FTS Excavation ensures quality and efficiency for all public works.";

	const solutions = [
  {
    "title": "Expertise You Can Trust",
    "body": "At FtS Excavation, we possess a wealth of experience in handling public works projects across the Puget Sound region. Our team comprises seasoned professionals with a deep understanding of local regulations, soil conditions, and permitting requirements. We leverage this expertise to deliver projects efficiently and according to code."
  },
  {
    "title": "Unwavering Attention to Detail",
    "body": "Public works projects demand meticulous planning and execution. At FtS Excavation, we prioritize meticulous attention to detail in every aspect of our work. From project planning and cost estimation to on-site execution and safety protocols, we ensure flawless results that meet your expectations and enhance the longevity of your infrastructure."
  },
  {
    "title": "Experience for Every Challenge",
    "body": "Over the years, FtS Excavation has tackled a diverse range of public works projects throughout the Puget Sound region. We have the experience and proven ability to handle projects of varying complexities. No matter the scope of your project, we have the expertise to deliver exceptional results."
  },
  {
    "title": "Delivering Projects Within Budget",
    "body": "FtS Excavation understands the importance of staying within budget on public works projects. We offer transparent pricing and work closely with city managers to identify potential cost-saving strategies. Our commitment to efficiency helps ensure projects are completed on time and to your financial specifications."
  },
  {
    "title": "Minimizing Disruption, Maximizing Community Well-being",
    "body": "FtS Excavation recognizes the impact public works projects have on local communities. We develop detailed execution plans to minimize disruptions to residents and businesses, and our proactive communication ensures stakeholders stay informed."
  },
  { 
    "title": "Safety: Our Top Priority",
    "body": "The safety of our team and the surrounding community is non-negotiable. We have rigorous safety protocols in place, conduct regular training, and maintain an excellent safety record."
  },
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
			<CldImage
				src="https://res.cloudinary.com/rr-wholesale/image/upload/v1714587350/FTS-Excavation/Pioneer_Park_2_hfmq2n.jpg"
				alt="Dug out trench for building works of new house concrete foundation on construction site"
				class="mb-[-12%] mt-8 rounded-xl shadow-2xl ring-1 ring-gray-900/10"
				width="4032"
				height="3024"
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
	<Feature />
	<Blog
		title="Building Stronger Communities"
		body="Explore our experience and commitment to delivering successful outcomes"
		posts={data.posts}
	/>
	<CallToAction />
</div>
