<script lang="ts">
	import type { Post } from '$lib/types/sanity';
	import SanityImage from '$lib/sanity/SanityImage.svelte';
	import MainImage from '$lib/sanity/MainImage.svelte';
	export let post: Post;
</script>

<article class="group relative border rounded-lg flex flex-col overflow-hidden">
	<a data-sveltekit-preload-data href="/projects/{post.slug.current}" class="no-underline">
		<div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-90 sm:aspect-none sm:h-96">
			{#if post.mainImage}
				<MainImage image={post.mainImage} maxWidth={600} />
			{/if}
		</div>
		<div class="flex-1 prose text-left p-4 space-y-2 flex flex-col">
			<h3>
				{post.title}
			</h3>
			<p class="line-clamp-4">{post.excerpt}</p>
			<div class="flex-1 flex flex-col justify-end">
				<p class="italic">
					{new Date(post.publishedAt).toLocaleDateString('en', {
						month: 'long',
						day: '2-digit',
						year: 'numeric'
					})}
				</p>
			</div>
		</div>
	</a>
</article>
