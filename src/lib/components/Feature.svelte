<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	export let data = {
		title: 'All-in-one platform',
		subtitle:
			'Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.',
		features: [
			{
				title: 'Invite team members',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Invite team members',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Invite team members',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Invite team members',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Invite team members',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			},
			{
				title: 'Invite team members',
				body: 'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quisac. Lacus.'
			}
		]
	};
	// Intersection oberver variables
	const threshold = 0.2;
	let element: HTMLElement;
	let intersecting: boolean;

	// Reactive assignments for transitions
	$: show = intersecting;
</script>

<div class="relative">
	<IntersectionObserver once {element} bind:intersecting {threshold}>
		<div
			bind:this={element}
			class="transition-all transform duration-500 delay-150 ease-quart-out {show
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-12'} mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8"
		>
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900">{data.title}</h2>
				<p class="mt-4 text-lg text-gray-500">
					{data.subtitle}
				</p>
			</div>
			<dl
				class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
			>
				{#each data.features as item}
					<div class="relative">
						<dt>
							<!-- Heroicon name: outline/check -->
							<svg
								class="absolute h-6 w-6 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>
							<h3 class="ml-9 text-lg font-medium leading-6 text-gray-900">{item.title}</h3>
						</dt>
						<dd class="mt-2 ml-9 text-base text-gray-500">
							{item.body}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</IntersectionObserver>
</div>
