<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let data: PageData;

	// Initialize Toast
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
					message: 'Success!',
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
			pending = false;
		}
	});
</script>

<div class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Remove yourself from our mailing list.
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form use:enhance class="space-y-6" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
					>Email address</label
				>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						bind:value={$form.email}
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="hidden">
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

			<div class="mt-6">
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-tertiary-500 shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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

						<span>Unsubscribe</span>
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>
