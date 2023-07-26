<script lang="ts">
	import fts_logo from '$lib/assets/logo/FtS_Excavation_logo_green_white.png?run&width=80&format=webp;avif;jpg';
	import Img from '@zerodevx/svelte-img';
	import {
		slide,
		type SlideParams,
		fly,
		type FlyParams,
		fade,
		type FadeParams
	} from 'svelte/transition';
	import { quadOut, quadIn } from 'svelte/easing';
	import { COMPANY } from '$lib/constants';
	import { is_open, is_services_open, is_about_open, is_mobile_services_open } from '$lib/stores';

	function toggle_services(): void {
		$is_services_open = !$is_services_open;
		$is_about_open = false;
	}

	function toggle_about(): void {
		$is_about_open = !$is_about_open;
		$is_services_open = false;
	}

	const fade_in: FadeParams = {
		delay: 0,
		duration: 300,
		easing: quadOut
	};

	const fade_out: FadeParams = {
		delay: 0,
		duration: 200,
		easing: quadIn
	};

	const fly_in: FlyParams = {
		x: 400,
		opacity: 25,
		duration: 200,
		easing: quadOut
	};

	const fly_out: FlyParams = {
		x: 300,
		opacity: 25,
		duration: 250,
		easing: quadIn
	};

	const slide_in: SlideParams = {
		duration: 200,
		easing: quadOut
	};

	const slide_out: SlideParams = {
		duration: 150,
		easing: quadIn
	};

	console.log($is_open);
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex items-center gap-x-8">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">FtS Excavation</span>
				<Img class="h-16 w-16 rounded-sm" src={fts_logo} alt="FtS Excavation" />
			</a>
			<div class="hidden lg:flex lg:gap-x-8 lg:items-center">
				<div class="relative">
					<button
						type="button"
						on:click={toggle_services}
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
						aria-expanded="false"
					>
						Services
						<svg
							class="h-5 w-5 flex-none text-gray-400 transform {$is_services_open
								? 'ease-out duration-200 rotate-180'
								: 'ease-in duration-150 rotate-0'}"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<!-- 'Services' flyout menu, show/hide based on flyout menu state. -->
					<div
						class="absolute pointer-events-none -left-8 top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition {$is_services_open
							? '!pointer-events-auto z-10 duration-200 opacity-100 translate-y-0'
							: '-z-10 duration-150 opacity-0 translate-y-1'}"
					>
						<div class="p-4">
							<div
								class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
							>
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="h-6 w-6 text-gray-600 group-hover:text-primary-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/services/site-preparation" class="block font-semibold text-gray-900">
										Site preparation
										<span class="absolute inset-0" />
									</a>
									<p class="mt-1 text-gray-600">Both commercial and residential</p>
								</div>
							</div>
							<div
								class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
							>
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="h-6 w-6 text-gray-600 group-hover:text-primary-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/services/hardscape" class="block font-semibold text-gray-900">
										Hardscape
										<span class="absolute inset-0" />
									</a>
									<p class="mt-1 text-gray-600">Transform your property today</p>
								</div>
							</div>
							<div
								class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
							>
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="h-6 w-6 text-gray-600 group-hover:text-primary-600"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
										<path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/services/drainage" class="block font-semibold text-gray-900">
										Drainage
										<span class="absolute inset-0" />
									</a>
									<p class="mt-1 text-gray-600">Repair or prevent erosion</p>
								</div>
							</div>
						</div>
						<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
							<a
								href="/contact-us"
								class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
							>
								<svg
									class="h-5 w-5 flex-none text-gray-400"
									viewBox="0 0 24 24"
									aria-hidden="true"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
									<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
								</svg>
								Contact Us
							</a>
							<a
								href={COMPANY.contact.phone.href}
								class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 plausible-event-name=Call+Clicked"
							>
								<svg
									class="h-5 w-5 flex-none text-gray-400"
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
								Call us
							</a>
						</div>
					</div>
				</div>

				<div class="relative">
					<button
						type="button"
						on:click={toggle_about}
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
						aria-expanded="false"
					>
						About
						<svg
							class="h-5 w-5 flex-none text-gray-400 transform {$is_about_open
								? 'ease-out duration-200 rotate-180'
								: 'ease-in duration-150 rotate-0'}"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<!-- 'About' flyout menu, show/hide based on flyout menu state. -->
					<div
						class="absolute pointer-events-none -left-8 top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition {$is_about_open
							? '!pointer-events-auto z-10 ease-out duration-200 opacity-100 translate-y-0'
							: '-z-10 ease-in duration-150 opacity-0 translate-y-1'}"
					>
						<div class="p-4">
							<div
								class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
							>
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="h-6 w-6 text-gray-600 group-hover:text-primary-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/about-us" class="block font-semibold text-gray-900">
										About us
										<span class="absolute inset-0" />
									</a>
									<p class="mt-1 text-gray-600">If you are curious</p>
								</div>
							</div>
							<div
								class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
							>
								<div
									class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
								>
									<svg
										class="h-6 w-6 text-gray-600 group-hover:text-primary-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div class="flex-auto">
									<a href="/jobs" class="block font-semibold text-gray-900">
										Jobs
										<span class="absolute inset-0" />
									</a>
									<p class="mt-1 text-gray-600">Join our team today</p>
								</div>
							</div>
						</div>
						<div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
							<a
								href="/contact-us"
								class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
							>
								<svg
									class="h-5 w-5 flex-none text-gray-400"
									viewBox="0 0 24 24"
									aria-hidden="true"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
									<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
								</svg>
								Contact Us
							</a>
							<a
								href={COMPANY.contact.phone.href}
								class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 plausible-event-name=Call+Clicked"
							>
								<svg
									class="h-5 w-5 flex-none text-gray-400"
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
								Call us
							</a>
						</div>
					</div>
				</div>

				<a
					href="/projects"
					class="unstyled text-sm font-semibold leading-6 text-gray-900 hover:underline">Projects</a
				>

				<a href={COMPANY.contact.phone.href} class="btn btn-sm variant-filled-secondary"
					><span
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
						</svg></span
					><span>Call</span></a
				>
			</div>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				on:click={() => ($is_open = true)}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	{#if $is_open}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div in:fade={fade_in} out:fade={fade_out} class="fixed inset-0 z-10 bg-gray-900/25" />
			<div
				in:fly={fly_in}
				out:fly={fade_out}
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">FtS Excavation</span>
						<Img class="h-16 w-16 rounded-sm" src={fts_logo} alt="FtS Excavation logo" />
					</a>
					<button
						on:click={() => ($is_open = false)}
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<div class="-mx-3">
								<button
									type="button"
									on:click={() => ($is_mobile_services_open = !$is_mobile_services_open)}
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									aria-controls="disclosure-1"
									aria-expanded="false"
								>
									Services
									<!-- Expand/collapse icon, toggle classes based on menu open state. -->
									<svg
										class="h-5 w-5 flex-none transform {$is_mobile_services_open
											? 'ease-out duration-200 rotate-180'
											: 'ease-in duration-150 rotate-0'}"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
								<!-- 'Product' sub-menu, show/hide based on menu state. -->
								{#if $is_mobile_services_open}
									<div
										in:slide={slide_in}
										out:slide={slide_out}
										class="mt-2 space-y-2"
										id="disclosure-1"
									>
										<a
											href="/services/site-preparation"
											class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
											>Site preparation</a
										>
										<a
											href="/services/hardscape"
											class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
											>Hardscape</a
										>
										<a
											href="/services/drainage"
											class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
											>Drainage</a
										>
									</div>
								{/if}
							</div>
							<a
								href="/about-us"
								class="unstyled -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>About us</a
							>
							<a
								href="/projects"
								class="unstyled -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Projects</a
							>
							<a
								href="/financing"
								class="unstyled -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Financing</a
							>
							<a
								href="/jobs"
								class="unstyled -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Jobs</a
							>
							<a
								href="/contact-us"
								class="unstyled -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Contact us</a
							>
						</div>
						<div class="flex flex-col gap-y-2 py-6">
							<a
								href={COMPANY.contact.phone.href}
								class="unstyled btn variant-filled-primary w-full plausible-event-name=Call+Clicked"
								><svg
									class="h-4 w-4 mr-2 flex-none"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
										clip-rule="evenodd"
									/>
								</svg>Call</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
