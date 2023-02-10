import { FTS_MAILCHIMP_API_KEY, FTS_MAILCHIMP_SERVER_PREFIX } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import type {
	AddListMemberBody,
	MembersSuccessResponse,
	MemberErrorResponse
} from '@mailchimp/mailchimp_marketing';
import { json, error } from '@sveltejs/kit';

mailchimp.setConfig({
	apiKey: FTS_MAILCHIMP_API_KEY,
	server: FTS_MAILCHIMP_SERVER_PREFIX
});

export default mailchimp;

export async function ping() {
	console.log('Executing mailchimp ping');
	const response = await mailchimp.ping.get();
	return response;
}

export async function getList(listId: string) {
	console.log('Execute getList()');
	const response = await mailchimp.lists.getList(listId);
	console.log(response);
}

export async function addListMember(listId: string, member: AddListMemberBody) {
	console.log('Executing addListMember()');
	try {
		const response = await mailchimp.lists.addListMember(listId, member);
		console.log('Success in addListMember()');
		console.log(response);
		return response;
	} catch (err) {
		console.log('Error in addListMember()');
		console.log(err);
		throw error(400, JSON.stringify({ success: false }));
	}
}
