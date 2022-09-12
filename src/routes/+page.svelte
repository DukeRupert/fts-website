<script lang="ts">
import AlternatingFeatures from "$lib/sections/AlternatingFeatures.svelte";
import GradientFeatures from "$lib/sections/GradientFeatures.svelte";
import Hero from "$lib/sections/Hero.svelte";

    export let data;
    console.log(data)
</script>

<Hero />
<AlternatingFeatures />
<GradientFeatures />
