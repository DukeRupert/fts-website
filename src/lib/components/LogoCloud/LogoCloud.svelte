<script lang="ts">
	interface Affiliate {
		name: string;
		href: string;
		img: {
			src: string;
			alt: string;
		};
		height: number;
		width: number;
	}

	const affiliations: Affiliate[] = [
		{
			name: 'Puyallup / Sumner Chamber of Commerce',
			href: 'https://www.puyallupsumnerchamber.com/',
			img: {
				src: '/image/PSChamberLogo_2016_Square.webp',
				alt: 'Puyallup / Sumner Chamber of Commerce logo'
			},
			height: 112,
			width: 112
		},
		{
			name: 'Master builders association member',
			href: 'https://mbamemberzone.tacomawebsite.net/list/member/fts-excavation-4695',
			img: {
				src: '/image/Proud-Member-Badge-Web.webp',
				alt: 'Proud member badge of the Master builders association'
			},
			height: 112,
			width: 112
		},
		{
			name: 'Generous Network',
			href: 'https://countercultureleaders.com/generous-network',
			img: {
				src: '/image/GenerousNetwork.webp',
				alt: 'Generous Network logo'
			},
			height: 112,
			width: 112
		},
		{
			name: 'Tacoma/Pierce County Association of REALTORS',
			href: 'https://www.tpcar.org/',
			img: {
				src: '/image/TPCAR_affiliate_logo_2023_01.webp',
				alt: 'Tacoma/Pierce County Association of REALTORS logo'
			},
			height: 112,
			width: 224
		},
		{
			name: 'South Sound Networking',
			href: 'https://www.southsoundnetworking.com/',
			img: {
				src: '/image/logos/south_sound_networking.webp',
				alt: 'south sound networking logo'
			},
			height: 55,
			width: 319
		}
	];
</script>

<div id="logo-cloud" class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
				A proud member of these Puget Sound organizations
			</h2>
			<div
				class="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"
			>
				{#each affiliations as { href, img, height, width }}
					<a {href} class="col-span-2 w-full object-contain object-left lg:col-span-1">
						<img
							class="w-full max-h-24 object-contain object-center"
							{height}
							{width}
							src={img.src}
							alt={img.alt}
						/></a
					>
				{/each}
			</div>
		</div>
	</div>
</div>
