<script>
	import GoogleMap from '$lib/components/GoogleMap.svelte';
</script>

<div class="bg-white">
	<div
		class="max-w-4xl min-h-fit mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between"
	>
		<div class="w-full h-full">
			<h2 class="text-3xl text-center font-extrabold text-gray-900 tracking-tight">Service Area</h2>
			<p class="mt-4 mb-12 text-center text-lg text-gray-500">
				We are proud to serve the South Puget Sound and parts of King County.
			</p>
			<div class="">
				<GoogleMap />
			</div>
		</div>
	</div>
</div>
