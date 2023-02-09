import { ping, getList } from './client';
import type { AddListMemberBody } from '@mailchimp/mailchimp_marketing';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	console.log('Executing mailchimp GET function');
	const response = await ping();
	return json(response, { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const data: AddListMemberBody = await request.json();

	const response = { message: 'success' };

	return json(response, { status: 200 });
};
