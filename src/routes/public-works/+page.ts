import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const prerender = true;

export const load: PageLoad = async () => {
	// id for public works category
	const reference = 'fe87908b-92dc-4d7a-a363-68cdb0ee4ad4';

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
