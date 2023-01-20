<script>
	export let portableText;
</script>

<a href={portableText.value.href} target="_blank" rel="noreferrer">
	<slot />
</a>
