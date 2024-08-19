<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-base font-semibold text-gray-900">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
			{$page?.error?.message ?? 'Unknown Error'}
		</h1>
		<p class="mt-6 text-base leading-7 text-gray-600">
			Something went wrong. Please use the links below to return home or view our services.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a href="/" class="btn variant-filled-primary">Return home</a>
			<a href="/services" class="btn variant-ringed-primary"
				>View services <span aria-hidden="true">→</span></a
			>
		</div>
	</div>
</div>
