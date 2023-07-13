<script>
	import GoogleMap from './GoogleMap.svelte';
</script>

<div id="service-area" class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-primary-600">Service Area</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Based in Puyallup, WA we proudly serve the South Puget Sound and parts of King County.
			</p>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
				<GoogleMap />
			</div>
		</div>
	</div>
</div>
