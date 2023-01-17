<script lang="ts">
	import type { Post } from '$lib/types';
	import Posts from './Posts.svelte';

	export let posts: Post[];
</script>

<div
	class="max-w-4xl mx-auto text-center px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
>
	<h2>Projects</h2>
	<p class="mt-4 mb-12">
		We are proud to showcase a few examples of the work we are doing in the South Puget Sound.
	</p>
	<Posts {posts} cta={false} />
</div>
