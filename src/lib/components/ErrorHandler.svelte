<script lang="ts">
	import type { ZodIssue } from 'zod';
	export let error: ZodIssue[];
	export let name: string;
</script>

{#each error as issue}
	{#each issue.path as path}
		{#if path === name}
			<p><span class="text-warning-500">{issue.message}</span></p>
		{/if}
	{/each}
{/each}
