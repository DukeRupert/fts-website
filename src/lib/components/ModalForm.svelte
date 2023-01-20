<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import { z } from 'zod';
	import ErrorHandler from '$lib/components/ErrorHandler.svelte';
	import type { LeadData } from '$lib/types/forms';
	import { enhance } from '$app/forms';
	import { toastStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Form Data
	const formData: LeadData = {
		first_name: '',
		last_name: '',
		email: ''
	};

	// Base Classes
	const cBase = 'space-y-4';
	const cForm = 'py-8 px-4 sm:px-10 space-y-4 rounded-container-token';

	// Form Data validation
	const FormData = z.object({
		first_name: z.string().min(1).max(20, { message: 'Must be less than 21 characters' }),
		last_name: z.string().min(1).max(20, { message: 'Must be less than 21 characters' }),
		email: z.string().email()
	});

	let errors: z.ZodIssue[];

	async function onFormSubmit(): Promise<void> {
		// Parse and verify data
		const valid = FormData.safeParse(formData);
		if (!valid.success) {
			errors = valid?.error?.issues;
			return;
		}
		// Generate token and send email
		const { data } = valid;
		try {
			const response = await fetch('/api/send-verification', {
				method: 'POST',
				body: JSON.stringify(data)
			});
			// Success
			if (response.ok) {
				toastStore.trigger({
					message: 'Success! Check your email.',
					preset: 'success'
				});

				return;
			}
			// Fail
			console.log(response);
			toastStore.trigger({
				message: 'Error. Please try again later.',
				preset: 'error'
			});
		} catch (error) {
			console.log(error);
			toastStore.trigger({
				message: 'Error. Please try again later.',
				preset: 'error'
			});
		} finally {
			modalStore.close();
		}
	}
</script>

<div class={cBase}>
	<h2 class="mt-6 text-bold text-4xl text-center">
		<span class="text-success-500">Save $150</span>
	</h2>
	<p class="text-center">Join our mailing list and save on your next project!</p>
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form method="POST" action="/?/sendVerification" class="modal-form {cForm}" use:enhance>
		<div>
			<label for="first_name" class="block">First name</label>
			<div class="mt-1">
				<input
					type="text"
					placeholder="Malcom"
					bind:value={formData.first_name}
					name="first_name"
					id="first_name"
					autocomplete="given-name"
					required
					class="appearance-none block w-full px-3 py-2"
				/>
				{#if errors && errors.length > 0}
					<ErrorHandler name={'first_name'} error={errors} />
				{/if}
			</div>
		</div>
		<div>
			<label for="last_name" class="block">Last name</label>
			<div class="mt-1">
				<input
					type="text"
					placeholder="Reynolds"
					bind:value={formData.last_name}
					name="last_name"
					id="last_name"
					autocomplete="family-name"
					required
					class="appearance-none block w-full px-3 py-2"
				/>
				{#if errors && errors.length > 0}
					<ErrorHandler name={'last_name'} error={errors} />
				{/if}
			</div>
		</div>
		<div>
			<label for="email" class="block"> What is your email? </label>
			<div class="mt-1">
				<input
					id="email"
					placeholder="brown@coat.com"
					bind:value={formData.email}
					name="email"
					type="email"
					autocomplete="email"
					required
					class="appearance-none block w-full px-3 py-2"
				/>
				{#if errors && errors.length > 0}
					<ErrorHandler name={'email'} error={errors} />
				{/if}
			</div>
		</div>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
</div>
