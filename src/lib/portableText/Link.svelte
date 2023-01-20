<script lang="ts">
	import type { PortableTextMarkType } from '@portabletext/svelte/ptTypes';
	export let portableText: PortableTextMarkType;
</script>

<a href={portableText.value.href} target="_blank" rel="noreferrer">
	<slot />
</a>
