<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import AlternatingFeatures from '$lib/sections/AlternatingFeatures.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import ServiceArea from '$lib/sections/ServiceArea.svelte';
	import Reviews from '$lib/components/Reviews/index.svelte';
	import Videos from '$lib/sections/Videos.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

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

	// Check URL for tradeshow and trigger leads modal
	const promo = $page.url.searchParams.get('promo');
	$: if (promo && promo === 'tradeshow') {
		triggerCustomModal();
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
	});

	onDestroy(() => {
		main?.removeEventListener('scroll', scrollHandler);
	});
</script>

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

<Hero />
<AlternatingFeatures />
<Reviews />
<ServiceArea />
<Videos />
<Newsletter />
<Projects posts={data.data} />
<CallToAction />
