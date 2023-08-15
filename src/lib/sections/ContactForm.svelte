<!-- ContactForm.svelte -->
<script lang="ts">
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { First_Name, Last_Name } from '$lib/stores';

	// Placeholder data
	const crew = [
		{ first: 'Malcom', last: 'Reynolds', email: 'browncoat@gmail.com' },
		{ first: 'Zoe', last: 'Washburne', email: 'slinkydress@gmail.com' },
		{ first: 'River', last: 'Tam', email: 'nopowerintheverse@gmail.com' },
		{ first: 'Simon', last: 'Tam', email: 'traumadoc@gmail.com' },
		{ first: 'Kaylee', last: 'Frye', email: 'naturaltalent@gmail.com' },
		{ first: 'Inara', last: 'Sera', email: 'lonelycompanion@gmail.com' },
		{ first: 'Hoban', last: 'Washburne', email: 'aleafonthewind@gmail.com' },
		{ first: 'Jayne', last: 'Cobb', email: 'vera@gmail.com' }
	];

	// Select placeholder data
	let crewChoice = 0;
	const getRandomInt = (max: number) => {
		return Math.floor(Math.random() * max);
	};

	// To track form submit status
	let pending = false;

	interface FormSchema {
		first: string;
		last: string;
		email: string;
		phone: string;
		location: string;
	}

	// Create Felte form
	const { form, errors } = createForm({
		validate: (values: FormSchema) => {
			const errors: FormSchema = {};
			if (!values.first) {
				errors.first = 'Must not be empty';
			}
			if (!values.last) {
				errors.last = 'Must not be empty';
			}
			if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
				errors.email = 'Must be a valid email';
			}
			if (
				!values.phone ||
				!/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/gm.test(values.phone)
			) {
				errors.phone = 'Must be a valid phone number';
			}
			if (!values.location) {
				errors.location = 'Must not be empty';
			}
			if (!/^[a-zA-Z\s]*$/.test(values.location)) {
				errors.location = 'Only letters allowed';
			}
			return errors;
		},
		onSubmit: async (values) => {
			pending = true;
			const response = await fetch('/api/contact-us', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
			pending = false;

			if (!response.ok) {
				goto('/error');
			}

			goto('/success');
		},

		extend: reporter
	});

	// Fill in placeholder data on mount
	onMount(() => {
		crewChoice = getRandomInt(crew.length);
	});
</script>

<form use:form action="/api/contact-us" method="POST" class="space-y-8 divide-y">
	<div class="space-y-8 divide-y">
		<div class="pt-8">
			<div>
				<h3>Contact Information</h3>
				<p class="mt-1">How would you like us to follow up with you?</p>
			</div>
			<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first" class="block text-sm"> First name </label>
					<div class="mt-1">
						<input
							bind:value={$First_Name}
							type="text"
							name="first"
							id="first"
							autocomplete="given-name"
							placeholder={crew[crewChoice].first}
							class="block w-full"
						/>
						<ValidationMessage for="first" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last" class="block text-sm"> Last name </label>
					<div class="mt-1">
						<input
							bind:value={$Last_Name}
							type="text"
							name="last"
							id="last"
							autocomplete="family-name"
							placeholder={crew[crewChoice].last}
							class="block w-full"
						/>
						<ValidationMessage for="last" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="email" class="block text-sm"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							placeholder={crew[crewChoice].email}
							class="block w-full"
						/>
						<ValidationMessage for="email" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="phone" class="block text-sm"> Phone </label>
					<div class="mt-1">
						<input
							type="text"
							name="phone"
							id="phone"
							autocomplete="tel"
							placeholder="253-123-4567"
							class="block w-full"
						/>
						<ValidationMessage for="phone" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3 hidden">
					<label for="password" class="block text-sm"> Password </label>
					<div class="mt-1">
						<input
							type="text"
							name="password"
							id="password"
							autocomplete="password"
							class="block w-full"
						/>
					</div>
				</div>
			</div>
			<div class="pt-8">
				<div>
					<h3>Job Information</h3>
					<p class="mt-1">Where is the job site and what do you need done?</p>
				</div>
				<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div class="sm:col-span-3">
						<label for="location" class="block text-sm"> Job Location </label>
						<div class="mt-1">
							<input
								type="text"
								name="location"
								id="location"
								placeholder="Puyallup"
								class="block w-full"
							/>
							<ValidationMessage for="location" let:messages={message}>
								<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
							</ValidationMessage>
						</div>
					</div>

					<div class="sm:col-span-3">
						<label for="location" class="block text-sm">Service</label>
						<select id="service" name="service" class="mt-1 block w-full">
							<option selected>Site Preparation</option>
							<option>Drainage</option>
							<option>Utility Extension</option>
							<option>Stack Stone Wall</option>
							<option>Other</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="pt-5">
		<div class="flex justify-end">
			<button
				type="submit"
				class="btn variant-filled-primary min-w-[150px] plausible-event-name=Contact+Form+Submission"
			>
				{#if pending}
					<span class="sr-only">Loading...</span>
					<span
						><svg
							aria-hidden="true"
							class="mr-2 w-6 h-6 text-white animate-spin dark:text-gray-600 fill-actionorange-200"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg></span
					>
				{:else}
					<span
						><svg
							class="h-6 w-6 mr-2"
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
						></span
					><span>Send</span>
				{/if}
			</button>
		</div>
	</div>
</form>
