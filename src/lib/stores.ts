import { writable } from 'svelte/store';
import { asyncReadable, type Loadable } from '@square/svelte-store';
import type { SearchListResponse, Item } from '$lib/types';

interface Guide {
	body: [];
	game: { title: string; description: string; link: string };
	image: {
		url: string;
		alt: string;
	};
	publishedAt: string;
	slug: string;
	title: string;
	excerpt: string;
	updatedAt: string;
}

export const mobileMenu = writable(false);
export const First_Name = writable('');
export const Last_Name = writable('');

// Youtube Channel Videos
export const recentVideos: Loadable<Item[]> = asyncReadable(
	[],
	async () => {
		const channelId = 'UC_LbjVWjiiFg3h9lB6rcvGQ';
		const maxResults = 3;
		const requestBody = JSON.stringify({ channelId: channelId, maxResults: maxResults });
		const res = await fetch('/api/youtube', {
			method: 'POST',
			body: requestBody,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data: SearchListResponse = await res.json();

		const { items } = data;
		const newItems = [...items];
		console.log(newItems);
		return newItems;
	},
	{ reloadable: true }
);
