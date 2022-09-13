<script lang="ts">
    import type {PageData} from './$types';
import AlternatingFeatures from "$lib/sections/AlternatingFeatures.svelte";
import GradientFeatures from "$lib/sections/GradientFeatures.svelte";
import Hero from "$lib/sections/Hero.svelte";
import Posts from "$lib/sections/Posts.svelte";

export let data: PageData;
</script>

<Hero />
<AlternatingFeatures />
<GradientFeatures />
<Posts posts={data.data} />
