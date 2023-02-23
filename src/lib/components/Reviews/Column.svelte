<script lang="ts">
	import type { Testimonial } from './reviews';
	import { writable, derived } from 'svelte/store';
	import Review from './Review.svelte';
	export let reviews: Testimonial[];
	export let className = '';
	export let reviewClassName = '';
	export let msPerPixel: number;
	$: duration = `${$height * msPerPixel}ms`;

	const el = writable();
	const height = derived(el, ($el, set) => {
		if (!$el) return;
		const ro = new ResizeObserver(([entry]) => {
			set(entry.contentRect.height);
		});
		ro.observe($el);
		return () => ro.disconnect();
	});
</script>

<div
	bind:this={$el}
	class="animate-marquee space-y-8 py-4 {className}"
	style="--marquee-duration: {duration}"
>
	{#each reviews as review, i}
		<Review data={review} className={reviewClassName} />
	{/each}
</div>
