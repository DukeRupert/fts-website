import type { RequestHandler } from '@sveltejs/kit';
import mailchimp from '../../client';

export const GET: RequestHandler = async ({ request, params }) => {
	const { list } = params;
	console.log(`Execute getList() with listId : ${list}`);
	const response = await mailchimp.lists.getList(list);
	console.log(response);
	return new Response('success', { status: 200 });
};
