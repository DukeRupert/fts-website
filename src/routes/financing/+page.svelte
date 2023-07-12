<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import FinancingModule from '$lib/components/FinancingModule.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';

	const seoData = {
		title: 'Financing | FtS Excavation',
		description:
			"Get started today! We know some projects just can't wait so we have partnered with GreenSky to offer you financing options.",
		url: 'https://www.fts-excavation.com/financing',
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
<div class="relative mt-28">
	<div class="bg-white py-16 sm:py-32">
		<div class="max-w-4xl mx-auto px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Financing
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Get started today! We know some projects just can't wait so we have partnered with
					GreenSky to offer you financing options.
				</p>
			</div>
			<div
				class="max-w-4xl mx-auto flex justify-center px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
			>
				<div class="h-[546px]">
					<FinancingModule />
				</div>
			</div>
		</div>
		<CallToAction />
	</div>
</div>
