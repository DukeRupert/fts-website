import type { RequestHandler } from '@sveltejs/kit';
import mailchimp from '../../client';

export const POST: RequestHandler = async ({ request, params }) => {
	console.log('Execute /api/mailchimp/[list]/addMember');
	const { list } = params;
	const data = await request.json();

	console.log(`Updating member : ${JSON.stringify(data, null, 2)}`);
	const response = await mailchimp.lists.addListMember(list ?? '', data);

	console.log(response);
	if (response?.status == data?.status) return new Response('success', { status: 200 });

	console.log(`/api/mailchimp/[list]/addMember Error : ${response}`);
	return new Response('Failed to add member to mailchimp list', { status: 500 });
};
