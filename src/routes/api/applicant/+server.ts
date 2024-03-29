import type { RequestHandler } from './$types';
import Postmark from '$lib/postmarkClient';

// Send an email:
export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	// Add date
	const date = new Date().toString();
	const data = { ...body, date: date };

	const message = { message: 'nice try bot' };

	// Password field is hidden, reject bot attempt
	if (data.password !== '') {
		return new Response(JSON.stringify(message), {
			status: 201,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Send message
	try {
		const response = await Postmark.sendEmailWithTemplate({
			TemplateId: 29832037,
			TemplateModel: data,
			From: 'logan@fireflysoftware.dev',
			To: 'service@fts-excavation.com',
			MessageStream: 'outbound',
			TrackOpens: true
		});

		// Success
		if (response.ErrorCode == 0) {
			return new Response(JSON.stringify(response), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Error
		return new Response(JSON.stringify(response), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		// Send error notification
		await Postmark.sendEmail({
			From: 'logan@fireflysoftware.dev',
			To: 'logan@fireflysoftware.dev',

			Subject: 'FtS Website form error',
			TextBody: JSON.stringify(err)
		});

		return new Response(JSON.stringify(err), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
