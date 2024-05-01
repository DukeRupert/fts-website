<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import { COMPANY } from '$lib/constants';
	const eyebrow = 'Cost-Conscious Solutions';
	const title = 'Maximizing budgets, minimizing waste';
	const body =
		'FtS Excavation understands the budgetary constraints of public works projects. Our approach includes meticulous planning, transparent pricing, and ongoing collaboration with city managers. We proactively identify potential savings opportunities throughout the project lifecycle to ensure your budget goes further.';
	const quote = {
		quote:
			'"Frank was wonderful! Came for an estimate and was open to all the work we were hoping for, talked us through it, recorded videos to outline the work, and shared a reasonable estimate."',
		name: 'Jeremy Greer',
		title: 'Local Guide'
	};
</script>

<div class="overflow-hidden bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start"
		>
			<div class="lg:pr-4 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-primary-600">{eyebrow}</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">{body}</p>
					<div class="mt-8">
						<a href={COMPANY.contact.phone.href} class="btn variant-filled-primary">Call today</a>
					</div>
					<figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
						<blockquote class="text-base leading-7">
							<p>{quote.quote}</p>
						</blockquote>
						<figcaption class="mt-6 flex gap-x-4 text-sm leading-6">
							<img
								src="https://lh3.googleusercontent.com/a/ACg8ocINpXyRqQYX-s2jTc_WX5FasghZCPmZa0vcGI-ITtVSG3MERA=w60-h60-p-rp-mo-br100"
								alt=""
								class="h-6 w-6 flex-none rounded-full"
							/>
							<div>
								<span class="font-semibold text-gray-900">{quote.name}</span> – {quote.title}
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<CldImage
				src="https://res.cloudinary.com/rr-wholesale/image/upload/v1714587354/FTS-Excavation/Pioneer_Park_After_sleywx.jpg"
				alt="Product screenshot"
				class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
				height="4032"
				width="3024"
			/>
		</div>
	</div>
</div>
