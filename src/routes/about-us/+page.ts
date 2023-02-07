import type { PageLoad } from './$types';
import type { SanityPage } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';

export const load: PageLoad = async ({ url }) => {
	const { pathname } = url;

	const q = `*[_type == "page" && path == $pathname]
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
	const data: SanityPage[] = await Sanity.fetch(q, p);

	return {
		page: data[0]
	};
};
