<script lang="ts">
	import FadeIn from '../../components/FadeIn.svelte';
	console.log('loaded');
</script>

<div id="services" class="bg-gradient-to-br from-primary-500 to-primary-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<FadeIn>
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-white">Our Services</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
					Precision + Integrity. We pride ourselves on the excellence of our work.
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Many people ask us what type of projects we specialize in here at FtS-Excavation. We
					separate our services into 3 different categories:
				</p>
			</div>
		</FadeIn>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
				<FadeIn i={1 * 150}>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-200">
							<svg
								class="h-6 w-6 flex-none text-secondary-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							Site preparation
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
							<p class="flex-auto">
								We clear, grade, and prepare sites for construction projects with precision and
								efficiency. From land clearing to drainage solutions, trust us for reliable and
								comprehensive site preparation.
							</p>
							<p class="mt-6">
								<a
									href="/site-preparation"
									class="unstyled text-sm font-semibold leading-6 text-secondary-500"
									>Learn more <span aria-hidden="true">→</span></a
								>
							</p>
						</dd>
					</div>
				</FadeIn>
				<FadeIn i={2 * 150}>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-200">
							<svg
								class="h-6 w-6 flex-none text-secondary-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
							Hardscape
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
							<p class="flex-auto">
								Transform your outdoor space into a captivating oasis with our exceptional hardscape
								services. Our skilled team combines artistry and functionality to craft stunning
								landscapes that leave a lasting impression on anyone who sets foot in it.
							</p>
							<p class="mt-6">
								<a
									href="/hardscape"
									class="unstyled text-sm font-semibold leading-6 text-secondary-500"
									>Learn more <span aria-hidden="true">→</span></a
								>
							</p>
						</dd>
					</div></FadeIn
				>
				<FadeIn i={3 * 150}>
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-200">
							<svg
								class="h-6 w-6 flex-none text-secondary-500"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
								<path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
							</svg>
							Drainage
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
							<p class="flex-auto">
								Protect your property with our top-notch drainage services. Our team of experts
								designs and implements tailored drainage solutions that effectively channel water
								away, preventing costly damage and ensuring a dry and stable environment.
							</p>
							<p class="mt-6">
								<a
									href="/drainage"
									class="unstyled text-sm font-semibold leading-6 text-secondary-500"
									>Learn more <span aria-hidden="true">→</span></a
								>
							</p>
						</dd>
					</div></FadeIn
				>
			</dl>
		</div>
	</div>
</div>
