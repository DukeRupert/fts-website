<script lang="ts">
	import site_preparation from '$lib/assets/images/site_preparation.jpeg?run';
	import Img from '@zerodevx/svelte-img';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const title = 'Foundations';
	const description =
		"Choose FtS Excavation for foundations that stand firm and true. With a proven track record of excellence in excavation, we're your trusted partner for building the rock-solid foundations your projects deserve.";

	const solutions = [
		{
			title: 'Site Assessment and Planning',
			body: 'Our site assessment and planning services are the foundation of every successful project. We meticulously analyze the terrain, soil conditions, and project specifications to develop a tailored excavation plan. By combining our expertise with cutting-edge technology, we ensure that every foundation project begins with a solid and well-thought-out plan for precision and efficiency.'
		},
		{
			title: 'Skilled Workforce',
			body: 'Our highly skilled workforce is the backbone of our company. Our team comprises experienced excavators and operators who bring a wealth of knowledge to every job site. We prioritize safety through continuous training and certification, ensuring that our personnel are not only experts in their field but also committed to the well-being of everyone involved in the project.'
		},
		{
			title: 'Insurance and Licensing',
			body: 'We take pride in our commitment to transparency and compliance. Our company holds all the necessary licenses and permits for excavation work, and we maintain comprehensive liability insurance coverage. This not only ensures the legality and legitimacy of our operations but also provides peace of mind to our clients, knowing that their projects are in the hands of a fully accredited and insured company.'
		},
		{
			title: 'Client Relationships',
			body: "Building strong and lasting client relationships is at the heart of what we do. We prioritize open communication, responsiveness, and a client-centric approach. From project inception to completion, we are dedicated to addressing our clients' needs and concerns promptly, fostering trust, and delivering exceptional service. Your satisfaction is our ultimate goal, and we value your feedback throughout our partnership."
		},
		{
			title: 'Quality Assurance',
			body: "At FtS Excavation, our commitment to quality is unwavering. We employ rigorous quality assurance measures to guarantee that each foundation we excavate meets the highest industry standards. Our meticulous inspections and precise execution ensure that your project's foundation is not just solid but built to endure the test of time."
		},
		{
			title: 'Project Management',
			body: "Our dedicated project managers are the driving force behind your project's success. From start to finish, they orchestrate every detail, ensuring efficient scheduling, resource allocation, and seamless communication. With FtS Excavation's expert project management, you can rest assured that your foundation work will be completed on time, within budget, and to your exact specifications."
		}
	];

	const seoData = {
		title: `${title} | FtS Excavation`,
		description: description,
		url: 'https://www.fts-excavation.com/foundations',
		og: {
			src: 'https://www.fts-excavation.com/image/seo/FtS-Excavation_1200.jpg',
			alt: 'FtS Excavation clearing land in the Puget Sound region.',
			mimeType: 'jpeg',
			width: 1200,
			height: 675
		}
	};
</script>

<Seo data={seoData} />
<div class="bg-white py-16 sm:py-32">
	<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="unstyled text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				{title}
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				{description}
			</p>
		</div>
	</div>
	<div class="relative overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<Img
				src={site_preparation}
				alt="Dug out trench for building works of new house concrete foundation on construction site"
				class="mb-[-12%] mt-8 rounded-xl shadow-2xl ring-1 ring-gray-900/10"
			/>
			<div class="relative" aria-hidden="true">
				<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
			</div>
		</div>
	</div>
	<div class="mx-auto mt-16 max-w-2xl sm:mt-20 px-6 lg:px-8 lg:mt-24 lg:max-w-none">
		<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
			{#each solutions as { title, body }}
				<div class="flex flex-col">
					<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
						<svg
							class="h-5 w-5 flex-none text-secondary-600"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" /> <path d="M5 12l5 5l10 -10" />
						</svg>
						{title}
					</dt>
					<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
						<p class="flex-auto">{body}</p>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
	<CallToAction />
</div>
