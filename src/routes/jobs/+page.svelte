<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import JobForm from '$lib/sections/JobForm.svelte';

	const title = 'Jobs';
	const callToAction = 'Apply Today';
	const subheader = 'We are always looking for good help.';
</script>

<SvelteSeo
	{title}
	description={callToAction + '. ' + subheader}
	keywords="excavation construction services contractor puget sound puyallup drainage grading"
	openGraph={{
		title: title,
		description: callToAction + '. ' + subheader,
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: `${$page.url.host}/image/fts_excavation_ranier_960_1280.webp`,
				width: 960,
				height: 1280,
				alt: 'FtS Excavation excavator in front of Mount Rainier'
			}
		]
	}}
/>

<div class="relative">
	<div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-base font-semibold text-primary-500 tracking-wide uppercase">{title}</h1>
			<h2 class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
				{callToAction}
			</h2>
			<p class="max-w-xl mt-4 mx-auto text-xl">{subheader}</p>
		</div>
		<div
			class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
		>
			<JobForm />
		</div>
	</div>
</div>
