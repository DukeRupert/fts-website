<!-- about-us.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { page } from '$app/stores';
	import { PortableText } from '@portabletext/svelte';
	import Seo from '$lib/components/Seo.svelte';
	import TextWithIllustration from './TextWithIllustration.svelte';
	import TextBlock from './TextBlock.svelte';

	export let data: PageData;
	const { page: pageData } = data;

	const serializer = {
		types: { textWithIllustration: TextWithIllustration, textBlock: TextBlock }
	};
	const blocks = data?.page?.pageBuilder as InputValue;
</script>

<Seo data={pageData} url={$page.url.toString()} />
<div class="relative">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<PortableText value={blocks} components={serializer} />
	</div>
</div>
