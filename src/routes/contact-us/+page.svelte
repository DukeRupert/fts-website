<!-- contact-us.svelte -->
<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ContactForm from '$lib/sections/ContactForm.svelte';

	const seoData = {
		title: 'Jobs | FtS Excavation',
		description:
			"No commitment, just a conversation starter. Let's find out how we can use our excavation expertise to accomplish your project today.",
		url: 'https://www.fts-excavation.com/contact-us',
		og: {
			src: 'https://www.fts-excavation.com/image/seo/FtS-Excavation_1200.jpg',
			alt: 'FtS Excavation clearing land in the Puget Sound region.',
			mimeType: 'jpeg',
			width: 1200,
			height: 675
		}
	};
</script>

<Seo data={seoData} />

<div class="relative mt-28">
	<div class="bg-white py-24 sm:py-32">
		<div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Contact Us
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					No commitment, just a conversation starter. Let's find out how we can use our excavation
					expertise to accomplish your project today.
				</p>
			</div>
			<div
				class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
			>
				<ContactForm />
			</div>
		</div>
	</div>
</div>
