<script lang="ts">
	export let data = {
		title: 'Get in touch',
		subtitle: `Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis
			eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit
			distinctio.`,
		image: {
			src: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100',
			alt: 'Describe me'
		}
	};
</script>

<div class="relative">
	<div class="absolute inset-0">
		<img class="h-full w-full object-cover" src={data.image.src} alt={data.image.alt} />
		<div
			class="absolute inset-0 bg-evergreen-800 mix-blend-multiply opacity-50"
			aria-hidden="true"
		/>
	</div>
	<div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
			{data.title}
		</h1>
		<!-- <p class="text-token mt-6 max-w-3xl text-xl font-bold ">
			{data.subtitle}
		</p> -->
	</div>
</div>
