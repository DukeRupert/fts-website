<script>
	import fts_excavation_land_clearing from '$lib/assets/images/FtS-Excavation_5.webp?run';
	import Img from '@zerodevx/svelte-img';

	const name = 'FtS Excavation';
	const title = 'Your trusted Puyallup excavation experts';
	const description =
		'Skilled professionals, advanced equipment, and reliable service. Residential, commercial, and industrial excavation. Contact us for a free consultation.';
</script>

<div id="hero" class="relative">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
			<div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
				<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
					<div class="flex mb-10">
						<div
							class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							<span class="hidden md:inline-block">Need it done today?</span><span
								class="inline-block"
							>
								&nbsp; We offer financing options. &nbsp;</span
							><a href="/financing" class="whitespace-nowrap font-semibold !text-primary-600"
								><span class="absolute inset-0" aria-hidden="true" />Learn more
								<span aria-hidden="true">&rarr;</span></a
							>
						</div>
					</div>
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						<span
							class="bg-clip-text text-transparent box-decoration-clone bg-gradient-to-br from-secondary-300 via-secondary-500 to-secondary-900"
							>{name}</span
						> <br />
						{title}
					</h1>
					<p class="mt-6 max-w-lg text-lg leading-8 text-gray-600">
						{description}
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a href="/contact-us" class="btn variant-filled-primary">Get started</a>
						<a href="#services" class="btn variant-ringed-primary"
							>Learn more <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<video
			poster="/image/poster.webp"
			src="/video/excavator_720p.mp4"
			type="video/mp4"
			class="aspect-[3/2] object-cover object-right lg:aspect-auto lg:h-full lg:w-full"
			autoplay
			muted
			loop
			preload="auto"
		>
			<p>Your browser cannot play the provided video file.</p>
		</video>
	</div>
</div>
