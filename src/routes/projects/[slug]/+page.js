import { error } from '@sveltejs/kit';

export async function load({params, fetch}) {
  try {
    const url = `/projects/${params.slug}.json`
    const res = await fetch(url)
    const data = await res.json()

    if (data?.post) {
      return data
    }
  } catch (err) {
    throw error(500, `Could not load url`);
  }
}
