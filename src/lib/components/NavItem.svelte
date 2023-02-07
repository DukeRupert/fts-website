<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

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

	$: ({ href, svg, label, subitems } = data);
</script>

<div class="-m-3 p-3 flex items-center rounded-lg hover:bg-primary-300">
	<a {href} class="w-full flex items-center">
		<div
			class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-primary-500 to-primary-700 text-cream-500"
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
</div>
{#if subitems}
	<ul aria-labelledby="mobile-featured-heading-0" class="mt-6 pl-4 space-y-6">
		{#each subitems as { href, title }}
			<li class="flex">
				<a {href}>
					{title}
				</a>
			</li>
		{/each}
	</ul>
{/if}
