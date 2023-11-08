<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);

	const handleClick = async () => {
		const lead = {
			salutation: 'ms',
			first_name: 'Tiana',
			last_name: 'Schroeder',
			title: 'Looking for kitchen remodelling.',
			source: '2617',
			description: 'Change entire look and feel of kitchen.',
			company: 'Company Name',
			website: 'http://www.company-name.com',
			address: 'SL Road',
			address_2: '1663 Branham Ln',
			city: 'San Jose',
			state: 'California',
			zip: '95118',
			country: '1',
			tags: '',
			assigned: '264',
			is_public: '1',
			phone_numbers: [
				{
					value: '8585361200',
					is_primary: '1',
					code: '1'
				}
			],
			emails: [
				{
					value: 'tiana.schroeder@contractorplus.app',
					is_primary: '1'
				}
			]
		};

		const res = await fetch('/api/contractor-plus/lead', {
			method: 'POST',
			body: JSON.stringify(lead)
		})
		const data = await res.json()
		console.log(data)
	};
</script>

<div class="pt-20 px-6 flex flex-col py-4">
	<h1>Leads</h1>
	<button type="button" class="btn variant-filled-primary" on:click={handleClick}>Create lead</button>
</div>
