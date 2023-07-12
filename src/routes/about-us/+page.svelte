<!-- about-us.svelte -->
<script lang="ts">
	import frank_and_bev from '$lib/assets/images/BandF.webp?run';
	import Img from '@zerodevx/svelte-img';
	import Seo from '$lib/components/Seo.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';

	const seoData = {
		title: 'About Us | FtS Excavation',
		description:
			'As a child Frank dreamed about operating excavators and bulldozers. Before he was out of high school he had signed up with the Marines on one condition - that they train him to operate heavy machinery. Frank has over 25 years of experience with heavy equipment operation and has done everything on all sorts of large and small machines, from commercial work to road work, septic systems, housing developments – you name it!',
		url: 'https://www.fts-excavation.com/about-us',
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
	<article id="about-us" class="bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Since you are curious, here is a little bit of our story.
			</p>
		</div>
		<figure class="mt-16 mx-auto max-w-2xl">
			<Img
				class="aspect-square rounded-xl bg-gray-50 object-cover"
				src={frank_and_bev}
				alt="Frank and Beverly, owners of FtS Excavation"
			/>
			<figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
				<svg
					class="mt-0.5 h-5 w-5 flex-none text-gray-300"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
						clip-rule="evenodd"
					/>
				</svg>
				Frank & Beverly, FtS Excavation
			</figcaption>
		</figure>
		<div class="prose prose-slate mx-auto mt-10 text-base leading-7 text-gray-700">
			<p class="mt-6 !text-xl leading-8">
				As a child Frank dreamed about operating excavators and bulldozers. Before he was out of
				high school he had signed up with the Marines on one condition - that they train him to
				operate heavy machinery. Frank has over 25 years of experience with heavy equipment
				operation and has done everything on all sorts of large and small machines, from commercial
				work to road work, septic systems, housing developments – you name it!
			</p>
			<div class="mt-10">
				<p>
					If it involves dirt - FTS Excavation is the expert. We hire talented, experienced
					operators and pride ourselves in excellent workmanship.
				</p>

				<p class="mt-8">
					A few of the services we offer are driveway repair, land clearing foundations, leveling,
					road work, land clearing services, dirt removal, excavation services, lot clearing, dump
					truck services, dirt removal service, site preparation, excavation and grading, retaining
					wall services, driveway removal, commercial excavation, utility installation, and
					underground holding tanks.
				</p>

				<p class="mt-8">
					It's so important to start your project with an expert like FTS Excavation company to
					prevent issues from arising such as settling and standing water that can affect the
					soundness of the structure you're afterwards.
				</p>
				<p class="mt-8">
					Thank you for considering us for your project and passing along our name.
				</p>
				<p class="mt-10">
					FtS Excavation, <br /> License # FTSECAL795DB
				</p>
			</div>
		</div>
	</article>
	<div class="mx-auto max-w-4xl">
		<CallToAction />
	</div>
</div>
