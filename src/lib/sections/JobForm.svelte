<script lang="ts">
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// To track form submit status
	let pending = false;

	const { form, errors, data, addField } = createForm({
		initialValues: {
			jobs: [{ title: '', years: 0, months: 0 }]
		},
		validate: (values) => {
			const errors = {};
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
			return errors;
		},
		onSubmit: async (values) => {
			pending = true;
			const response = await fetch('/api/applicant', {
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

	$: jobs = $data.jobs;

	function addJob(index: number) {
		return () => {
			addField('jobs', { title: '', years: 0, months: 0 }, index);
		};
	}

	// Job counter
	let count = 0;
	const maxCount = 5;

	// Placeholder Data
	let crewChoice = 0;
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
	const getRandomInt = (max: number): number => {
		return Math.floor(Math.random() * max);
	};

	onMount(() => {
		crewChoice = getRandomInt(crew.length);
	});
</script>

<form use:form action="/api/applicant" method="POST" class="space-y-8 divide-y divide-gray-200">
	<div class="space-y-8 divide-y divide-gray-200">
		<div class="pt-8">
			<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first" class="block text-sm"> First name </label>
					<div class="mt-1">
						<input
							type="text"
							name="first"
							id="first"
							autocomplete="given-name"
							placeholder={crew[crewChoice].first}
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="first" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last" class="block text-sm font-medium text-gray-700"> Last name </label>
					<div class="mt-1">
						<input
							type="text"
							name="last"
							id="last"
							autocomplete="family-name"
							placeholder={crew[crewChoice].last}
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="last" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>
				<div class="hidden">
					<label for="password" class="block text-sm font-medium text-gray-900">Password</label>
					<div class="mt-1">
						<input
							type="text"
							id="password"
							name="password"
							class="block py-3 px-4 w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
						/>
					</div>
				</div>
				<div class="sm:col-span-3">
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							placeholder={crew[crewChoice].email}
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="email" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="tel" class="block text-sm font-medium text-gray-700"> Phone </label>

					<div class="mt-1">
						<input
							type="text"
							name="phone"
							id="phone"
							autocomplete="phone"
							class="shadow-sm focus:ring-custard-500 focus:border-custard-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="phone" let:messages>
							<span class="text-red-500 text-sm ml-4">{messages || ''}</span>
						</ValidationMessage>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-6">
			<fieldset>
				<!-- <legend class="text-base font-medium text-gray-900"> By Email </legend> -->
				<div class="mt-4 space-y-4">
					<div class="relative flex items-start">
						<div class="flex items-center h-5">
							<input
								type="checkbox"
								name="legal"
								value="Yes"
								class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
							/>
						</div>
						<div class="ml-3 text-sm">
							<label for="legal" class="font-medium text-gray-700"
								>Are you legally eligible to work in the US?</label
							>
						</div>
					</div>
					<div class="relative flex items-start">
						<div class="flex items-center h-5">
							<input
								type="checkbox"
								name="veteran"
								value="Yes"
								class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
							/>
						</div>
						<div class="ml-3 text-sm">
							<label for="veteran" class="font-medium text-gray-700">Are you a veteran?</label>
						</div>
					</div>
					<div class="relative flex items-start">
						<div class="flex items-center h-5">
							<input
								type="checkbox"
								name="backgroundCheck"
								value="Yes"
								class="focus:ring-custard-500 h-4 w-4 text-custard-600 border-gray-300 rounded"
							/>
						</div>
						<div class="ml-3 text-sm">
							<label for="backgroundCheck" class="font-medium text-gray-700"
								>Are you willing to submit to a background check?</label
							>
						</div>
					</div>
				</div>
			</fieldset>
			<fieldset class="mt-6">
				<div>
					<legend class="text-base font-medium text-gray-900"> Start Date </legend>
					<p class="text-sm text-gray-500">What date would you be available to start?</p>
				</div>
				<div class="mt-4 space-y-4">
					<div class="relative flex items-start">
						<div class="flex items-center h-5">
							<input type="date" name="startDate" class="border-gray-300 rounded" required />
						</div>
						<div class="ml-3 text-sm" />
					</div>
				</div>
			</fieldset>
			<fieldset class="mt-6">
				<div>
					<legend class="text-base font-medium text-gray-900"> Employment Type </legend>
					<p class="text-sm text-gray-500">What kind of job are you looking for?</p>
				</div>
				<div class="mt-4 space-y-4">
					<div class="flex items-center">
						<input
							id="full-time"
							class="focus:ring-custard-500 text-custard-500"
							type="radio"
							name="employmentType"
							value="full-time"
						/>
						<label for="full-time" class="ml-3 block text-sm font-medium text-gray-700">
							Full-Time
						</label>
					</div>
					<div class="flex items-center">
						<input
							id="part-time"
							class="focus:ring-custard-500 text-custard-500"
							type="radio"
							name="employmentType"
							value="part-time"
						/>
						<label for="part-time" class="ml-3 block text-sm font-medium text-gray-700">
							Part-time
						</label>
					</div>
				</div>
			</fieldset>
		</div>
		<div class="mt-6">
			<fieldset class="mt-6">
				<div>
					<legend class="text-base font-medium text-gray-900"> Work History </legend>
					<p class="text-sm text-gray-500">
						Please provide the last 5 years of your work experience.
					</p>
				</div>
				{#each jobs as job, index}
					<div class="mt-4 space-y-4">
						<div class="relative flex items-start">
							<div>
								<label for="jobs.{index}.title" class="block text-sm font-medium text-gray-900"
									>Job Title</label
								>
								<div class="mt-1">
									<input
										type="text"
										name="jobs.{index}.title"
										class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div class="mx-4">
								<label for="jobs.{index}.years" class="block text-sm font-medium text-gray-900"
									>How Long?</label
								>
								<div class="mt-1 flex">
									<input
										type="number"
										placeholder="years"
										name="jobs.{index}.years"
										class="py-3 px-2 flex-initial w-24 shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									/>

									<input
										type="number"
										placeholder="months"
										name="jobs.{index}.months"
										class="py-3 px-2 ml-4 flex-inital w-24 shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									/>
								</div>
							</div>
						</div>
					</div>
					{#if index === jobs.length - 1}
						<div class="mt-2 space-y-4">
							<div>
								<button
									on:click|preventDefault={addJob(count + 1)}
									class="mt-2 px-4 py-3 shadow-sm text-gray-900 border border-gray-300 rounded-md {count >
									4
										? 'hidden'
										: 'visible'}">+</button
								>
							</div>
						</div>
					{/if}
				{/each}
			</fieldset>
		</div>
	</div>

	<div class="pt-5">
		<div class="flex justify-end">
			<button type="submit" class="btn variant-filled-secondary min-w-[150px]">
				{#if pending}
					<span class="sr-only">Loading...</span>
					<svg
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
					</svg>
				{:else}
					<svg
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
						<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg
					>Send
				{/if}
			</button>
		</div>
	</div>
</form>
