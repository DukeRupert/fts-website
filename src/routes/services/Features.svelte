<script lang="ts">
	import { urlFor } from '$lib/sanity/urlFor';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { Feature } from '$lib/types/sanity';

	export let portableText: CustomBlockComponentProps<Feature>;
	const { value } = portableText;
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="text-center">
			<h1 class="unstyled text-base font-semibold text-primary-500 tracking-wide uppercase">
				{value?.heading}
			</h1>

			<h3 class="unstyled mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
				{value?.title}
			</h3>
			<p class="unstyled max-w-xl mt-4 mx-auto text-xl">{value?.tagline}</p>
		</div>
	</div>
	<div class="relative overflow-hidden pt-16">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<img
				src={urlFor(value?.image.asset).width(1200).height(800).format('webp').url()}
				alt="a pic"
				class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
				width="1200"
				height="800"
			/>
			<div class="relative" aria-hidden="true">
				<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
			</div>
		</div>
	</div>
	<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
		<dl
			class="mx-auto grid max-w-4xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16"
		>
			{#if value?.features}
				{#each value.features as item}
					{#if item.useImage && item?.image?.asset}
						<div class="sm:flex">
							<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
								<img
									src={urlFor(item.image.asset).width(600).height(400).format('webp').url()}
									alt={item.image.alt}
									height="400"
									width="600"
									class="h-48 w-full border border-gray-300 bg-white text-gray-300 sm:w-48 object-cover rounded-md"
								/>
							</div>
							<div>
								<h2 class="text-lg font-bold">{item.title}</h2>
								<p class="mt-1">
									{item.description}
								</p>
								{#if item?.link}
									<a
										class="unstyled mt-2 btn btn-sm variant-ringed-primary hover:variant-filled-primary"
										href={item.link}>Learn More</a
									>
								{/if}
							</div>
						</div>
					{:else if item.useIcon && item.icon}
						<div class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<span class="absolute left-0 text-primary-500">{@html item.icon.svg}</span>
								<h2>{item.title}</h2>
							</dt>
							<dd class="inline">
								{item.description}{#if item?.link}
									<a class="mt-2" href={item.link}>Learn More</a>
								{/if}
							</dd>
						</div>
					{/if}
				{/each}
			{/if}
		</dl>
	</div>
</div>
