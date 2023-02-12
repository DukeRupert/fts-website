<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="min-h-screen py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
	<div class="mx-auto max-w-max">
		<main class="sm:flex flex-col">
			{#if data?.success}
				<div class="sm:ml-6">
					<div class="sm:border-l sm:pl-6">
						<h1 class="text-base font-semibold text-primary-500 tracking-wide uppercase">
							Success
						</h1>
						<h2 class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
							Email verified
						</h2>
						<p class="max-w-xl mt-4 text-xl">An email with your promo code has been sent.</p>
					</div>
				</div>
			{:else}
				<div class="sm:ml-6">
					<div class="sm:border-l sm:pl-6">
						<h1 class="text-base font-semibold text-primary-500 tracking-wide uppercase">Error</h1>
						<h2 class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
							{data?.message || 'Supplied token is invalid.'}
						</h2>
						<p class="max-w-xl mt-4 text-xl">
							Please contact our customer service <a href="mailto:service@fts-excavation.com"
								>here</a
							> if you have any further questions.
						</p>
					</div>
				</div>
			{/if}
			<div class="mx-auto mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
				<a href="/" class="btn variant-filled-primary">Return Home</a>
			</div>
		</main>
	</div>
</div>
