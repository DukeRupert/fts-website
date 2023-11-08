<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<h1>Leads</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>
