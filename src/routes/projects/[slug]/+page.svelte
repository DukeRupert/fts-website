<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { PortableText } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/urlFor';
	import Code from '$lib/portableText/Code.svelte';
	import Link from '$lib/portableText/Link.svelte';
	import ImageBlock from '$lib/portableText/ImageBlock.svelte';
	import MainImage from '$lib/sanity/MainImage.svelte';
	import type { PageData } from './$types';
	import CallToAction from '$lib/sections/CallToAction.svelte';

	export let data: PageData;
	const { post } = data;

	const seoData = {
		title: `FtS Excavation | ${post.title}`,
		description: `${post.excerpt}`,
		url: `https://www.fts-excavation.com/projects/${post.slug.current}`,
		og: {
			src: urlFor(post.mainImage.asset)
				.width(1200)
				.height(675)
				.format('webp')
				.crop('focalpoint')
				.quality(80)
				.toString(),
			alt: post.mainImage.alt,
			mimeType: 'webp',
			width: 1200,
			height: 675
		},
		published_at: post.publishedAt
	};
</script>

<Seo data={seoData} type="article" />
<div class="relative py-16 mt-28 bg-white overflow-hidden">
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
				{#if post.mainImage}
					<MainImage image={post?.mainImage} />
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
			<CallToAction />
		</div>
	</article>
</div>
