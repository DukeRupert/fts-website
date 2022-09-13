<script lang="ts">
	import type { PageData } from './$types';
	import AlternatingFeatures from '$lib/sections/AlternatingFeatures.svelte';
	import GradientFeatures from '$lib/sections/GradientFeatures.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Posts from '$lib/sections/Posts.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import ServiceArea from '$lib/sections/ServiceArea.svelte';
	import Reviews from '$lib/sections/Reviews.svelte';

	export let data: PageData;
</script>

<Hero />
<AlternatingFeatures />
<ServiceArea />
<Reviews />
<Posts posts={data.data} />
<GradientFeatures />
<CallToAction />
