<script lang="ts">
	import type { Post } from '$lib/types/sanity';
	import { urlFor } from '$lib/sanity/urlFor';

	export let data: Post;

	const date = new Date(data.publishedAt)
	const date_string = date.toLocaleDateString()
</script>

<article
	class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-all duration-150 ease-out hover:brightness-125"
>
	{#if data?.mainImage?.asset}
		<img
			src={urlFor(data.mainImage.asset)
				.fit('crop')
				.width(480)
				.format('webp')
				.quality(80)
				.toString()}
			alt={data.mainImage.alt ?? 'fts project photo'}
			class="absolute inset-0 -z-10 h-full w-full object-cover"
		/>
	{/if}
	<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
	<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

	<div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
		<time datetime={date_string || "Mar 16, 2020"} class="mr-8">{date_string || "Mar 16, 2020"}</time>
	</div>
	<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
		<a href={`/projects/${data.slug.current}`} class="unstyled text-white">
			<span class="absolute inset-0" />
			{data?.title ?? 'An FtS project'}
		</a>
	</h3>
</article>
