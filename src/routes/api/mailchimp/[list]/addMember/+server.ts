import type { RequestHandler } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { addListMember } from '../../client';

export const POST: RequestHandler = async ({ request, params }) => {
	console.log('Execute /api/mailchimp/addMember');
	const { list } = params;
	const data = await request.json();
	console.log('Start');
	const response = await addListMember(list ?? '', data);
	console.log('End');
	return new Response('success', { status: 200 });
};
