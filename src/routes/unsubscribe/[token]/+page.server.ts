import jwt from 'jsonwebtoken';
import { PROMO_SECRET } from '$env/static/private';
import type { PageServerLoad } from './$types';
import { Supabase } from '$lib/db';

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

	const { error: err } = await Supabase.from('leads')
		.update({
			unsubscribed: true,
			unsubscribed_at: new Date().toUTCString()
		})
		.eq('email', validEmail);

	if (err) return { success: false, message: 'Failure updating record' };

	return {
		success: true,
		message: 'You have been unsubscribed.'
	};
};
