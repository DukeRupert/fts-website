<script lang="ts">
	import site_preparation from '$lib/assets/images/FtS-Excavation_5.webp?as=run';
	import Img from '@zerodevx/svelte-img';
	import Seo from '$lib/components/Seo.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import FadeIn from '$lib/components/FadeIn.svelte';

	const seoData = {
		title: 'Services | FtS Excavation',
		description:
			'Your trusted Puyallup excavation experts. Skilled professionals, advanced equipment, and reliable service. Residential, commercial, and industrial excavation. Contact us for a free consultation.',
		url: 'https://www.fts-excavation.com/about-us',
		og: {
			src: 'https://www.fts-excavation.com/image/seo/FtS-Excavation_1200.jpg',
			alt: 'FtS Excavation clearing land in the Puget Sound region.',
			mimeType: 'jpeg',
			width: 1200,
			height: 675
		}
	};

	interface Service {
		title: string;
		body: string;
		href: string;
	}

	const services: Service[] = [
		{
			title: 'Drainage',
			body: 'Our team specializes in keeping your property dry and safe, addressing drainage issues with precision and efficiency. From stormwater management to foundation protection, we ensure that water flows where it should, providing peace of mind and preserving the integrity of your space.',
			href: '/drainage'
		},
		{
			title: 'Site Preparation',
			body: "Our comprehensive site preparation services set the stage for successful projects, whether it's clearing, grading, or utility installation. Partner with us and experience precision, efficiency, and client-centric solutions that make your project a resounding success.",
			href: '/site-preparation'
		},
		{
			title: 'Hardscapes',
			body: "Our custom hardscape designs are crafted with expert precision, using quality materials and a keen eye for functional aesthetics. Whether it's a stunning patio, a sturdy retaining wall, or an inviting outdoor oasis, we turn your outdoor dreams into beautiful, lasting realities.",
			href: '/hardscape'
		},
		{
			title: 'Foundations',
			body: "Choose FtS Excavation for foundations that stand firm and true. With a proven track record of excellence in excavation, we're your trusted partner for building the rock-solid foundations your projects deserve.",
			href: '/foundations'
		},
		{
			title: 'Land Clearing',
			body: "Transform your land into a canvas of possibilities with FtS Excavation's top-tier land clearing services in Puyallup, WA. Our expertise combines with cutting-edge equipment to create a clean slate for your projects, all while prioritizing environmental responsibility, safety, and seamless collaboration.",
			href: '/land-clearing'
		},
		{
			title: 'Public Utility Extension',
			body: "Elevate your community with FtS Excavation's utility extension services based in Puyallup, WA. From water to electricity, we deliver reliable infrastructure expansion with expert precision and a commitment to safety.",
			href: '/public-utility-extension'
		}
	];
</script>

<Seo data={seoData} />
<div class="bg-white py-16 sm:py-32">
	<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Services</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Skilled professionals, advanced equipment, and reliable service. Residential, commercial,
				and industrial excavation.
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
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each services as { title, body, href }, i}
				<FadeIn i={i * 150}>
					<div class="flex flex-col">
						<h2 class="unstyled font-semibold text-gray-900 text-xl">{title}</h2>
						<p class="mt-1 text-gray-600">{body}</p>
						{#if href}
							<a class="unstyled mt-4 font-semibold text-primary-500 underline" {href}
								>Learn more <span class="sr-only">about {title}</span>
								<span aria-hidden="true">&rarr;</span></a
							>
						{/if}
					</div>
				</FadeIn>
			{/each}
		</dl>
	</div>
	<CallToAction />
</div>
