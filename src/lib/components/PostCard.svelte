<script lang="ts">
  import type { Post } from '$lib/types';
  import SanityImage from '$lib/SanityImage.svelte'
  export let post: Post;
</script>

<article
  class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
>
  <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-90 sm:aspect-none sm:h-96">
    {#if post.image}
      <SanityImage image={post.image} maxWidth={600} />
    {/if}
  </div>
  <div class="flex-1 p-4 space-y-2 flex flex-col">
    <a rel="prefetch" href="/projects/{post.slug.current}">
      <h3 class="text-base font-medium text-evergreen-500">
        {post.title}
      </h3></a
    >
    <p class="text-sm text-gray-600 line-clamp-4">{post.excerpt}</p>
    <div class="flex-1 flex flex-col justify-end">
      <p class="text-sm italic text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString('en', {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        })}
      </p>
    </div>
  </div>
</article>
