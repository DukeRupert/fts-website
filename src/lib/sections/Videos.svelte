<script>
	import { recentVideos } from '$lib/stores';
	import Spinner from '$lib/components/Spinner.svelte';
	import Card from '$lib/youtube/Card.svelte';
	import { COMPANY } from '$lib/constants';

	const social = COMPANY.social.find((element) => element.type == 'youtube');
	const { href } = social ?? 'https://youtube.com/channel/UC_LbjVWjiiFg3h9lB6rcvGQ';
</script>

<section>
	<div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
		<h2 class="text-3xl text-center font-extrabold text-gray-900 tracking-tight">Recent Videos</h2>
		<p class="mt-4 mb-12 text-center text-lg text-gray-500">
			Get a glimpse of what we can do for you!
		</p>
		<div
			class="bg-white dark:bg-black grid grid-cols-1 sm:grid-cols-3 divide-y divide-gray-200 dark:divide-gray-700 h-auto lg:gap-x-8"
		>
			{#await recentVideos.load()}
				<Spinner />
			{:then}
				{#each $recentVideos as item}
					<!-- <YouTube id={item.id.videoId} /> -->
					<Card {item} />
				{/each}
			{:catch error}
				<p class="text-red-500">{error.message}</p>
			{/await}
		</div>
		<div class="mt-8 flex justify-center">
			<a
				{href}
				class="inline-flex bg-gradient-to-r from-evergreen-500 to-evergreen-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-evergreen-200 hover:to-evergreen-400"
			>
				View Channel
			</a>
		</div>
	</div>
</section>
