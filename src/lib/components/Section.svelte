<script lang="ts">
	export let id = '';
</script>

<section {id} aria-labelledby={id + '-title'} class="relative">
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
		<div class="pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-24 lg:pb-56 xl:col-span-6">
			<slot />
		</div>
	</div>
</section>
