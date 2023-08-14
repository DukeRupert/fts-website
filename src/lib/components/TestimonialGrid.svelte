<script>
	import ryan_schaezler from '$lib/assets/reviews/ryan_schaezler.png?run&width=40&format=webp;avif;jpg';
	import henny_baker from '$lib/assets/reviews/henny_baker.png?run&width=40&format=webp;avif;jpg';
	import julie_pitt from '$lib/assets/reviews/julie_pitt.png?run&width=40&format=webp;avif;jpg';
	import tish_taitano from '$lib/assets/reviews/tish_taitano.png?run&width=40&format=webp;avif;jpg';
	import deAnne_davidson from '$lib/assets/reviews/deAnne_davidson.png?run&width=40&format=webp;avif;jpg';
	import Img from '@zerodevx/svelte-img';
	import StarRating from './TestimonialGrid/StarRating.svelte';
	import FadeIn from '$lib/components/FadeIn.svelte';
</script>

<div id="reviews" class="relative isolate pb-32 pt-24 sm:pt-32">
	<div
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
		aria-hidden="true"
	>
		<div
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#e29a60] to-[#f5dbc6]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
		aria-hidden="true"
	>
		<div
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#e29a60] to-[#f5dbc6] xl:ml-0 xl:mr-[calc(50%-12rem)]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<FadeIn>
			<div class="mx-auto max-w-xl text-center">
				<h2 class="text-lg font-semibold leading-8 tracking-tight text-primary-600">Reviews</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					We love hearing that we have made a customer's day better
				</p>
			</div>
		</FadeIn>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
		>
			<figure
				class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
			>
				<blockquote
					class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900 !border-l-primary-500"
				>
					<p>
						“Frank and his team did a great job with our lawn leveling project. They dug up some
						tree stumps, pulled up fence posts, knocked down some high spots, and leveled with top
						soil all in 2 days. They got us on the schedule fast and the attention to detail was
						great.”
					</p>
				</blockquote>
				<figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
					<Img
						class="h-10 w-10 flex-none rounded-full bg-gray-50"
						src={ryan_schaezler}
						alt="Ryan Schaezler icon"
					/>
					<div class="flex-auto">
						<div class="font-semibold">Ryan Schaezler</div>
						<div class="text-gray-600"><StarRating rating={5} /></div>
					</div>
				</figcaption>
			</figure>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900 !border-l-primary-500">
							<p>
								“Thank you, FTS! You guys were amazing! Went above and beyond. Flexible. Great work
								ethic. Even with snow and rain. Frank was very patient answering all my questions
								and concerns. My backyard was a disaster jungle. Now it’s so beautiful. Can’t wait
								to host summer backyard party. Very happy with their work.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<Img
								class="h-10 w-10 rounded-full bg-gray-50"
								src={henny_baker}
								alt="Henny Baker icon"
							/>
							<div>
								<div class="font-semibold">Henny Baker</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="space-y-8 xl:row-start-1">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900 !border-l-primary-500">
							<p>
								“It was such a pleasure to work with FTS on a job no other excavation contractor
								would take. Frank was so considerate and communicative throughout the whole process.
								I will absolutely work with FTS for all future excavation.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<Img
								class="h-10 w-10 rounded-full bg-gray-50"
								src={tish_taitano}
								alt="Tish Taitano icon"
							/>
							<div>
								<div class="font-semibold">Tish Taitano</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-start-1">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900 !border-l-primary-500">
							<p>
								“Frank did our complicated drainage system which required careful workmanship
								cutting a trench between existing landscape and fitting machinery between gate posts
								with only a quarter inch to spare. He did an outstanding job. If you want
								experienced and skilled with the excavation equipment Frank is the best.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<Img
								class="h-10 w-10 rounded-full bg-gray-50"
								src={deAnne_davidson}
								alt="DeAnne Davidson icon"
							/>
							<div>
								<div class="font-semibold">DeAnne Davidson</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900 !border-l-primary-500">
							<p>
								“Frank did an incredible job on a leveling project in my yard. I had the basic
								concept, but he made it a reality. He was great to work with from start to end.
								Always on time. Always professional. Extremely knowledgeable and willing to work
								with me when I had ideas or changes.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<Img
								class="h-10 w-10 rounded-full bg-gray-50"
								src={julie_pitt}
								alt="Julie Pitt icon"
							/>
							<div>
								<div class="font-semibold">Julie Pitt</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>
