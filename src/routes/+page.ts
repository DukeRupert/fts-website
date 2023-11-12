import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const load: PageLoad = async () => {
	const filter = '*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0..2]';
	const projection = `
		{ 
			...,
			mainImage{..., asset->},
	  	}`;
	const query = filter + projection;
	const data: Post[] = await Sanity.fetch(query);

	return {
		data
	};
};
