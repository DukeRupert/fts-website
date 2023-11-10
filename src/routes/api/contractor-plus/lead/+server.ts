import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit'
import { CONTRACTOR_PLUS_API_KEY } from '$env/static/private';
import { z } from 'zod';

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

    const response = await fetch(base + endpoint, {
		method: 'POST',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
		},
        body: JSON.stringify(newLead)
	});

    if (response.ok) return json({ success: true, error: null })
    console.log(response)
    let data = await response.json()
    console.log(data)
    throw error(response.status, JSON.stringify({ success: false, error: response.statusText}))
}