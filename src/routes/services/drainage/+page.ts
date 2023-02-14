import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';
import type { SanityPage } from '$lib/types/sanity';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;
	console.log(`Pathname : ${pathname}`);

	// Get page data from Sanity
	const q = `*[_type == "page" && path == $pathname][0]
        {_type, title, metaDescription, mainImage, 
            pageBuilder[]
                {..., features[]
                    {..., icon->{title, size, svg, _type}
                }
            }
        }`;
	const p = {
		pathname
	};

	const pageQuery: SanityPage = await Sanity.fetch(q, p);

	// id for drainage category
	const reference = '8000b100-7c3d-4f34-87bd-6e6ff63819a6';

	// Get posts that contain the above reference
	const filter = `*[_type == "post" && references($reference)] | order(publishedAt desc)`;
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
		page: pageQuery,
		posts
	};
};
