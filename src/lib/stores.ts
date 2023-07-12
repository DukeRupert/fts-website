import { writable } from 'svelte/store';
import { asyncReadable, type Loadable } from '@square/svelte-store';
import type { SearchListResponse, Video } from '$lib/types/youtube';

// Navigation stores
export const is_open = writable(false);
export const is_services_open = writable(false);
export const is_mobile_services_open = writable(false);

// Contact form stores
export const First_Name = writable('');
export const Last_Name = writable('');

// Youtube Channel Videos
export const recentVideos: Loadable<Video[]> = asyncReadable(
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
		return newItems;
	},
	{ reloadable: true }
);
