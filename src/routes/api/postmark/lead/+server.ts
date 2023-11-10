import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit'
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

export const POST: RequestHandler = async ({ request, fetch }) => {
    console.log('/postmark/lead POST hit')
    const payload = await request.json() as Payload
    console.log(payload)

    // Postmark configuration
    const from_email = 'logan@fireflysoftware.dev'
    const to_email = 'service@fts-excavation.com'
    const template_id = 21373960
    const track_opens = false;

    // Send message
    const response = await Postmark.sendEmailWithTemplate({
        TemplateId: template_id,
        TemplateModel: payload,
        From: from_email,
        To: from_email,
        MessageStream: 'outbound',
        TrackOpens: track_opens
    });

    // Success
    if (response.ErrorCode == 0) {
        return json(response)
    }

    // Send error notification
    await Postmark.sendEmail({
        From: from_email,
        To: from_email,
        Subject: 'FtS Excavation form error',
        TextBody: JSON.stringify(response)
    });

    // Error
    throw error(500, JSON.stringify(response.ErrorCode))
}