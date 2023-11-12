<script lang="ts">
	import type { Post } from '$lib/types/sanity';
	import Card from './Card.svelte';

	export let title = 'Recent work';
	export let body = 'Check out some of our recent projects around the Puget Sound.';
	export let posts: Post[];
</script>

<div id="blog" class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				{body}
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each posts as post}
				<Card data={post} />
			{/each}
		</div>
	</div>
</div>
