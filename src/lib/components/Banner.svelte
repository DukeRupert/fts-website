<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

	export let is_banner_visible = true;

	const dispatch = createEventDispatcher();

	function dispatch_click() {
		dispatch('click');
	}

	const options = { duration: 300, easing: quartOut };
</script>

{#if is_banner_visible}
	<div out:slide={options} class="flex items-center gap-x-6 bg-tertiary-600 px-6 py-2.5">
		<p class="flex-1 w-full text-sm leading-6 text-center mr-2 sm:mr-0">
			<a href="/financing"
				><strong class="font-semibold">Need financing?</strong><svg
					viewBox="0 0 2 2"
					class="mx-2 inline h-0.5 w-0.5 fill-current"
					aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg
				>Click here <span class="hidden md:inline">to view financing options&nbsp;</span><span
					aria-hidden="true">&rarr;</span
				></a
			>
		</p>
		<div class="absolute right-2 w-8 flex justify-center items-center">
			<button
				on:click={dispatch_click}
				type="button"
				class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
			>
				<span class="sr-only">Dismiss</span>
				<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
