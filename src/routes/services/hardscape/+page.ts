import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const prerender = true;

export const load: PageLoad = async () => {
	// id for hardscape category
	const reference = 'ea976536-8c5b-4971-9f69-8de78e2605af';

	// Get posts that contain the above reference
	const filter = `*[_type == "post" && references($reference)][0...3] | order(publishedAt desc)`;
	const projection = `{
                        ...,
                        body[] {
                          ...,
                          children[] {
                            ...
                          }
                        }
                      }`;

	const query = filter + projection;
	const parameters = {
		reference
	};

	// Fetch data from Sanity
	const posts: Post[] = await Sanity.fetch(query, parameters);

	// Return results
	return {
		posts
	};
};
