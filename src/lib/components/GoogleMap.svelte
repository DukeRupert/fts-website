<script lang="ts">
	import { COMPANY } from '$lib/constants';
	import { GenericEmbed } from 'sveltekit-embed';

	export let width = '600';
	export let height = '450';
</script>

<GenericEmbed {height} title="Google map" src={COMPANY.mapEmbed} frameborder="0" SameSite="None" />
