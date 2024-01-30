<script lang="ts">
	import land_clearing from '$lib/assets/images/FtS-Excavation_5.webp?as=run';
	import utilities from '$lib/assets/images/utilities.jpg?as=run';
	import Img from '@zerodevx/svelte-img';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const title = 'Public utility extension';
	const description =
		"Elevate your community with FtS Excavation's utility extension services based in Puyallup, WA. From water to electricity, we deliver reliable infrastructure expansion with expert precision and a commitment to safety.";

	const solutions = [
		{
			title: 'Comprehensive Utility Expansion',
			body: 'At FtS Excavation, we specialize in comprehensive public utility extension services. Whether you need water, sewer, gas, or electrical lines extended, we have the expertise and equipment to efficiently connect communities and ensure reliable utility access.'
		},
		{
			title: 'Expert Team and Equipment',
			body: 'Our skilled team, paired with state-of-the-art equipment, ensures the seamless extension of public utilities. We pride ourselves on precision, safety, and compliance, providing communities with the essential infrastructure they need to thrive.'
		},
		{
			title: 'Safety and Environmental Responsibility',
			body: 'Safety and environmental responsibility are paramount in our utility extension projects. We adhere to strict safety standards and environmentally conscious practices, prioritizing the well-being of communities and the preservation of natural resources.'
		},
		{
			title: 'Efficient Project Management',
			body: 'Efficiency is the cornerstone of our utility extension services. We meticulously plan and execute every project to meet deadlines and budget constraints, ensuring that communities can rely on their extended utilities with minimal disruption.'
		},
		{
			title: 'Regulatory Compliance',
			body: 'Rest easy knowing that we handle all regulatory compliance aspects of utility extension projects. From permits to inspections, we navigate the bureaucratic process to ensure your project is fully compliant with local and state regulations.'
		},
		{
			title: 'Cost-Effective Solutions',
			body: 'We provide cost-effective utility extension solutions without compromising on quality or safety. Our efficient processes and competitive pricing make essential infrastructure expansion accessible to all communities.'
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
				src={utilities}
				alt="A public utility extension trench recently created by FtS Excavation."
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
