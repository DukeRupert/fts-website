<script>
	import fts_excavation_land_clearing from '$lib/assets/images/FtS-Excavation_5.webp?run';
	import Img from '@zerodevx/svelte-img';

	const name = 'FtS Excavation';
	const title = 'Your trusted Puyallup excavation experts';
	const description =
		'Skilled professionals, advanced equipment, and reliable service. Residential, commercial, and industrial excavation. Contact us for a free consultation.';
</script>

<div class="relative">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
			<svg
				class="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="0,0 90,0 50,100 0,100" />
			</svg>

			<div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
				<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
					<div class="hidden sm:mb-10 sm:flex">
						<div
							class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							Need it done today? We offer financing options. &nbsp;<a
								href="/financing"
								class="whitespace-nowrap font-semibold text-indigo-600"
								><span class="absolute inset-0" aria-hidden="true" />Learn more
								<span aria-hidden="true">&rarr;</span></a
							>
						</div>
					</div>
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						<span
							class="bg-clip-text text-transparent box-decoration-clone bg-gradient-to-br from-primary-700 via-primary-500 to-secondary-500"
							>{name}</span
						> <br />
						{title}
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						{description}
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a href="/contact-us#" class="btn variant-filled-primary">Get started</a>
						<a href="#services" class="btn variant-ringed-primary"
							>Learn more <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<Img
			class="aspect-[3/2] object-cover object-left lg:aspect-auto lg:h-full lg:w-full"
			src={fts_excavation_land_clearing}
			alt="An FtS Excavator hard at work clearing land in Washington state."
		/>
	</div>
</div>
