<!-- footer.svelte -->
<script lang="ts">
	import { COMPANY, LINKS } from '$lib/constants';
	import SocialMedia from '$lib/components/SocialMedia.svelte';

	interface Affiliate {
		name: string;
		href: string;
		img: {
			src: string;
			alt: string;
		};
	}
	const affiliations: Affiliate[] = [
		{
			name: 'Puyallup / Sumner Chamber of Commerce',
			href: 'https://www.puyallupsumnerchamber.com/',
			img: {
				src: '/image/PSChamberLogo_2016_Square.webp',
				alt: 'Puyallup / Sumner Chamber of Commerce logo'
			}
		},
		{
			name: 'Generous Network',
			href: 'https://countercultureleaders.com/generous-network',
			img: {
				src: '/image/GenerousNetwork.png',
				alt: 'Generous Network logo'
			}
		},
		{
			name: 'Tacoma/Pierce County Association of REALTORS',
			href: 'https://www.tpcar.org/',
			img: {
				src: '/image/TPCAR_affiliate_logo_2023_01.png',
				alt: 'Tacoma/Pierce County Association of REALTORS logo'
			}
		}
	];

	// const links = [
	// 	{
	// 		label: 'Services',
	// 		href: '/services',
	// 		svg: wrench,
	// 		subitems: [{ title: 'Drainage', href: '/services/drainage' }]
	// 	},
	// 	{
	// 		label: 'Projects',
	// 		href: '/projects',
	// 		svg: star,
	// 		subitems: []
	// 	},
	// 	{ label: 'About', href: '/about-us', svg: heart, subitems: [] },
	// 	{
	// 		label: 'Contact',
	// 		href: '/contact-us',
	// 		svg: mail,
	// 		subitems: []
	// 	},
	// 	{
	// 		label: 'Jobs',
	// 		href: '/jobs',
	// 		svg: job,
	// 		subitems: []
	// 	}
	// ];
</script>

<footer>
	<div
		class="bg-gradient-to-r from-primary-500 to-primary-700 max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
	>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			<div class="px-5 py-2">
				<a href="/services" class="unstyled text-on-primary-token capitalize">services</a>
			</div>
			<div class="px-5 py-2">
				<a href="/projects" class="unstyled text-on-primary-token capitalize">projects</a>
			</div>
			<div class="px-5 py-2">
				<a href="/contact-us" class="unstyled text-on-primary-token capitalize">contact us</a>
			</div>
			<div class="px-5 py-2">
				<a href="/jobs" class="unstyled text-on-primary-token capitalize">jobs</a>
			</div>
			<div class="px-5 py-2">
				<a href="/about-us" class="unstyled text-on-primary-token capitalize">about us</a>
			</div>
		</nav>
		<div class="mt-8 flex justify-center space-x-6">
			<SocialMedia
				size={{ height: 6, width: 6 }}
				color="text-on-primary-token"
				hover="hover:text-gray-600"
			/>
		</div>
		<a
			href="https://www.google.com/maps/place/FtS-Excavation,+LLC/@47.1761259,-122.2630845,10z/data=!4m5!3m4!1s0x0:0xb896498a4891ace9!8m2!3d47.1761259!4d-122.2630845"
			class="unstyled text-on-primary-token mt-8 flex mx-auto items-center justify-center text-center"
			><svg
				class="mr-2 h-6 w-6"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" /> <polyline points="5 12 3 12 12 3 21 12 19 12" />
				<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg
			>12714 151st St E Puyallup, WA 98374</a
		>
		<a
			href={COMPANY.contact.phone.href}
			class="unstyled text-on-primary-token mt-8 flex mx-auto items-center justify-center text-center"
		>
			<svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>

			{COMPANY.contact.phone.string}
		</a>
		<p class="mt-8 text-center text-base text-on-primary-token">
			&copy; 2021 FTS Excavation, LLC. All rights reserved.
		</p>
		<a href="https://www.firefly.llc" class="unstyled text-on-primary-token">
			<p class="mt-8 text-center">
				Design by <span class="text-blue-400 hover:text-blue-300">Firefly Software</span>
			</p>
		</a>
	</div>
	<div class="bg-white dark:bg-gray-900 mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
		<p class="text-center text-lg font-semibold text-gray-600">A proud member of</p>
		<div class="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3 lg:mt-8">
			{#each affiliations as { name, href, img }}
				<div class="col-span-1 flex justify-center bg-white-50 py-8 px-8">
					<a {href}> <img class="max-h-28" src={img.src} alt={img.alt} /></a>
				</div>
			{/each}
		</div>
	</div>
</footer>
