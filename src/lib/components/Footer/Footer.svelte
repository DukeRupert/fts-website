<script lang="ts">
	import fts_logo from '$lib/assets/logo/FtS_Excavation_logo_green_white.png?run&width=80&format=webp;avif;jpg';
	import Img from '@zerodevx/svelte-img';
	import { COMPANY } from '$lib/constants';
</script>

<footer class="bg-white" aria-labelledby="footer-heading">
	<div class="mx-auto max-w-7xl">
		<hr />
	</div>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<Img class="h-16 w-16 rounded-sm" src={fts_logo} alt="FtS Excavation" />
				<p class="text-sm leading-6 text-gray-600">
					Precision + Integrity. Your trusted Puyallup excavation experts.
				</p>
				<div class="mt-6 flex items-center">
					<span class="inline-block"
						><svg
							class="h-5 w-5 flex-none"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					<a href={COMPANY.contact.phone.href} class="ml-2 text-sm leading-6 text-gray-600">
						{COMPANY.contact.phone.string}</a
					>
				</div>

				<div class="flex space-x-6">
					<a href={COMPANY.social.facebook} class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Facebook</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
					<a href={COMPANY.social.instagram} class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Instagram</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>

					<a href={COMPANY.social.youtube} class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">YouTube</span>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Navigation</h3>

						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Home</a>
							</li>

							<li>
								<a href="/services" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Services</a>
							</li>

							<li>
								<a href="/projects" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Projects</a
								>
							</li>
							<li>
								<a href="/financing" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Financing</a
								>
							</li>
							<li>
								<a href="/contact-us" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Contact us</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Services</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="/site-preparation"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Site preparation</a
								>
							</li>
							<li>
								<a href="/drainage" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Drainage</a
								>
							</li>
							<li>
								<a href="/hardscape" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Hardscape</a
								>
							</li>
							<li>
								<a href="/foundations" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Foundations</a
								>
							</li>
							<li>
								<a
									href="/land-clearing"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Land clearing</a
								>
							</li>
							<li>
								<a href="/public-utility-extension" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Public utility extensions</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="/about-us" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>About us</a
								>
							</li>
							<li>
								<a href="/jobs" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="/privacy-policy"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 flex flex-col space-y-2 sm:flex-row sm:justify-between border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">
				&copy; {COMPANY.year}
				{COMPANY.name}. All rights reserved.
			</p>
			<p class="text-xs leading-5 text-gray-500">
				Created by <a href="https://www.fireflysoftware.dev/" target="_blank" rel="noreferrer">Firefly Software</a>
			</p>
		</div>
	</div>
</footer>
