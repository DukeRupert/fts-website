import type { PageLoad } from './$types';
import type { SanityPage } from '$lib/types/sanity';
import Sanity from '$lib/sanityClient';

export const load: PageLoad = async ({ params, url }) => {
	const { pathname } = url;
	const q = `*[_type == "page" && path == $pathname]
        {title, metaDescription, title, 
            pageBuilder[]
                {..., features[]
                    {..., icon->{title, size, svg, _type}
                }
            }
        }`;
	const p = {
		pathname
	};
	const data: SanityPage[] = await Sanity.fetch(q, p);

	// Check for promo

	return {
		page: data[0]
	};
};
