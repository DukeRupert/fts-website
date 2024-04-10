<script lang="ts">
	import { serializeSchema } from '$lib/utils/json-ld-serializer';
	import { jsonld_schema } from './seo';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Hero from './(components)/Hero.svelte';
	import Services from './(components)/Services.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import ServiceArea from '$lib/components/ServiceArea/ServiceArea.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import LogoCloud from '$lib/components/LogoCloud/LogoCloud.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	import Blog from '$lib/components/Blog/3Column.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

	// instantiate modal
	const modalStore = getModalStore();

	// Trigger leads modal
	function triggerCustomModal(): void {
		const modalComponent: ModalComponent = {
			// Pass a reference to your custom component
			ref: ModalForm,
			// Add your props as key/value pairs
			props: { background: '!bg-red-500' },
			// Provide default slot content as a template literal
			slot: '<p>Skeleton</p>'
		};
		const d: ModalSettings = {
			type: 'component',
			component: modalComponent
		};
		modalStore.trigger(d);
	}

	// Modal should trigger only once
	let stopModal = false;

	onMount(() => {
		// Check URL for tradeshow and trigger leads modal
		const promo = $page.url.searchParams.get('promo');
		if (promo && !stopModal) {
			console.log('Promo');
			stopModal = true;
			triggerCustomModal();
		} else if (!data.returning_user && !stopModal) {
			console.log('Returning user');
			stopModal = true;
			triggerCustomModal();
		}
	});

	const seoData = {
		title: "FtS Excavation | Puyallup's excavation experts",
		description:
			'FtS-Excavation: Your trusted Puyallup excavation experts. Skilled professionals, advanced equipment, and reliable service. Residential, commercial, and industrial excavation. Contact us for a free consultation.',
		url: 'https://www.fts-excavation.com/',
		og: {
			src: 'https://www.fts-excavation.com/image/seo/FtS-Excavation_1200.jpg',
			alt: 'FtS Excavation clearing land in the Puget Sound region.',
			mimeType: 'jpeg',
			width: 1200,
			height: 675
		}
	};
</script>

<svelte:head>
	{@html serializeSchema(jsonld_schema)}
</svelte:head>

<Seo data={seoData} />
<Hero />
<LogoCloud />
<Services />
<TestimonialGrid />
<ServiceArea />
<Blog posts={data.posts} />
<CallToAction />
