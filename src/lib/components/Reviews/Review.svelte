<script lang="ts">
	import StarRating from './StarRating.svelte';
	import type { Testimonial } from './reviews';
	export let data: Testimonial;
	export let className = '';
	const { rating, title, body, author } = data;

	function calculateAnimationDelay() {
		let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];
		return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)];
	}
	let animationDelay = calculateAnimationDelay();
</script>

<figure
	class="animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5 {className}"
	style="animation-delay: {animationDelay}"
>
	<blockquote class="text-gray-900">
		<StarRating {rating} />
		<p class="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
			{title}
		</p>
		<p class="mt-3 text-base leading-7">{body}</p>
	</blockquote>
	<figcaption class="mt-3 text-sm text-gray-600 before:content-['–_']">
		{author}
	</figcaption>
</figure>
