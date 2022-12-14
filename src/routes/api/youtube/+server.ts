import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';
import { GOOGLE_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const { channelId, maxResults } = body;
	// const channelId = 'UC_LbjVWjiiFg3h9lB6rcvGQ';
	// const maxResults = 3;
	const key = GOOGLE_API_KEY;

	const url = `https://youtube.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channelId}&maxResults=${maxResults}&type=video&key=${key}`;

	const response = await fetch(url);

	const data = await response.json();

	if (data) {
		return json(data);
	}

	throw error(400, JSON.stringify(body));
};
