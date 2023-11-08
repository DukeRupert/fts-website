import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit'
import { CONTRACTOR_PLUS_API_KEY } from '$env/static/private';

const base  = 'https://api.contractorplus.app/api/rest'

export const GET: RequestHandler = async ({ request, fetch }) => {
    const endpoint = '/lead'

    const response = await fetch(base + endpoint, {
		method: 'GET',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY
		}
	});

    const data = await response.json()

    return json(data)
}

export const POST: RequestHandler = async ({ request, fetch }) => {
    console.log('/lead POST hit')
    const endpoint = '/lead'
    const newLead = await request.json()
    console.log(newLead)

    // const response = await fetch(base + endpoint, {
	// 	method: 'GET',
	// 	headers: {
	// 		'third-party-api-token': CONTRACTOR_PLUS_API_KEY
	// 	}
	// });

    return json({ success: true })
}