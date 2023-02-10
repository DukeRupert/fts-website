import mailchimp from '../../../client';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ params, request }) => {
	const { list, subscriber_hash } = params;
	const member = await request.json();
	console.log(`/api/${list}/members/${subscriber_hash}`);
	console.log(`Executing member update : ${JSON.stringify(member, null, 2)}`);
	const response = await mailchimp.lists.updateListMember(list, subscriber_hash, member);
	return new Response('success', { status: 200 });
};
