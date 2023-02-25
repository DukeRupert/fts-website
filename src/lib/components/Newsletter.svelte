<script lang="ts">
	import type { LeadData } from '$lib/types/forms';
	import { toastStore, modalStore } from '@skeletonlabs/skeleton';

	// Form Data
	const formData: LeadData = {
		first_name: '',
		last_name: '',
		email: ''
	};

	async function onFormSubmit(): Promise<void> {
		// Generate token and send email
		try {
			const response = await fetch('/api/send-verification', {
				method: 'POST',
				body: JSON.stringify(formData)
			});
			// Success
			if (response.ok) {
				toastStore.trigger({
					message: 'Success! Check your email.',
					preset: 'variant-filled-success'
				});

				return;
			}
			// Fail
			console.log(response);
			toastStore.trigger({
				message: 'Error. Please try again later.',
				preset: 'variant-filled-error'
			});
		} catch (error) {
			console.log(error);
			toastStore.trigger({
				message: 'Error. Please try again later.',
				preset: 'variant-filled-error'
			});
		} finally {
			modalStore.close();
		}
	}
</script>

<div>
	<div class="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
		<div
			class="rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
		>
			<div class="xl:w-0 xl:flex-1">
				<h2 class="text-2xl font-bold tracking-tight text-on-primary-token sm:text-3xl">
					Want product news and updates?
				</h2>
				<p class="mt-3 max-w-3xl text-lg leading-6">
					<span class="text-on-primary-token">Sign up for our newsletter to stay up to date.</span>
				</p>
			</div>
			<div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
				<form class="sm:flex">
					<label for="email" class="sr-only">Email address</label>
					<input
						id="email"
						bind:value={formData.email}
						name="email"
						type="email"
						autocomplete="email"
						required
						class="w-full"
						placeholder="Enter your email"
					/>
					<input
						type="text"
						bind:value={formData.first_name}
						name="first_name"
						id="first_name"
						autocomplete="given-name"
						class="hidden"
					/>
					<input
						type="text"
						bind:value={formData.last_name}
						name="last_name"
						id="last_name"
						autocomplete="family-name"
						class="hidden"
					/>
					<button
						type="button"
						on:click={onFormSubmit}
						class="mt-3 w-full  sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 btn variant-filled-secondary"
						>Notify me</button
					>
				</form>
				<p class="mt-3 text-sm">
					<span class="text-on-primary-token"
						>We care about the protection of your data. Read our</span
					>
					<a href="/privacy-policy" class="unstyled no-underline"
						><span class="text-secondary-300">Privacy Policy.</span></a
					>
				</p>
			</div>
		</div>
	</div>
</div>
