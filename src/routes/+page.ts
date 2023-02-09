import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const load: PageLoad = async ({ params }) => {
	const query = '*[_type == "post"] | order(publishedAt desc) [0..2]';
	const data: Post[] = await Sanity.fetch(query);

	return {
		data
	};
};
