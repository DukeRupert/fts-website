import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const load = async ({ url }) => {
	const email = url.searchParams.get('email');

	const o = {
		email: email ?? ''
	};
	// Server API:
	const form = await superValidate(o, schema);

	// Unless you throw, always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, schema);
		console.log('DELETE', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// Bot check
		if (form.data.password !== '') {
			return fail(400, { form });
		}

		// Remove lead from Contractor+
		const res = await fetch('/api/contractor-plus/lead', {
			method: 'DELETE',
			body: JSON.stringify({ email: form.data.email })
		});

		// Handle error
		if (!res.ok) {
			const data = await res.json();
			console.log(data);
			return fail(400, { form });
		}

		// Success! Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
