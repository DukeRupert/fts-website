import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import Sanity from '$lib/sanityClient';

export const load: PageLoad = async () => {
	const query = '*[_type == "post"] | order(publishedAt desc)';
	const data: Post[] = await Sanity.fetch(query);

	return {
		data
	};
};
