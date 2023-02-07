<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import Features from './Features.svelte';

	export let data: InputValue;
</script>

<PortableText value={data} components={{ types: { features: Features } }} />
