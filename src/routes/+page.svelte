<script lang="ts">
	import { serializeSchema } from '$lib/utils/json-ld-serializer';
	import { jsonld_schema } from './seo';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero/AngledRight.svelte';
	import Services from '$lib/components/Services/3Column.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import ServiceArea from '$lib/components/ServiceArea/ServiceArea.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import LogoCloud from '$lib/components/LogoCloud/LogoCloud.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

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

	// Trigger leads modal if
	// user is new & scroll > 300 & trigger hasn't fired already
	let main: HTMLElement | null;
	let yScroll;
	let promoTrigger = true;

	function scrollHandler(e: any): void {
		yScroll = e.target.scrollTop;
		if (data?.promo && yScroll > 300 && promoTrigger) {
			promoTrigger = false;
			triggerCustomModal();
		}
	}

	onMount(() => {
		main = document.getElementById('page');
		main?.addEventListener('scroll', scrollHandler);
		// Check URL for tradeshow and trigger leads modal
		const promo = $page.url.searchParams.get('promo');
		if (promo && promo === 'tradeshow') {
			triggerCustomModal();
		}
	});

	onDestroy(() => {
		main?.removeEventListener('scroll', scrollHandler);
	});

	const seoData = {
		title: "FtS Excavation | Puyallup's excavation experts | Home",
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
<Services />
<TestimonialGrid />
<ServiceArea />
<LogoCloud />
<CallToAction />
