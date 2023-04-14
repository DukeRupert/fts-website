<script lang="ts">
	import SanityImage from '$lib/sanity/SanityImage.svelte';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { TextWithIllustration } from './TextWithIllustration';
	export let portableText: CustomBlockComponentProps<TextWithIllustration>;
	const { value } = portableText;
</script>

<div class="text-center">
	<h1 class="unstyled text-base font-semibold text-primary-500 tracking-wide uppercase">
		{value?.heading ?? 'Error'}
	</h1>
	<h2 class="unstyled mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
		{value?.tagline ?? 'Something went wrong'}
	</h2>
	<p class="unstyled max-w-xl mt-4 mx-auto text-xl">{value?.excerpt ?? 'Loading data from cms'}</p>
</div>
{#if value?.image}
	<SanityImage
		image={value?.image}
		alt={value?.image?.alt}
		class="max-w-md w-full rounded-md mx-auto mt-8 lg:mt-12"
		maxWidth={610}
	/>
{/if}
