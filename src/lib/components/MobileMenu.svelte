<script lang="ts">
	import { LINKS, COMPANY } from '$lib/constants';
	import NavItem from '$lib/components/NavItem.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import { drawerClose } from '$lib/utils/drawer';
</script>

<div id="mobile-menu" class="flex flex-col py-4 px-6">
	<div class="flex flex-col space-y-4 pt-2 pb-3">
		<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
		{#if LINKS}
			{#each LINKS as link}
				<NavItem data={link} />
			{/each}
		{/if}
	</div>
	<hr />
	<div class="flex justify-center space-x-6 pt-5 pb-6 px-5 border-none">
		<SocialMedia color="text-evergreen-500" hover="hover:text-evergreen-700" />
	</div>
	<div class="flex flex-col mt-6">
		<a href="/contact-us" class="w-full btn variant-filled-primary" on:click={() => drawerClose()}>
			<span
				><svg
					class="h-6 w-6"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
					<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg
				></span
			>
			<span>Contact Us</span>
		</a>
		<div class="mt-6">
			<a href={COMPANY.contact.phone.href} class="w-full btn variant-filled-secondary">
				<span
					><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg></span
				>
				<span>Call Us</span>
			</a>
		</div>
	</div>
</div>
