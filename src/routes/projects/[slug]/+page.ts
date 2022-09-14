import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import client from '$lib/sanityClient';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params ?? '';
	const filter = `*[_type == "post" && slug.current == "${slug}"][0]`;
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

	try {
		const post: Post = await client.fetch(query);

		if (post) {
			return {
				post
			};
		}
	} catch (err) {
		throw error(400, `Query failed`);
	}
};
