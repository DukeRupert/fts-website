<script lang="ts">
	import land_clearing from '$lib/assets/images/FtS-Excavation_5.webp?run';
	import Img from '@zerodevx/svelte-img';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const title = 'Land clearing';
	const description =
		"Transform your land into a canvas of possibilities with FtS Excavation's top-tier land clearing services in Puyallup, WA. Our expertise combines with cutting-edge equipment to create a clean slate for your projects, all while prioritizing environmental responsibility, safety, and seamless collaboration.";

	const solutions = [
		{
			title: 'Site Assessment and Planning',
			body: 'Our land clearing services begin with a comprehensive site assessment and planning phase. We carefully evaluate the terrain, vegetation, and project requirements to create a customized land clearing strategy that maximizes efficiency and minimizes environmental impact.'
		},
		{
			title: 'Specialized Equipment',
			body: 'Equipped with a versatile fleet of specialized machinery, we have the tools to tackle any land clearing project. From tree removal to brush clearing and debris disposal, our state-of-the-art equipment ensures the job is done efficiently and to your exact specifications.'
		},
		{
			title: 'Environmental Responsibility',
			body: 'We prioritize environmental responsibility in our land clearing practices. Our team adheres to strict regulations and employs eco-friendly methods to minimize disruption to ecosystems. We also handle waste disposal in an environmentally conscious manner.'
		},
		{
			title: 'Safety and Compliance',
			body: 'Safety is paramount in our land clearing operations. Our skilled workforce undergoes rigorous safety training, and we strictly adhere to industry regulations and safety standards. We provide a safe working environment for our team and peace of mind for our clients.'
		},
		{
			title: 'Project Efficiency',
			body: 'Efficiency is at the core of our land clearing services. We meticulously plan and execute every project to meet deadlines and budget requirements. Our streamlined approach minimizes downtime, ensuring your land is cleared and ready for your next endeavor as quickly as possible.'
		},
		{
			title: 'Client Collaboration',
			body: 'We value collaboration with our clients. Our team maintains open lines of communication throughout the project, keeping you informed at every stage. Your input and feedback are integral to our process, ensuring the final result aligns perfectly with your vision.'
		}
	];

	const seoData = {
		title: `${title} | FtS Excavation`,
		description: description,
		url: 'https://www.fts-excavation.com/land-clearing',
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
				src={land_clearing}
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
	<CallToAction />
</div>
