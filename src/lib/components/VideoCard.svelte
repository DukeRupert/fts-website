<script lang="ts">
	import type { Item } from '$lib/types';

	export let item: Item;
	const { videoId: id } = item?.id;
	const { high: thumbnail } = item?.snippet?.thumbnails;
	const { title, description } = item?.snippet;
</script>

<div class="h-full card">
	<header class="card-header">
		<img
			src={thumbnail.url}
			height={thumbnail.height}
			width={thumbnail.width}
			class="bg-black/50 w-full aspect-[4/3]"
			alt="Post"
			loading="lazy"
		/>
	</header>
	<div class="p-4">
		<div class="space-y-4 text-left">
			<h3>{title}</h3>
			{#if description}
				<article>
					<p>{description}</p>
				</article>
			{/if}
		</div>
	</div>
	<footer>
		<a
			href="https://www.youtube.com/watch?v={id}"
			class="btn variant-outline-primary hover:variant-filled-primary no-underline mb-4 transition-all duration-300 ease-expo-out"
			><span>Watch</span><span>></span></a
		>
	</footer>
</div>
