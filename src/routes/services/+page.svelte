<script lang="ts">
	import type { PageData } from './$types';
	import Serializer from '$lib/sanity/pageBuilder/serializer.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';
	export let data: PageData;
	const { page: pageData } = data;
</script>

<Seo data={pageData} url={$page.url.toString()} />
<Serializer data={pageData.pageBuilder} />
<CallToAction />
