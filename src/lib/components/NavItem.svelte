<script lang="ts">
	import { slide } from 'svelte/transition';
	import { linear, quartOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('selected  ');
	};

	interface Subitem {
		title: string;
		href: string;
	}

	interface Data {
		href: string;
		label: string;
		svg: {
			viewbox: string;
			path: string;
		};
		subitems?: Subitem[];
	}

	export let data: Data = {
		href: '',
		label: '',
		svg: {
			viewbox: '',
			path: ''
		},
		subitems: []
	};
	export let timing = 300;

	$: ({ href, svg, label, subitems } = data);

	let toggle = false;
</script>

<div class="-m-3 p-3 flex items-center rounded-lg hover:bg-evergreen-100">
	{#if subitems && subitems.length == 0}
		<a {href} class="w-full flex items-center">
			<div
				class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-evergreen-500 to-evergreen-500 text-cream-500"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox={svg.viewbox}
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={svg.path} />
				</svg>
			</div>
			<div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-100">{label}</div>
		</a>
	{:else}
		<div class="w-full flex items-center" on:click={() => (toggle = !toggle)}>
			<div
				class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-evergreen-500 to-evergreen-500 text-cream-500"
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox={svg.viewbox}
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={svg.path} />
				</svg>
			</div>
			<div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-100">{label}</div>
		</div>

		<span on:click={() => (toggle = !toggle)} class="flex flex-col justify-center ml-auto mr-2">
			<!-- plus -->
			<svg
				class="h-6 w-6 text-custard-500"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<line
					x1="12"
					y1="5"
					x2="12"
					y2="19"
					class="transition-transform duration-300 ease-linear transform origin-center {toggle
						? 'rotate-90'
						: 'rotate-0'}"
				/>
				<line x1="5" y1="12" x2="19" y2="12" /></svg
			>
		</span>
	{/if}
</div>
{#if toggle}
	<ul
		aria-labelledby="mobile-featured-heading-0"
		class="mt-6 pl-4 space-y-6"
		in:slide={{ duration: timing, easing: quartOut }}
	>
		{#if subitems}
			{#each subitems as { href, title }}
				<li class="flex">
					<a sveltekit:prefetch {href} class="text-gray-900 dark:text-gray-100">
						{title}
					</a>
				</li>
			{/each}
		{/if}
	</ul>
{/if}
