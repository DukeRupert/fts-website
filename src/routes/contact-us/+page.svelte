<!-- contact-us.svelte -->
<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	//@ts-ignore
	import { page } from '$app/stores';
	import ContactForm from '$lib/sections/ContactForm.svelte';
	import GoogleMap from '$lib/components/GoogleMap.svelte';
</script>

<SvelteSeo
	title="Contact Us"
	description="No commitment, just a conversation starter. We provide excavation services to the south puget sound."
	keywords="excavation construction services contractor puget sound puyallup drainage grading"
	openGraph={{
		title: 'Contact Us',
		description:
			'No commitment, just a conversation starter. We provide excavation services to the south puget sound.',
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
			<h2 class="text-base font-semibold text-evergreen-500 tracking-wide uppercase">Contact Us</h2>
			<p
				class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				Let's get started
			</p>
			<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
				No commitment, just a conversation starter.
			</p>
		</div>
		<div
			class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
		>
			<ContactForm />
		</div>
	</div>
</div>
