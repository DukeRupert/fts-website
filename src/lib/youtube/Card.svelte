<script lang="ts">
	import type { Snippet } from '$lib/types';

	export let snippet: Snippet;
	const { videoId: id } = snippet?.resourceId;
	const { high: thumbnail } = snippet?.thumbnails;

	let play = false;
</script>

<div class="m-2 bg-transparent relative snap-center w-3/4 h-auto flex-shrink-0 ">
	{#if play}
		<div class="w-full h-auto aspect-w-16 aspect-h-9">
			<iframe
				src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
				title={snippet.title}
				frameborder="0"
				class="w-full h-full object-fill"
				height={thumbnail.height}
				width={thumbnail.width}
				allow="autoplay; picture-in-picture; clipboard-write"
				allowfullscreen
			/>
		</div>
	{:else}
		<div class="w-full h-auto aspect-w-16 aspect-h-9">
			<img
				src={thumbnail.url}
				title={snippet.title}
				class="w-full h-full object-fill"
				alt="Youtube video: ${snippet.title}"
				height={thumbnail.height}
				width={thumbnail.width}
				referrerpolicy="no-referrer"
			/>
			<button
				class="grid items-center h-14 w-14 absolute inset-0 m-auto cursor-pointer bg-transparent opacity-50"
				on:click={() => (play = true)}
				><svg
					class="h-16 w-16 text-white"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<polygon points="10 8 16 12 10 16 10 8" /></svg
				></button
			>
		</div>

		<div class="mt-2">
			<h3 class="sm:text-xl font-medium text-black dark:text-gray-200 bg-transparent line-clamp-1">
				{@html snippet.title}
			</h3>
		</div>
	{/if}
</div>
