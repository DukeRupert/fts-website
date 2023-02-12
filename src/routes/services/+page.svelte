<script lang="ts">
	import type { PageData } from './$types';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { PortableText } from '@portabletext/svelte';
	import { page } from '$app/stores';
	import Features from './Features.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;
	const { page: pageData } = data;
	const blocks = pageData?.pageBuilder as InputValue;
</script>

<Seo data={pageData} url={$page.url.toString()} />
<PortableText value={blocks} components={{ types: { features: Features } }} />
<CallToAction />
