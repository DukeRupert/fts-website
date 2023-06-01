<script lang="ts">
	import type { Reviews, Testimonial } from './reviews';
	import Column from './Column.svelte';

	const reviews: Testimonial[] = [
		{
			title: 'We cannot be happier!',
			body: 'Frank is the owner and operator and takes great care in making sure the job is done perfectly. His years of experience show in the final product for sure!',
			author: 'Tom Curtin',
			rating: 5
		},
		{
			title: 'He did an outstanding job.',
			body: 'If you want experienced and skilled with the excavation equipment Frank is the best.',
			author: 'DeAnne Davidson',
			rating: 5
		},
		{
			title: 'Always on time. Always professional.',
			body: 'Frank did an incredible job on a leveling project in my yard.  I had the basic concept, but he made it a reality.  He was great to work with from start to end. Extremely knowledgeable and willing to work with me when I had ideas or changes.',
			author: 'Julie Pitt',
			rating: 5
		},
		{
			title: 'Highly recommend FtS-Excavation!',
			body: 'Frank did an excellent job on our site prep for our home addition include digging the foundation and complete site prep and drainage including running trenching for power.',
			author: 'Rick Mitchell',
			rating: 5
		},
		{
			title: 'Flexible. Great work ethic.',
			body: 'Even with snow and rain. Frank was very patient answering all my questions and concerns. My backyard was a disaster jungle. Now it’s so beautiful. Can’t wait to host summer backyard party. Very happy with their work.',
			author: 'Henny Baker',
			rating: 5
		},
		{
			title: 'I would definitely recommend FtS.',
			body: 'We had a drainage problem in a fire pit I had built. He fit Us in and solved Our problem. Frank and His crew were very respectful and worked very hard to get the job done.',
			author: 'Thomas Tannian',
			rating: 5
		},
		{
			title: 'Super easy to work with',
			body: 'Frank is dedicated to having the job done right and will work his best to do whatever you need. We wouldn’t hesitate to trust Frank to come out and do more work for us and we definitely recommend these guys!',
			author: 'LR',
			rating: 5
		},
		{
			title: "I'll continue to trust him",
			body: "Talk about a chill guy, and honest and dedicated, he came out and worked right almost on Christmas eve and New Years. He was here, working, during the holidays. Incredible. That's how dedicated he is to see we get results, resolve the issue, safely and quickly.",
			author: 'M Tickler',
			rating: 5
		},
		{
			title: 'Considerate and communicative',
			body: 'It was such a pleasure to work with FTS on a job no other excavation contractor would take. I will absolutely work with FTS for all future excavation.',
			author: 'Tish Taitano',
			rating: 5
		},
		{
			title: 'My wife and I are very happy',
			body: "I highly recommend FtS excavation! I had a yard covered in ivy and blackberries. Frank not only removed the problem, he shaped a 2nd usable landing, knocked down 100ft+ tree safely and found more driveway and an RV pad we didn't even know we had.",
			author: 'DIY Real Estate',
			rating: 5
		},
		{
			title: 'Principled and professional',
			body: 'Frank carved out a driveway and paths for us and it was very skillfully and beautifully done. He is not only gifted but principled and professional. We were very happy.',
			author: 'Melissa Harris',
			rating: 5
		},
		{
			title: 'Competitive and fair',
			body: 'FTS Excavation put in a driveway drain. Their bid was competitive and fair. The work was done on schedule, with as little disruption as possible. I would certainly call on Frank again for this type of work. They did a great job.',
			author: 'Valarie Bethel',
			rating: 5
		},
		{
			title: 'Personally invested in our welfare',
			body: 'As the pastor of The Ridge Bible Church, I have been very pleased with the work that FTS has done on our campus. Grateful they are there for us, and happy to strongly recommend!',
			author: 'Alec Paul',
			rating: 5
		},
		{
			title: 'Highly recommned',
			body: 'We had an emergency and need some excavation work done. Frank fit us in to his schedule, did an amazing job and his price was very fair. We will absolutely use him again and highly recommend him!',
			author: 'Jessica Horton',
			rating: 5
		},
		{
			title: 'Detail oriented, honest, easy to work with',
			body: ' I highly recommend FTS. I will be hiring them again for future work.',
			author: 'Seth Schermerhorn',
			rating: 5
		},
		{
			title: 'Very thorough in his communication',
			body: 'Does his best to look out for the owner, general contractor and other subs at work and is easy to work with.',
			author: 'Clint Absher',
			rating: 5
		},
		{
			title: 'Thank you Frank & Seth',
			body: 'French drain is keeping my basement dry!! The dry river bed is beautiful and helping guide water away from the house on the other side!',
			author: 'Trisha Cooks',
			rating: 5
		},
		{
			title: 'Quick scheduling',
			body: 'Professional process, quick scheduling, competitive pricing, pride in work and a job well done 5 stars all around!!',
			author: 'Bailey LaVergne',
			rating: 5
		},
		{
			title: 'Great work',
			body: 'Great work, oriented to solutions for the client. We appreciate how quickly the work went and the end result.',
			author: 'Angela Fish',
			rating: 5
		},
		{
			title: 'Very trustworthy',
			body: 'Excellent service with top notch quality.',
			author: 'Christopher Wang',
			rating: 5
		}
	];

	function splitArray(array: Testimonial[], numParts: number) {
		let result: Reviews[] = [];
		for (let i = 0; i < array.length; i++) {
			let index = i % numParts;
			if (!result[index]) {
				result[index] = [];
			}
			result[index].push(array[i]);
		}
		return result;
	}

	let columns: Reviews[] = splitArray(reviews, 2);
</script>

<h2 class="unstyled text-lg font-semibold leading-8 tracking-tight text-primary-600">Reviews</h2>
<p class="unstyled mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
	What Our Client's Say
</p>
<p class="unstyled mt-6 text-lg leading-8 text-gray-600">
	We are thankful to our many customers who took the time to let us know how we have helped :)
</p>

<!-- Review Grid -->
<div
	class="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2"
>
	<!-- Review Columns -->
	<Column reviews={[...columns[0], ...columns[1]]} msPerPixel={10} />
	<!-- <ReviewColumn
					reviews={[...columns[1], ...columns[2][1]]}
					className="hidden md:block"
					reviewClassName={(reviewIndex) => reviewIndex >= columns[1].length && 'lg:hidden'}
					msPerPixel={15}
				/> -->
	<Column reviews={[...columns[1], ...columns[0]]} className="hidden md:block" msPerPixel={15} />

	<div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface-50" />
	<div
		class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-50"
	/>
</div>
