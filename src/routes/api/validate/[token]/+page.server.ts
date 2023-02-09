import { fail } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { PROMO_SECRET } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { Supabase } from '$lib/db';
import type { PromoModel } from '$lib/types/postmark';
import Postmark from '$lib/postmarkClient';
import { mailChimpListId } from '$lib/constants';

export interface Payload {
	email: string;
	iat: number;
}

const generateCode = (stringLength = 1) => {
	let randomStr = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZqeytrpolkadjsghfgmnbzxcvnQPOWEYRKASJHDGFMNBCVX--___-_jsfhrlg-_124903564576986483658fgh4sdfh687e4h897WETHJ68F7G4688471877GFHJFFGJ87469857468746hfghwrtiyj4598yhdjkhgnk';
	for (let index = 0; index < stringLength; index++) {
		randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return randomStr;
};

export const load: PageServerLoad = async ({ params }) => {
	const { token } = params;

	let validEmail = '';

	try {
		const decoded = jwt.verify(token, PROMO_SECRET);
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

	// check if record exists and has not already been verified
	const { data, error } = await Supabase.from('leads').select().eq('email', validEmail).single();

	if (error) throw fail(400, { success: false, message: 'No record found for this email.' });

	if (data?.verified === true) {
		return { success: false, message: 'This email has already been validated.' };
	}

	// update Supabase record
	const code = generateCode(5);
	const { data: record, error: err } = await Supabase.from('leads')
		.update({
			verified: true,
			verified_at: new Date().toUTCString(),
			promo_waive_equipment_fee: code
		})
		.eq('email', validEmail)
		.select()
		.single();
	if (err) return { success: false, message: 'Failure updating record' };

	// Send promo email
	const model: PromoModel = {
		first_name: data?.first_name ?? 'Valued',
		last_name: data?.last_name ?? 'Customer',
		promo_value: '150',
		promo_code: code,
		action_url: 'www.fts-excavation.com/contact-us',
		unsubscribe_url: `https://www.fts-excavation.com/api/unsubscribe/${token}`,
		sender_name: 'FtS Customer Service',
		company_name: 'FtS Excavation'
	};

	const res = await Postmark.sendEmailWithTemplate({
		TemplateId: 30495956,
		TemplateModel: model,
		From: 'service@fts-excavation.com',
		To: validEmail,
		MessageStream: 'outbound',
		TrackOpens: true
	});

	// add to mailchimp list
	const member = {
		email_address: record?.email,
		status: 'subscribed',
		email_type: 'html',
		merge_fields: {
			FNAME: record?.first_name ?? '',
			LNAME: record?.last_name ?? ''
		}
	};

	console.log(`Adding verified member to mailchimp : ${JSON.stringify(member, null, 2)}`);
	const mailChimpResponse = await fetch(
		`https://www.fts-excavation.com/api/mailchimp/${mailChimpListId}/addMember`,
		{
			method: 'POST',
			body: JSON.stringify(member),
			headers: {
				'content-type': 'application/json'
			}
		}
	);
	if (mailChimpResponse?.status == 200) console.log('Success, verified member added.');

	if (res.ErrorCode !== 0) {
		return { success: false, message: 'An error occured when sending promo code email.' };
	}

	return {
		success: true,
		message: 'Your email has been verified.'
	};
};
