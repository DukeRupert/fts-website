<script>
	import { recentVideos } from '$lib/stores';
	import Spinner from '$lib/components/Spinner.svelte';
	import Card from '$lib/youtube/Card.svelte';
	import VideoCard from '$lib/components/VideoCard.svelte';
	import { COMPANY } from '$lib/constants';

	const social = COMPANY.social.find((element) => element.type == 'youtube');
	const href = social?.href ?? 'https://youtube.com/channel/UC_LbjVWjiiFg3h9lB6rcvGQ';
</script>

<section>
	<div
		class="prose text-center max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
	>
		<h2>Recent Videos</h2>
		<p>Get a glimpse of what we can do for you!</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y h-auto lg:gap-x-8">
			{#await recentVideos.load()}
				<Spinner />
			{:then}
				{#each $recentVideos as item}
					<VideoCard {item} />
				{/each}
			{:catch error}
				<p class="text-red-500">{error.message}</p>
			{/await}
		</div>
		<div class="mt-8 flex justify-center">
			<a {href} class="btn btn-filled-primary no-underline"> View Channel </a>
		</div>
	</div>
</section>
