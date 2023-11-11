import type { RequestHandler } from './$types';
import type { PromoModel } from '$lib/types/postmark';
import type { Lead } from '$lib/contractorPlus/types/lead';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';
import Postmark from '$lib/postmarkClient';

const FormData = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email()
});

// Send an email:
export const POST: RequestHandler = async ({ request, fetch }) => {
	console.log('Execute promo code: ');
	const body = await request.json();
	const payload = FormData.safeParse(body);
	if (!payload.success) {
		console.log('Validation failed');
		throw error(500, JSON.stringify({ success: false, message: 'Invalid form data.' }));
	}

	// Generate code
	const generateCode = (stringLength = 1) => {
		let randomStr = '';
		const characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZqeytrpolkadjsghfgmnbzxcvnQPOWEYRKASJHDGFMNBCVX--___-_jsfhrlg-_124903564576986483658fgh4sdfh687e4h897WETHJ68F7G4688471877GFHJFFGJ87469857468746hfghwrtiyj4598yhdjkhgnk';
		for (let index = 0; index < stringLength; index++) {
			randomStr += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return randomStr;
	};

	console.log('Generating code');
	const code = generateCode(5);

	console.log('Sending email to lead');
	// Send promo email
	const model: PromoModel = {
		first_name: payload.data.first_name ?? 'Valued',
		last_name: payload.data.last_name ?? 'Customer',
		promo_value: '150',
		promo_code: code,
		action_url: 'www.fts-excavation.com/contact-us',
		unsubscribe_url: `https://www.fts-excavation.com/unsubscribe?email=${payload.data.email}`,
		sender_name: 'FtS Customer Service',
		company_name: 'FtS Excavation'
	};

	const res = await Postmark.sendEmailWithTemplate({
		TemplateId: 30495956,
		TemplateModel: model,
		From: 'service@fts-excavation.com',
		To: payload.data.email,
		MessageStream: 'outbound',
		TrackOpens: true
	});

	if (res.ErrorCode !== 0) {
		console.log('Error sending email:');
		console.log(res);
		throw error(400, JSON.stringify({ success: false, message: 'Failed to send email' }));
	}

	// Enter lead into Contractor+
	console.log('Create Contractor+ lead');

	const lead: Lead = {
		first_name: payload.data.first_name,
		last_name: payload.data.last_name,
		emails: [{ value: payload.data.email, is_primary: '1' }],
		source: '856462'
	};

	const leadResponse = await fetch('/api/contractor-plus/lead', {
		method: 'POST',
		body: JSON.stringify(lead)
	});

	// Handle error
	if (!leadResponse.ok) {
		const data = await leadResponse.json();
		console.log(data);
		throw error(
			400,
			JSON.stringify({ success: false, message: 'Error sending lead to Contractor+', error: data })
		);
	}

	// Notify client of lead via email
	const date = new Date().toString();
	const notify = await fetch('/api/postmark/lead', {
		method: 'POST',
		body: JSON.stringify({
			first_name: payload.data.first_name,
			last_name: payload.data.last_name,
			email: payload.data.email,
			phone: '',
			message: '',
			date: date,
			recipient_name: 'FtS Excavation',
			company_name: 'Firefly Software'
		})
	});

	return json({ model: model, success: true, error: null });
};
