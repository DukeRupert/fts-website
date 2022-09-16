import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import client from '$lib/sanityClient';

export const load: PageLoad = async () => {
	const query = '*[_type == "post"] | order(publishedAt desc) [0..2]';
	const data: Post[] = await client.fetch(query);

	return {
		data
	};
};
