<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLElement;
	let intersecting: boolean;
	const threshold = 0.2;
	export let i: number = 0;
</script>

<IntersectionObserver once {element} bind:intersecting {threshold}>
	<div
		bind:this={element}
		class="group relative transition duration-300 ease-in filter {intersecting
			? 'opacity-100 translate-y-0'
			: 'opacity-0 translate-y-4'}"
		style="transition-delay: {i}ms;"
	>
		<slot />
	</div>
</IntersectionObserver>
