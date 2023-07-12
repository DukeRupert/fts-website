<!-- about-us.svelte -->
<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';

	const seoData = {
		title: 'Privacy Policy | FtS Excavation',
		description:
			'FtS Excavation brings skilled professionals, advanced equipment, and reliable service to all residential, commercial, and industrial excavation projects in the Puget Sound.',
		url: 'https://www.fts-excavation.com/privacy-policy-policy',
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
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-base font-semibold text-primary-500 tracking-wide uppercase">
				Privacy Policy
			</h1>
			<h2 class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
				Since you are curious
			</h2>
		</div>

		<article
			class="prose prose-slate max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
		>
			<h3>Information that is gathered from visitors</h3>
			<p>
				In common with other websites, log files are stored on the web server saving details such as
				the visitor's IP address, browser type, referring page and time of visit. Cookies may be
				used to remember visitor preferences when interacting with the website. Where registration
				is required, the visitor's email and a username will be stored on the server.
			</p>
			<h3>How the Information is used</h3>
			<p>
				The information is used to enhance the vistor's experience when using the website to display
				personalised content and possibly advertising. E-mail addresses will not be sold, rented or
				leased to 3rd parties. E-mail may be sent to inform you of news of our services or offers by
				us or our affiliates.
			</p>
			<h3>Visitor Options</h3>
			<p>
				If you have subscribed to one of our services, you may unsubscribe by following the
				instructions which are included in e-mail that you receive. You may be able to block cookies
				via your browser settings but this may prevent you from access to certain features of the
				website.
			</p>
			<h3>Cookies</h3>
			<p>
				Cookies are small digital signature files that are stored by your web browser that allow
				your preferences to be recorded when visiting the website. Also they may be used to track
				your return visits to the website. 3rd party advertising companies may also use cookies for
				tracking purposes.
			</p>
			<h3>Google Ads</h3>
			<p>
				Google, as a third party vendor, uses cookies to serve ads. Google's use of the DART cookie
				enables it to serve ads to visitors based on their visit to sites they visit on the
				Internet. Website visitors may opt out of the use of the DART cookie by visiting the Google
				ad and content network privacy policy.
			</p>
			<div class="flex justify-center">
				<a class="mt-8 btn variant-filled-primary no-underline" href="/">Return Home</a>
			</div>
		</article>
	</div>
</div>
