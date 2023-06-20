<!-- footer.svelte -->
<script lang="ts">
	import { COMPANY, LINKS } from '$lib/constants';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
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
			<div class="px-5 py-2">
				<a href="/financing" class="unstyled text-on-primary-token capitalize">financing</a>
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
			class="hidden unstyled text-on-primary-token mt-8 flex mx-auto items-center justify-center text-center"
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
		<a href="https://www.fireflysoftware.dev" class="unstyled text-on-primary-token">
			<p class="mt-8 text-center">
				Design by <span class="text-blue-400 hover:text-blue-300">Firefly Software</span>
			</p>
		</a>
	</div>
</footer>
