<!-- contact-us.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import Seo from '$lib/components/Seo.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const toastStore = getToastStore();

	// To track form submit status
	let pending = false;

	// Client API:
	const { form, errors, enhance } = superForm(data.form, {
		onSubmit() {
			pending = true;
		},
		onResult({ result }) {
			console.log(result);
			if (result.type === 'success') {
				// Successful post! Do some more client-side stuff,
				// like showing a toast notification.
				toastStore.trigger({
					message: 'Success! We will contact you soon.',
					background: 'variant-filled-success'
				});
			}
			pending = false;
		},
		onError() {
			// Something went wrong! Try calling.
			toastStore.trigger({
				message: 'Something went wrong! Please give us a call.',
				background: 'variant-filled-error'
			});
		}
	});

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

	const getRandomInt = (max: number) => {
		return Math.floor(Math.random() * max);
	};

	// Select placeholder data
	let crewChoice = getRandomInt(crew.length);

	const seoData = {
		title: 'Jobs | FtS Excavation',
		description:
			"No commitment, just a conversation starter. Let's find out how we can use our excavation expertise to accomplish your project today.",
		url: 'https://www.fts-excavation.com/contact-us',
		og: {
			src: 'https://www.fts-excavation.com/image/seo/FtS-Excavation_1200.jpg',
			alt: 'FtS Excavation clearing land in the Puget Sound region.',
			mimeType: 'jpeg',
			width: 1200,
			height: 675
		}
	};
</script>

<Seo data={seoData} />

<div class="relative mt-28">
	<div class="bg-white py-24 sm:py-32">
		<div class="max-w-4xl mx-auto px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Contact Us
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					No commitment, just a conversation starter. Let's find out how we can use our excavation
					expertise to accomplish your project today.
				</p>
			</div>
			<div
				class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
			>
				<form use:enhance method="POST" class="space-y-8 divide-y">
					<div class="space-y-8 divide-y">
						<div class="pt-8">
							<div>
								<h3>Contact Information</h3>
								<p class="mt-1">How would you like us to follow up with you?</p>
							</div>
							<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div class="sm:col-span-3">
									<label for="first_name" class="block text-sm"> First name </label>
									<div class="mt-1">
										<input
											type="text"
											name="first_name"
											id="first_name"
											autocomplete="given-name"
											placeholder={crew[crewChoice].first}
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
											aria-invalid={$errors.first_name ? 'true' : undefined}
											bind:value={$form.first_name}
										/>
										{#if $errors.first_name}<span class="text-error-500">{$errors.first_name}</span
											>{/if}
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="last_name" class="block text-sm"> Last name </label>
									<div class="mt-1">
										<input
											bind:value={$form.last_name}
											type="text"
											name="last_name"
											id="last_name"
											autocomplete="family-name"
											placeholder={crew[crewChoice].last}
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
											aria-invalid={$errors.last_name ? 'true' : undefined}
										/>
										{#if $errors.last_name}<span class="text-error-500">{$errors.first_name}</span
											>{/if}
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
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
											bind:value={$form.email}
											aria-invalid={$errors.email ? 'true' : undefined}
										/>
										{#if $errors.email}<span class="text-error-500">{$errors.email}</span>{/if}
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
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
											bind:value={$form.phone}
											aria-invalid={$errors.phone ? 'true' : undefined}
										/>
									</div>
									{#if $errors.phone}<span class="text-error-500">{$errors.phone}</span>{/if}
								</div>

								<div class="sm:col-span-3 hidden">
									<label for="password" class="block text-sm"> Password </label>
									<div class="mt-1">
										<input
											type="text"
											name="password"
											id="password"
											autocomplete="password"
											bind:value={$form.password}
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
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
												class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
												bind:value={$form.location}
												aria-invalid={$errors.location ? 'true' : undefined}
											/>
											{#if $errors.location}<span class="text-error-500">{$errors.location}</span
												>{/if}
										</div>
									</div>

									<div class="sm:col-span-3">
										<label for="location" class="block text-sm">Service</label>
										<div class="mt-1">
											<select
												id="service"
												name="service"
												class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs sm:text-sm sm:leading-6"
											>
												<option selected>Site Preparation</option>
												<option>Drainage</option>
												<option>Utility Extension</option>
												<option>Stack Stone Wall</option>
												<option>Other</option>
											</select>
										</div>
									</div>

									<div class="col-span-full">
										<label
											for="description"
											class="block text-sm font-medium leading-6 text-gray-900">Description</label
										>
										<div class="mt-2">
											<textarea
												id="description"
												name="description"
												rows="3"
												class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
												bind:value={$form.description}
												aria-invalid={$errors.description ? 'true' : undefined}
											/>
										</div>
										<p class="mt-3 text-sm leading-6 text-gray-600">
											Please provide a brief description of the job.
										</p>
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
											<path stroke="none" d="M0 0h24v24H0z" />
											<line x1="10" y1="14" x2="21" y2="3" />
											<path
												d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
											/></svg
										></span
									>

									<span>Send</span>
								{/if}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
