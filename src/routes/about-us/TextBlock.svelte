<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import { PortableText } from '@portabletext/svelte';
	export let portableText: CustomBlockComponentProps;
	const {
		value: { body }
	} = portableText;
</script>

<article
	class="prose prose-slate max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
>
	<PortableText value={body} components={{}} />
</article>
