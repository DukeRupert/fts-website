<script lang="ts">
	import type { Item } from '$lib/types';

	export let item: Item;
	const { videoId: id } = item?.id;
	const { high: thumbnail } = item?.snippet?.thumbnails;
	const { title, description } = item?.snippet;

	let play = false;
</script>

<div class="m-2 bg-transparent relative h-auto flex-shrink-0 ">
	<div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
		{#if play}
			<div class="w-full h-auto aspect-w-4 aspect-h-3">
				<iframe
					src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
					{title}
					frameborder="0"
					class="w-full h-full object-cover"
					height={thumbnail.height}
					width={thumbnail.width}
					allow="autoplay; picture-in-picture; clipboard-write"
					allowfullscreen
				/>
			</div>
		{:else}
			<div class="p-0">
				<div class="w-full h-auto aspect-w-4 aspect-h-3">
					<img
						src={thumbnail.url}
						{title}
						class="w-full h-full object-cover"
						alt="Youtube video: ${title}"
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
			</div>
		{/if}
		<div class="px-4 py-4 sm:px-6">
			<div class="mt-2">
				<h3 class="text-base md:text-lg font-medium text-evergreen-500 dark:text-gray-100">
					{title}
				</h3>

				<p class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
					{description}
				</p>
			</div>
		</div>
	</div>
</div>
