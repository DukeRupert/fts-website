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
	import ModalForm from '$lib/components/ModalForm.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Instagram from './Instagram.svelte';
	import Section from '$lib/components/Section.svelte';
	import LogoCloud from '$lib/components/LogoCloud/LogoCloud.svelte';
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
{

"@context": "https://schema.org",

"@type": "HomeAndConstructionBusiness",

"name": "FtS-Excavation",

"url": "http://www.fts-excavation.com/",

"logo": "https://www.fts-excavation.com/logo/FtS_Logo_Cream.webp",

"description": "FtS-Excavation: Your trusted Puyallup excavation experts. Skilled professionals, advanced equipment, and reliable service. Residential, commercial, and industrial excavation. Contact us for a free consultation.",

"address": {

"@type": "PostalAddress",

"streetAddress": "123 Main Street",

"addressLocality": "Puyallup",

"addressRegion": "WA",

"postalCode": "98373",

"addressCountry": "US"

},

"contactPoint": {

"@type": "ContactPoint",

"telephone": "+1-253-439-8003",

"contactType": "customer service"

},

"geo": {

"@type": "GeoCoordinates",

"latitude": "47.12345",

"longitude": "-122.12345"

},

"openingHours": "Mo-Fr 08:00-18:00",

"priceRange": "$$",

"sameAs": [

"https://www.facebook.com/ftsexcavation/",

"https://www.instagram.com/fts_excavation"

],

"hasMap": "https://www.google.com/maps/place/123+Main+Street,+Puyallup,+WA+12345/",

"image": [

"https://cdn.sanity.io/images/pciykl66/production/4a5161a78205cacdb7de07291474adca8c9cefb0-610x610.webp?w=610&fit=fillmax",

"https://cdn.sanity.io/images/pciykl66/production/7f2eb7913226d6fe2576964d215ff9bc3f90913f-2988x1992.webp?w=1200&h=800&fm=webp",

"https://cdn.sanity.io/images/pciykl66/production/11934b2da9b96a8f49418debb367c3ce79a7d450-1200x675.jpg?rect=94,0,1013,675&w=600&h=400&fm=webp"

],

"email": "service@fts-excavation.com",

"aggregateRating": {

"@type": "AggregateRating",

"ratingValue": "5.0",

"reviewCount": "26"

},

"brand": {

"@type": "Brand",

"name": "FtS-Excavation",

"logo": "https://www.fts-excavation.com/logo/FtS_Logo_Cream.webp"

},

"hasOfferCatalog": {

"@type": "OfferCatalog",

"name": "Excavation Services",

"itemListElement": [

{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Site Preparation",

"description": "Experience expert site preparation services at FtS-Excavation. We clear, grade, and prepare sites for construction projects with precision and efficiency. From land clearing to drainage solutions, trust us for reliable and comprehensive site preparation. Contact us today for exceptional results.",

"url": "https://www.fts-excavation.com/services/site-preparation"

}

},

{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Drainage",

"description": "Discover effective drainage solutions tailored to your property at FtS-Excavation. Our experienced team specializes in designing and implementing custom drainage systems to prevent water-related issues. From French drains to grading, we optimize water flow and protect your property from erosion and flooding. Experience exceptional craftsmanship and reliable results. Contact us for expert drainage services.",

"url": "https://www.fts-excavation.com/services/drainage"

}

},

{

"@type": "Offer",

"itemOffered": {

"@type": "Service",

"name": "Industrial Excavation",

"description": "We specialize in industrial excavation projects, including land clearing, earthmoving, and infrastructure development for factories and industrial sites.",

"url": "http://www.fts-excavation.com/industrial-excavation"

}

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
	<Section id="instagram-feed">
		<Instagram />
	</Section>

	<Section id="reviews">
		<Reviews />
	</Section>
	<Section id="logo-cloud">
		<LogoCloud />
	</Section>
	<Section id="service-area">
		<ServiceArea />
	</Section>
	<Section id="newsletter"><Newsletter /></Section>
	<Section id="projects">
		<Projects posts={data.data} />
	</Section>
	<CallToAction />
</div>
