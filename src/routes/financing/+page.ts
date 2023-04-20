import type { PageLoad } from './$types';
import type { SanityPage } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const prerender = true;

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;

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

	return {
		page: pageQuery
	};
};
