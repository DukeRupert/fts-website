import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Sanity from '$lib/sanity/sanityClient';

interface PostData {
    title: string
    slug: string
    updatedAt: string
}

function getDate(raw: string) {
    const split = raw.split('T')
    return split[0]
}
 
export const GET: RequestHandler = async ({ url }) => {
    const filter = `*[_type == "post" && defined(slug)]`;
	const projection = `{title, "slug" : slug.current, "updatedAt": _updatedAt}`;
	const query = filter + projection;

	const posts: PostData[] = await Sanity.fetch(query);
 
    if(posts.length == 0) {
        throw error(404)
    }

    // format date
    const data = posts.map((el) => Object.assign({}, el, {updatedAt: getDate(el.updatedAt)}))

    return json(data)
};