import type { RequestHandler } from './$types';
import { POSTMARK_FROM_EMAIL, POSTMARK_TO_EMAIL } from '$env/static/private'
import { error, json } from '@sveltejs/kit';
import Postmark from '$lib/postmarkClient';

interface Payload {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	message: string;
	date: string;
	recipient_name: string;
	company_name: string;
}

export const POST: RequestHandler = async ({ request }) => {
	console.log('/postmark/lead POST hit');
	const payload = (await request.json()) as Payload;
	console.log(payload);

	// Postmark configuration
	const from_email = POSTMARK_FROM_EMAIL || "logan@fireflysoftware.dev" 
	const to_email = POSTMARK_TO_EMAIL || 'logan@fireflysoftware.dev';
	const template_id = 21373960;
	const track_opens = false;

	// Send message
	const response = await Postmark.sendEmailWithTemplate({
		TemplateId: template_id,
		TemplateModel: payload,
		From: from_email,
		To: to_email,
		MessageStream: 'outbound',
		TrackOpens: track_opens
	});

	// Great Success
	if (response.ErrorCode == 0) {
		return json(response);
	}

	// Send error notification
	await Postmark.sendEmail({
		From: from_email,
		To: from_email,
		Subject: 'FtS Excavation form error',
		TextBody: JSON.stringify(response)
	});

	// Return error to client 
	throw error(500, JSON.stringify(response.ErrorCode));
};
