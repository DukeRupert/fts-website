<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/sanityClient';
	import { PortableText } from '@portabletext/svelte';
	import Code from '$lib/portableText/Code.svelte';
	import Link from '$lib/portableText/Link.svelte';
	import ImageBlock from '$lib/portableText/ImageBlock.svelte';
	import SanityImage from '$lib/SanityImage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { post } = data;
</script>

{#if post}
	<SvelteSeo
		title={post.title}
		description={post.excerpt}
		keywords="excavation construction services contractor puget sound puyallup drainage grading"
		openGraph={{
			title: post.title,
			description: post.excerpt,
			url: $page.url.href,
			type: 'article',
			article: {
				publishedTime: post.publishedAt
			},
			images: [
				{
					url: urlFor(post.image).width(600).height(600),
					width: 600,
					height: 600,
					alt: post.image.alt
				}
			]
		}}
	/>
{/if}

<div class="relative py-16 bg-white overflow-hidden">
	<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
		<div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
			<svg
				class="absolute top-12 left-full transform translate-x-32"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
			</svg>
			<svg
				class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="f210dbf6-a58d-4871-961e-36d5016a0f49"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
			</svg>
			<svg
				class="absolute bottom-12 left-full transform translate-x-32"
				width="404"
				height="384"
				fill="none"
				viewBox="0 0 404 384"
			>
				<defs>
					<pattern
						id="d3eb07ae-5182-43e6-857d-35c643af9034"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
			</svg>
		</div>
	</div>
	<article class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-lg max-w-prose mx-auto">
			<h1>
				<span
					class="block text-base text-center text-evergreen-500 font-semibold tracking-wide uppercase"
					>{new Date(post.publishedAt).toLocaleDateString('en', {
						month: 'long',
						day: '2-digit',
						year: 'numeric'
					})}</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>{post.title}</span
				>
			</h1>
		</div>
		<div class="mt-6 prose prose-lg prose-img:rounded-md text-gray-500 mx-auto">
			<div class="flex items-center justify-center">
				{#if post.image}
					<SanityImage image={post.image} />
				{/if}
			</div>

			<PortableText
				value={post.body}
				components={{
					types: {
						code: Code,
						image: ImageBlock
					},
					marks: {
						link: Link
					}
				}}
			/>
			<div
				class="py-16 px-4 prose-a:no-underline flex items-center justify-center sm:px-6 sm:py-24 lg:px-8"
			>
				<div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
					<a href="/contact-us" class="btn btn-filled-primary text-token">
						<svg
							class="h-6 w- mr-2"
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
							<path
								d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
							/></svg
						>
						Contact Us
					</a>
					<a href="/projects" class="btn btn-filled-tertiary text-token">
						<svg
							class="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" />
							<path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
						</svg>

						View Projects
					</a>
				</div>
			</div>
		</div>
	</article>
</div>
