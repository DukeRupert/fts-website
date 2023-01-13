<!-- AlternatingFeatures.svelte -->
<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	// Intersection oberver variables
	const threshold = 0.2;
	let elementOne: HTMLElement;
	let intersectingOne: boolean;
	let elementTwo: HTMLElement;
	let intersectingTwo: boolean;

	// Reactive assignments for transitions
	$: show1 = intersectingOne;
	$: show2 = intersectingTwo;
</script>

<div class="relative pt-16 pb-32 overflow-hidden">
	<div aria-hidden="true" class="absolute inset-x-0 top-0 h-48" />
	<div class="relative prose">
		<IntersectionObserver once element={elementOne} bind:intersecting={intersectingOne} {threshold}>
			<div
				bind:this={elementTwo}
				class="transition-all transform duration-500 delay-150 ease-quart-out {show1
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12'} lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
			>
				<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
					<div bind:this={elementOne}>
						<div>
							<span
								class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-700"
							>
								<!-- Icon: Ruler/Pencil -->
								<svg
									class="h-6 w-6 text-cream-500"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
									<line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
									<polyline points="12 8 7 3 3 7 8 12" /> <line x1="7" y1="8" x2="5.5" y2="9.5" />
									<polyline points="16 12 21 17 17 21 12 16" />
									<line x1="16" y1="17" x2="14.5" y2="18.5" /></svg
								>
							</span>
						</div>
						<div class="mt-6">
							<h2>Puyallup's drainage experts</h2>
							<p class="mt-4">
								We specialize in drainage solutions which solve the excess surface water problems
								common in the Puget Sound region. We also offer residential and commercial
								excavating services including site preparation, leveling, road work, land clearing
								and utility installation.
							</p>
							<div class="mt-6">
								<a
									href="/services/drainage"
									class="inline-flex btn btn-ringed-primary no-underline"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
					<div class="mt-8 border-t pt-6">
						<blockquote>
							<div>
								<p>
									We had a great experience in working with Frank. He never cut any corners but was
									always mindful of costs so as not to exceed our budget.
								</p>
							</div>
							<footer class="mt-3">
								<div class="flex items-center space-x-3">
									<div>Demetrius S. - Bonney Lake, WA</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0">
					<div
						class="pl-4 -mr-16 sm:pl-6 sm:flex sm:justify-center lg:px-0 lg:m-0 lg:relative lg:h-full"
					>
						<img
							class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="/image/P06_900.webp"
							alt="Site preparation by clearing brush using a New Holland compact track loader."
							height="600"
							width="900"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</div>
	<div class="mt-24">
		<IntersectionObserver once element={elementTwo} bind:intersecting={intersectingTwo} {threshold}>
			<div
				bind:this={elementTwo}
				class="transition-all transform duration-500 delay-150 ease-quart-out {show2
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12'} lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
			>
				<div
					class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
				>
					<div>
						<div>
							<span
								class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-700"
							>
								<!-- Heroicon name: outline/sparkles -->
								<svg
									class="h-6 w-6 text-cream-500"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="12" r="10" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" />
									<line x1="9" y1="9" x2="9.01" y2="9" />
									<line x1="15" y1="9" x2="15.01" y2="9" /></svg
								>
							</span>
						</div>

						<div class="mt-6">
							<h2>Precision + Integrity</h2>
							<p>
								We pride ourselves on the excellence of our work. Whether its land clearing or
								building a retaining wall we ensure every job is completed with precision. Check out
								some of our past excavaction projects to see what we mean.
							</p>
							<div class="mt-6">
								<a href="/contact-us" class="inline-flex btn btn-ringed-primary"> Contact Us </a>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
					<div
						class="pr-4 -ml-16 sm:pr-6 sm:flex sm:justify-center lg:px-0 lg:m-0 lg:relative lg:h-full"
					>
						<img
							class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
							src="/image/P53_900.webp"
							alt="Excavation and leveling using a compact excavator on a residential property"
							height="600"
							width="900"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</div>
</div>
