import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import Postmark from '$lib/postmarkClient';
import { HEARTBEAT_TOKEN } from '$env/static/private';

const key = HEARTBEAT_TOKEN || 'none';

export const POST: RequestHandler = async ({ request, fetch }) => {
	console.log('/heartbeat POST');
	const payload = await request.json();
	const token = payload?.token || 'empty';

	// Check for valid token
	if (token !== key) throw error(400, { message: 'Bad token' });

	// Send hearbeat
    const date = new Date().toString();
    const res = await fetch('/api/postmark/lead', {
      method: 'POST',
      body: JSON.stringify({
        first_name: "Logan",
        last_name: "Williams",
        email: "logan@fireflysoftware.dev",
        phone: "406-871-9875",
        message: `Hearbeat test for contact-us form`,
        date: date,
        recipient_name: 'FtS Excavation',
        company_name: 'Firefly Software'
      })
    });
	
	// Great success, do nothing
	if(res.ok) return(json({success: true}, { status: 200}))

	// Uh-oh, send error notification
	await Postmark.sendEmail({
		From: "logan@fireflysoftware.dev",
		To: "logan@fireflysoftware.dev",
		Subject: 'FtS Excavation form error',
		TextBody: JSON.stringify(res)
	});

	// Return error to client
	throw error(500, JSON.stringify({status: res.ErrorCode, statusText: res.statusText}));
};
