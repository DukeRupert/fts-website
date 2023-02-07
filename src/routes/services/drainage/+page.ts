import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import Sanity from '$lib/sanity/sanityClient';

export const load: PageLoad = async () => {
	// id for drainage category
	const reference = '8000b100-7c3d-4f34-87bd-6e6ff63819a6';

	// Get posts that contain the above reference
	const filter = `*[_type == "post" && references("${reference}")] | order(publishedAt desc)`;
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

	// Fetch data from Sanity
	const data: Post[] = await Sanity.fetch(query);

	// Return results
	return {
		data
	};
};
