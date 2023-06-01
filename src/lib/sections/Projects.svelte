<script lang="ts">
	import type { Post } from '$lib/types';
	import Posts from './Posts.svelte';

	export let posts: Post[];
</script>

<div class="max-w-4xl mx-auto text-center">
	<h2>Projects</h2>
	<p class="mt-4 mb-12">
		We are proud to showcase a few examples of the work we are doing in the South Puget Sound.
	</p>
	<Posts {posts} cta={false} />
</div>
