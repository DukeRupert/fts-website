<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { Post } from '$lib/types';
	export let posts: Post[];
</script>

<div>
	<div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
		<h2 class="text-3xl text-center font-extrabold text-gray-900 tracking-tight">Projects</h2>
		<p class="mt-4 mb-12 text-center text-lg text-gray-500">
			We are proud to showcase a few examples of the work we are doing in the South Puget Sound.
		</p>
		<section
			class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each posts as post (post.slug.current)}
				<PostCard {post} />
			{/each}
		</section>
	</div>
</div>
