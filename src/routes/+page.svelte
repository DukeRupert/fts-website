<script lang="ts">
	import { serializeSchema } from '$lib/utils/json-ld-serializer';
	import { jsonld_schema } from './seo';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import Hero from '$lib/components/Hero/AngledRight.svelte';
	import Services from '$lib/components/Services/3Column.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import ServiceArea from '$lib/sections/ServiceArea.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount, onDestroy } from 'svelte';

	import LogoCloud from '$lib/components/LogoCloud/LogoCloud.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid/TestimonialGrid.svelte';

	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

	// Trigger leads modal
	function triggerCustomModal(): void {
		const modalComponent: ModalComponent = {
			// Pass a reference to your custom component
			ref: ModalForm,
			// Add your props as key/value pairs
			props: { background: 'bg-red-500' },
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

	// const seoData = {
	// 	title: "FtS Excavation | Puyallup's excavation experts | Home",
	// 	description: string;
	// 	url: string;
	// 	og: {
	// 		src: string;
	// 		alt: string;
	// 		mimeType: string;
	// 		width: number;
	// 		height: number;
	// 	};
	// }
</script>

<svelte:head>
	{@html serializeSchema(jsonld_schema)}
</svelte:head>

<SvelteSeo
	title="FtS Excavation - Puyallup's excavation experts"
	description="Professional excavators serving both residential and commercial clients. Services include drainage, site preparation and land development. Serving the greater Puget Sound region."
	keywords="excavation land clearing foundations leveling dirt removal residential construction utility installation tacoma puyallup"
	openGraph={{
		title: "FtS Excavation - Puyallup's excavation experts",
		description: `Professional excavators serving both residential and commercial clients. Services include drainage, site preparation and land development. Serving the greater Puget Sound region.`,
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: `${$page.url.host}/image/P53_900.webp`,
				width: 960,
				height: 600,
				alt: 'FtS Excavation excavator leveling a driveway for a residential customer in Puyallup.'
			}
		]
	}}
/>

<!-- <Seo data={} /> -->

<Hero />
<Services />
<TestimonialGrid />
<ServiceArea />
<LogoCloud />
<CallToAction />
