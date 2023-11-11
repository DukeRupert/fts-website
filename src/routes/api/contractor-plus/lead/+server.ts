import type { RequestHandler } from './$types';
import type { LeadList } from '$lib/contractorPlus/types/lead';
import { error, json } from '@sveltejs/kit';
import { CONTRACTOR_PLUS_API_KEY } from '$env/static/private';

const base = 'https://api.contractorplus.app/api/rest';
const endpoint = '/lead';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch(base + endpoint, {
		method: 'GET',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY
		}
	});

	const data = await response.json();

	return json(data);
};

export const POST: RequestHandler = async ({ request, fetch }) => {
	console.log('/lead POST hit');
	const endpoint = '/lead';
	const newLead = await request.json();
	console.log(newLead);

	const response = await fetch(base + endpoint, {
		method: 'POST',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newLead)
	});

	if (response.ok) return json({ success: true, error: null });
	console.log(response);
	let data = await response.json();
	console.log(data);
	throw error(response.status, JSON.stringify({ success: false, error: response.statusText }));
};

export const DELETE: RequestHandler = async ({ request, fetch }) => {
	console.log('/lead DELETE hit');
	const endpoint = '/lead';
	const { email } = await request.json();

	// Check if lead exists
	const res = await fetch(base + endpoint, {
		method: 'GET',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY
		}
	});

	const leads = (await res.json()) as LeadList;
	const lead = leads.list.find((value) => value?.emails?.[0]?.value === email);

	if (lead === undefined) {
		return json({ success: true, error: null });
	}

	// Extract id from lead
	const id = lead?.lead_id;

	if (!id) {
		console.log('No id found');
		console.log(id);
		return json({ success: true, error: null });
	}

	// Delete lead
	const response = await fetch(base + endpoint + '/' + id, {
		method: 'DELETE',
		headers: {
			'third-party-api-token': CONTRACTOR_PLUS_API_KEY,
			Accept: 'application/json'
		}
	});

	if (!response.ok) {
		throw error(500, JSON.stringify({ success: false, error: response.statusText }));
	}

	return json({ success: true, error: null });
};
