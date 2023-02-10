import jwt from 'jsonwebtoken';
import { PROMO_SECRET } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { Supabase } from '$lib/db';
import { mailChimpListId } from '$lib/constants';
import { createHash } from 'crypto';
import type { UpdateListMemberBody } from '@mailchimp/mailchimp_marketing';

export interface Payload {
	email: string;
	iat: number;
}

export const load: PageServerLoad = async ({ params }) => {
	const { token } = params;

	let validEmail = '';

	try {
		const decoded = jwt.verify(token, PROMO_SECRET);
		console.log(decoded);
		if (decoded && typeof decoded !== 'string') {
			const { email } = decoded as Payload;
			validEmail = email;
		}
		if (decoded && typeof decoded === 'string') {
			validEmail = decoded;
		}
	} catch (error) {
		return {
			success: false,
			message: 'This token has expired.'
		};
	}

	if (!validEmail) {
		return { success: false, message: 'No valid email found.' };
	}

	// update mailchimp
	const subscriberHash = createHash('md5').update(validEmail.toLowerCase()).digest('hex');
	const member: UpdateListMemberBody = {
		email_address: validEmail,
		status: 'unsubscribed'
	};

	console.log(`Unsubscribe member from mailchimp : ${JSON.stringify(member, null, 2)}`);
	const mailChimpResponse = await fetch(
		`https://www.fts-excavation.com/api/mailchimp/${mailChimpListId}/members/${subscriberHash}`,
		{
			method: 'POST',
			body: JSON.stringify(member),
			headers: {
				'content-type': 'application/json'
			}
		}
	);
	if (mailChimpResponse?.status == 200) console.log('Success, member updated.');

	return {
		success: true,
		message: 'You have been unsubscribed.'
	};
};
