<!-- Hero.svelte -->
<script lang="ts">
	import { COMPANY } from '$lib/constants';
</script>

<div class="relative">
	<div class="absolute inset-x-0 bottom-0 h-1/2" />
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
			<div class="absolute inset-0">
				<video
					autoplay
					loop
					muted
					poster="/image/poster.webp"
					width="2235.73"
					height="1257.6"
					class="h-full w-full object-cover"
				>
					<source src="video/excavator_720p.mp4" type="video/mp4" />
					Your browser does not support the video tag.
					<track kind="captions" />
				</video>
			</div>
			<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
				<img
					src={COMPANY.logo.img.src}
					class="w-60 lg:w-80 mx-auto"
					alt={COMPANY.logo.img.alt}
					height={COMPANY.logo.img.height}
					width={COMPANY.logo.img.width}
				/>
				<h1 class="mt-6 max-w-lg mx-auto text-center text-xl lg:text-2xl sm:max-w-3xl text-white">
					Professional drainage solutions, excavation and site preparation services. Based in
					Puyallup and proudly serving the Puget Sound & King County.
				</h1>
				<div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
					<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
						<a href="/contact-us" class="flex btn btn-filled-primary btn-base">
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
								<path
									d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
								/></svg
							>
							Contact
						</a>
						<a href={COMPANY.contact.phone.href} class="flex btn btn-filled-tertiary"
							><svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
		</div>
	</div>
</div>
