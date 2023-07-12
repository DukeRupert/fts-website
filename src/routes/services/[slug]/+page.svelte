<script lang="ts">
	import type { PageData } from './$types';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { page } from '$app/stores';
	import { PortableText } from '@portabletext/svelte';
	import Features from '../Features.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from 'svelte-seo';

	export let data: PageData;
	const { page: pageData, posts } = data;
	const blocks = pageData?.pageBuilder as InputValue;
	console.log(blocks);
</script>

<Seo data={pageData} url={$page.url.toString()} />
<div class="relative">
	<PortableText value={blocks} components={{ types: { features: Features } }} />
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<CallToAction />
	</div>
</div>
