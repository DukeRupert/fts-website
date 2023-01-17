<!-- about-us.svelte -->
<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
</script>

<SvelteSeo
	title="About Us"
	description="Since you are curious. Here is a little bit of our story."
	keywords="excavation construction services contractor puget sound puyallup drainage grading"
	openGraph={{
		title: 'About Us',
		description: 'Since you are curious. Here is a little bit of our story.',
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: `${$page.url.host}/image/BandF.webp`,
				width: 479,
				height: 479,
				alt: 'FtS Excavation excavator in front of Mount Rainier'
			}
		]
	}}
/>

<div class="relative">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-base font-semibold text-primary-500 tracking-wide uppercase">About Us</h1>
			<h2 class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
				Since you are curious
			</h2>
			<p class="max-w-xl mt-4 mx-auto text-xl">Here is a little bit of our story.</p>
		</div>
		<img
			src="/image/BandF.webp"
			alt="Frank and Beverly Sharp"
			class="max-w-md w-full rounded-md mx-auto mt-8 lg:mt-12"
			height="610"
			width="610"
		/>
		<article
			class="prose prose-slate max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
		>
			<h3>
				As a child Frank dreamed about operating excavators and bulldozers. Before he was out of
				high school he had signed up with the Marines on one condition - that they train him to
				operate heavy machinery. Frank has over 25 years of experience with heavy equipment
				operation and has done everything on all sorts of large and small machines, from commercial
				work to road work, septic systems, housing developments – you name it!
			</h3>
			<p>
				If it involves dirt - FTS Excavation is the expert. We hire talented, experienced operators
				and pride ourselves in excellent workmanship.
			</p>
			<p>
				A few of the services we offer are driveway repair, land clearing foundations, leveling,
				road work, land clearing services, dirt removal, excavation services, lot clearing, dump
				truck services, dirt removal service, site preparation, excavation and grading, retaining
				wall services, driveway removal, commercial excavation, utility installation, and
				underground holding tanks.
			</p>
			<p>
				It's so important to start your project with an expert like FTS Excavation company to
				prevent issues from arising such as settling and standing water that can affect the
				soundness of the structure you're afterwards.
			</p>
			<p>Thank you for considering us for your project and passing along our name.</p>
			<p>FtS Excavation,<br /> License # FTSECAL795DB</p>
		</article>
	</div>
</div>
