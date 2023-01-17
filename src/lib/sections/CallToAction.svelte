<!-- CTA Section -->
<script lang="ts">
	import { COMPANY } from '$lib/constants';
</script>

<div>
	<div
		class="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between"
	>
		<h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			<span class="block">Ready to get started?</span>
			<span
				class="-mb-1 pb-1 block bg-gradient-to-r from-primary-500 to-primary-500 bg-clip-text text-transparent"
				>Let's talk!</span
			>
		</h2>
		<div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
			<a href="/contact-us" class="btn btn-filled-primary">
				<svg
					class="h-6 w- mr-2"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
					<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg
				>
				Contact
			</a>
			<a href={COMPANY.contact.phone.href} class="btn btn-filled-tertiary">
				<svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>

				Call
			</a>
		</div>
	</div>
</div>
