import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const load: PageLoad = async () => {
	const query = '*[_type == "post" && publishedAt < now()] | order(publishedAt desc)';
	const data: Post[] = await Sanity.fetch(query);

	return {
		data
	};
};
