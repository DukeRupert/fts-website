import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const load: PageLoad = async () => {
	const filter = '*[_type == "post" && publishedAt < now()] | order(publishedAt desc)';
	const projection = `
		{ 
			...,
			categories[]->{...},
			mainImage{..., asset->},
	  	}`;
	const query = filter + projection;
	const data: Post[] = await Sanity.fetch(query);

	return {
		posts: data
	};
};
