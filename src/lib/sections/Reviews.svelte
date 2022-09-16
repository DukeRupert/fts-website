<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';

	export let testimonials = [
		{
			firstName: 'Tom',
			lastName: 'Curtin',
			rating: 5,
			review:
				'FtS Excavation has completed a couple projects at our home and we cannot be happier! Frank is the owner and operator and takes great care in making sure the job is done perfectly. His years of experience show in the final product for sure!',
			image: { src: '/image/profile/tomCurtin.png', alt: 'profile image for Tom Curtin' }
		},
		{
			firstName: 'DeAnne',
			lastName: 'Davidson',
			rating: 5,
			review:
				'Frank did our complicated drainage system which required careful workmanship cutting a trench between existing landscape and fitting machinery between gate posts with only a quarter inch to spare.  He did an outstanding job. If you want experienced and skilled with the excavation equipment Frank is the best.',
			image: { src: '/image/profile/deanneDavidson.png', alt: 'profile image for DeAnne Davidson' }
		},
		{
			firstName: 'Julie',
			lastName: 'Pitt',
			rating: 5,
			review:
				'Frank did an incredible job on a leveling project in my yard.  I had the basic concept, but he made it a reality.  He was great to work with from start to end.  Always on time.  Always professional.  Extremely knowledgeable and willing to work with me when I had ideas or changes.',
			image: { src: '/image/profile/juliePitt.png', alt: 'profile image for Julie Pitt' }
		},
		{
			firstName: 'Rick',
			lastName: 'Mitchell',
			rating: 5,
			review:
				'Frank did an excellent job on our site prep for our home addition include digging the foundation and complete site prep and drainage including running trenching for power.  Highly recommend Frank and FTS-Excavation!',
			image: { src: '/image/profile/rickMitchell.png', alt: 'profile image for Rick Mitchell' }
		}
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section
	class="overflow-hidden bg-gradient-to-r from-evergreen-400 to-evergreen-700 py-12 md:py-20 lg:py-24"
>
	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<Carousel items={testimonials} />
	</div>
</section>
