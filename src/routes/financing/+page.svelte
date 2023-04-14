<script lang="ts">
	import { page } from '$app/stores';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { PortableText } from '@portabletext/svelte';
	import Seo from '$lib/components/Seo.svelte';
	import FinancingModule from '$lib/components/FinancingModule.svelte';
	import TextWithIllustration from '$lib/components/TextWithIllustration.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { page: pageData } = data;

	const serializer = {
		types: { textWithIllustration: TextWithIllustration }
	};
	const blocks = data?.page?.pageBuilder as InputValue;
</script>

<Seo data={data.page} url={$page.url.toString()} />
<div class="relative">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<PortableText value={blocks} components={serializer} />
		<div class="flex justify-center py-8 md:py-12">
			<FinancingModule />
		</div>
	</div>
</div>
