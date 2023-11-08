import type { PageServerLoad } from './$types';
import { CONTRACTOR_PLUS_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('https://api.contractorplus.app/api/rest/lead/source', {
		method: 'GET',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY
		}
	});
	const leads = response.json()
	return {leads};
};
