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
					background: 'variant-filled-success'
				});

				return;
			}
			// Fail
			console.log(response);
			toastStore.trigger({
				message: 'Error. Please try again later.',
				background: 'variant-filled-error'
			});
		} catch (error) {
			console.log(error);
			toastStore.trigger({
				message: 'Error. Please try again later.',
				background: 'variant-filled-error'
			});
		} finally {
			modalStore.close();
		}
	}
</script>

<div
	class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
>
	<div>
		<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
			<svg
				class="h-6 w-6 text-green-600"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
				<line x1="9" y1="9" x2="9.01" y2="9" /> <line x1="15" y1="9" x2="15.01" y2="9" />
				<path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
			</svg>
		</div>
		<div class="mt-3 text-center sm:mt-5">
			<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Save $150</h3>
			<div class="mt-2">
				<p class="text-sm text-gray-500">Join our mailing list and save on your next project!</p>
			</div>
		</div>
	</div>
	<form method="POST" action="/?/sendVerification" class="modal-form {cForm}" use:enhance>
		<div>
			<label for="first_name" class="label">First name</label>
			<div class="mt-1">
				<input
					type="text"
					placeholder="Malcom"
					bind:value={formData.first_name}
					name="first_name"
					id="first_name"
					autocomplete="given-name"
					required
					class="input"
				/>
				{#if errors && errors.length > 0}
					<ErrorHandler name={'first_name'} error={errors} />
				{/if}
			</div>
		</div>
		<div>
			<label for="last_name" class="label">Last name</label>
			<div class="mt-1">
				<input
					type="text"
					placeholder="Reynolds"
					bind:value={formData.last_name}
					name="last_name"
					id="last_name"
					autocomplete="family-name"
					required
					class="input"
				/>
				{#if errors && errors.length > 0}
					<ErrorHandler name={'last_name'} error={errors} />
				{/if}
			</div>
		</div>
		<div>
			<label for="email" class="label"> What is your email? </label>
			<div class="mt-1">
				<input
					id="email"
					placeholder="brown@coat.com"
					bind:value={formData.email}
					name="email"
					type="email"
					autocomplete="email"
					required
					class="input"
				/>
				{#if errors && errors.length > 0}
					<ErrorHandler name={'email'} error={errors} />
				{/if}
			</div>
		</div>
	</form>
	<div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
		<button
			type="button"
			on:click={onFormSubmit}
			class="inline-flex w-full btn variant-filled-primary sm:col-start-2">Submit</button
		>
		<button
			type="button"
			on:click={parent.onClose}
			class="mt-3 inline-flex w-full btn variant-ringed-primary sm:col-start-1 sm:mt-0"
			>Cancel</button
		>
	</div>
</div>
