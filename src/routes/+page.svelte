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
</script>

<svelte:head>
	<script type="application/ld+json">
{
	"@context": "http://schema.org/",
	"@type": "LocalBusiness",
	"name": "FtS Excavation",
	"image": "https://cdn.sanity.io/images/pciykl66/production/7f2eb7913226d6fe2576964d215ff9bc3f90913f-2988x1992.webp?w=1200&h=800&fm=webp",
	"telephone": "+12534398003",
	"url": "https://www.fts-excavation.com/",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "12714 151ST ST E",
		"addressLocality": "Puyallup",
		"addressRegion": "WA",
		"postalCode": "98374",
		"addressCountry": "United States"
	},
	"review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Henny Baker"
        },
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			"opens": "07:00",
			"closes": "18:00"
		}
	]
}
}
	</script>
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

<div class="relative sm:mt-5 md:mt-10">
	<Hero />
	<AlternatingFeatures />
	<Reviews />
	<ServiceArea />
	<Videos />
	<Newsletter />
	<Projects posts={data.data} />
	<CallToAction />
</div>
