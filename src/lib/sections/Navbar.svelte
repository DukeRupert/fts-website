<!-- header.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { LINKS, COMPANY } from '$lib/constants';
	import drawerOpen from '$lib/utils/drawer';
	// import { slide } from 'svelte/transition';

	let pathname: string;
	$: ({ pathname } = $page.url);

	// let banner = false;
	// function handleClick() {
	// 	banner = false;
	// }

	function openMenu() {
		drawerOpen({ id: 'navigation' });
	}
</script>

<header>
	<div class="relative bg-white">
		<!-- {#if banner}
			<div transition:slide class="bg-primary-500 h-16 w-full flex justify-center items-center ">
				<div class="w-full text-center">
					<a href="/projects/home-garden" class="md:hidden">
						<span class="text-on-primary-token underline">Free tickets to Home+Garden!</span>
					</a>
					<a href="/projects/home-garden" class="hidden md:block">
						<span class="text-on-primary-token underline"
							>Free tickets to Home+Garden at the Tacoma Dome!</span
						>
					</a>
				</div>
				<button
					type="button"
					class="md:mr-4 flex-0 btn-icon text-on-primary-token"
					on:click={handleClick}>X</button
				>
			</div>
		{/if} -->
		<div
			class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
		>
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<div class="flex justify-start lg:w-0 lg:flex-1">
					<a href="/">
						<span class="sr-only">{COMPANY.logo.label}</span>
						<img
							class="h-20 w-auto bg-evergreen-500 rounded-md"
							src="/logo/FtS_Logo_Cream.webp"
							alt="FtS Excavation logo"
							width="390"
							height="409"
						/>
					</a>
				</div>
			</div>
			<div class="-mr-2 -my-2 md:hidden z-10">
				<button
					type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
					on:click={openMenu}
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<nav class="hidden md:flex space-x-10">
				{#each LINKS as { href, label }}
					<a {href} class="unstyled no-underline text-lg hover:underline">
						{label}
					</a>
				{/each}
			</nav>
			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				<a href={COMPANY.contact.phone.href} class="btn variant-filled-tertiary btn-base">
					<span
						><svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg></span
					>

					<span>{COMPANY.contact.phone.string}</span>
				</a>
			</div>
		</div>
	</div>
</header>
