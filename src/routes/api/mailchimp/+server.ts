import mailchimp from './client';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	console.log('Executing mailchimp GET function');
	const response = await mailchimp.ping.get();
	return json(response, { status: 200 });
};
