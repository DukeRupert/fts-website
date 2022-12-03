import { writable } from 'svelte/store';
import { asyncReadable, type Loadable } from '@square/svelte-store';
import type { PLaylistResponse, Snippet } from '$lib/types';

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
export const recentVideos: Loadable<Snippet[]> = asyncReadable(
	[],
	async () => {
		const channelId = 'UC_LbjVWjiiFg3h9lB6rcvGQ';
		const requestBody = JSON.stringify({ channelId: channelId });
		const res = await fetch('/api/youtube.json', {
			method: 'POST',
			body: requestBody,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		const { items } = data;
		const newItems = [...items];
		return newItems;
	},
	true
);
