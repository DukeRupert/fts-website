import type { PageLoad } from './$types';
import client from '$lib/sanityClient';

export const load: PageLoad = async () => {
	const query = '*[_type == "post"]';
	const data = await client.fetch(query);

	return {
		data
	};
};
