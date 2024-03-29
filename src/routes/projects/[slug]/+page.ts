import type { PageLoad } from './$types';
import type { Post } from '$lib/types/sanity';
import Sanity from '$lib/sanity/sanityClient';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params ?? '';
	console.log(slug);
	const filter = `*[_type == "post" && slug.current == "${slug}"][0]`;
	const projection = `{
                        ...,
						mainImage{..., asset->},
                        body[] {
                          ...,
                          
                          children[] {
                            ...
                          }
                        }
                      }`;
	const query = filter + projection;

	const post: Post = await Sanity.fetch(query);

	if (post) {
		return {
			post
		};
	}

	throw error(400, `Query failed`);
};
