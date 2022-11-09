<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { Post } from '$lib/types';
	export let posts: Post[];
	export let cta = true;
</script>

<div
	class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
>
	{#each posts as post (post.slug.current)}
		<PostCard {post} />
	{/each}
	{#if cta}
		<div class="mt-6">
			<a
				href="/projects"
				class="inline-flex bg-gradient-to-r from-evergreen-500 to-evergreen-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-evergreen-200 hover:to-evergreen-400"
			>
				View Projects
			</a>
		</div>
	{/if}
</div>
