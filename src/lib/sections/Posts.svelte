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
</div>
{#if cta}
	<div class="mt-8 flex justify-center">
		<a href="/projects" class="btn variant-filled-primary"> View Projects </a>
	</div>
{/if}
