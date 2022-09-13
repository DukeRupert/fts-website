import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import client from '$lib/sanityClient';

export const load: PageLoad = async () => {
	const query = '*[_type == "post"][0..2] | order(publishedAt desc)';
	const data: Post[] = await client.fetch(query);

	return {
		data
	};
};
