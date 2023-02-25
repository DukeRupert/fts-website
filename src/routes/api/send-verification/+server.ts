import type { RequestHandler } from './$types';
import type { LeadModel } from '$lib/types/postmark';
import { fail, json } from '@sveltejs/kit';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { PROMO_SECRET } from '$env/static/private';
import Postmark from '$lib/postmarkClient';
import { Supabase } from '$lib/db';

const FormData = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email()
});

// Send an email:
export const POST: RequestHandler = async ({ request }) => {
	console.log('Execute sendVerification: ');
	const body = await request.json();
	const valid = FormData.safeParse(body);
	if (!valid.success) {
		console.log('Validation failed');
		return json(
			{ success: false },
			{
				status: 400
			}
		);
	}

	// Generate data to send
	const { data } = valid;
	const support_email = 'service@fts-excavation.com';
	const payload = data?.email ?? 'logan@firefly.llc';
	const token = jwt.sign(payload, PROMO_SECRET);
	const action_url = 'https://fts-excavation.com/api/validate/' + token;
	const model: LeadModel = {
		...data,
		action_url,
		support_email,
		sender_name: 'FtS Customer Service',
		company_name: 'FtS Excavation'
	};

	// Send confirmation email
	console.log('Send confirmation email');
	const res = await Postmark.sendEmailWithTemplate({
		TemplateId: 30415525,
		TemplateModel: model,
		From: support_email,
		To: payload,
		MessageStream: 'outbound',
		TrackOpens: true
	});

	if (res.ErrorCode !== 0) {
		console.log(res);
		throw fail(400, { message: 'Failed to send email' });
	}
	console.log('Success');

	// Insert record into Supabase
	console.log('Insert data into SupaBase');
	const { error: err } = await Supabase.from('leads').insert(data);
	if (err) {
		throw fail(400, { message: JSON.stringify(err.message) });
	}
	console.log('Success');

	return json(model, { status: 200 });
};
