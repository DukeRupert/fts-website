import type { Lead } from '$lib/contractorPlus/types/lead';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import validator from 'validator';
import { superValidate } from 'sveltekit-superforms/server';
import Postmark from '$lib/postmarkClient';

const schema = z.object({
  first_name: z.string().max(50, 'Must be less than 50 characters'),
  last_name: z.string().max(50, 'Must be less than 50 characters'),
  email: z.string().email(),
  phone: z.string().refine(validator.isMobilePhone),
  description: z.string().max(1500, 'Must be less than 1500 characters'),
  location: z.string().max(100, 'Must be less than 100 characters'),
  service: z.string(),
  password: z.string()
});

export const load = async () => {
  // Server API:
  const form = await superValidate(schema);

  // Unless you throw, always return { form } in load and form actions.
  return { form };
};

export const actions = {
  default: async ({ request, fetch }) => {
    console.log('Execute contact us form action')
    const form = await superValidate(request, schema);
    console.log('POST', form);

    // Convenient validation check:
    if (!form.valid) {
      // Again, return { form } and things will just work.
      return fail(400, { form });
    }

    // Bot check
    if (form.data.password !== '') {
      return fail(400, { form });
    }

    // Build lead object with source code for 'other'
    const source = '856462';
    let lead: Lead = {
      first_name: form.data.first_name,
      last_name: form.data.last_name,
      emails: [
        {
          is_primary: '1',
          value: form.data.email
        }
      ],
      phone_numbers: [
        {
          value: form.data.phone.replace(/\D/g,''), // Remove non-numeric characters
          is_primary: '1',
          code: '1'
        }
      ],
      description: form.data.location + ' - ' + form.data.service + ' - ' + form.data.description,
      source: source
    };

    try {
      // Pass lead to contractor plus
      const res = await fetch('/api/contractor-plus/lead', {
        method: 'POST',
        body: JSON.stringify(lead)
      });

      // Handle error
      if (!res.ok) {
        const data = await res.json();
        console.log(data);
        return fail(400, { form, success: false, error: data });
      }
    } catch (error) {
      console.log(error);
      // Send error notification
      await Postmark.sendEmail({
        From: 'logan@fireflysoftare.dev',
        To: 'logan@fireflysoftare.dev',
        Subject: 'FtS Excavation form error',
        TextBody: JSON.stringify(error)
      });
    }

    // Notify client of lead via email
    const date = new Date().toString();
    const notify = await fetch('/api/postmark/lead', {
      method: 'POST',
      body: JSON.stringify({
        first_name: form.data.first_name,
        last_name: form.data.last_name,
        email: form.data.email,
        phone: form.data.phone,
        message: `${form.data.location} - ${form.data.service}`,
        date: date,
        recipient_name: 'FtS Excavation',
        company_name: 'Firefly Software'
      })
    });

    // Success! Yep, return { form } here too
    return { form, success: true, error: null };
  }
} satisfies Actions;
