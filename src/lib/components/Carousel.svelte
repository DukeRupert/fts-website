<script lang="ts">
	import Stars from '$lib/components/Stars.svelte';
	import { fade } from 'svelte/transition';
	import { quartIn, quartOut } from 'svelte/easing';

	export let items = [];

	let index = 0;

	const next = () => {
		index = (index + 1) % items.length;
	};

	setInterval(next, 5000);
</script>

<!-- markup (zero or more items) goes here -->
{#each [items[index]] as item (index)}
	<div
		on:click={next}
		in:fade={{ delay: 200, duration: 500, easing: quartIn }}
		class="relative max-h-[500px] h-[25vh]"
	>
		<div class="relative">
			<blockquote class="mt-10">
				<div
					class="mx-auto max-w-3xl text-center text-sm md:text-3xl font-medium leading-9 text-gray-700 dark:text-gray-200"
				>
					<p class="line-clamp-3">
						&ldquo;{item.review}&rdquo;
					</p>
					<Stars rating={item.rating} />
				</div>
				<footer class="mt-8">
					<div class="md:flex md:items-center md:justify-center">
						<div class="md:flex-shrink-0">
							<img
								class="mx-auto h-10 w-10 object-contain"
								src={item.image.src}
								alt={item.image.alt}
							/>
						</div>
						<div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
							<div class="text-base font-medium text-gray-500 dark:text-gray-300">
								{item.firstName}
								{item.lastName}
							</div>
						</div>
					</div>
				</footer>
			</blockquote>
		</div>
	</div>
{/each}
