import { writable } from 'svelte/store';

// Navigation stores
export const is_open = writable(false);
export const is_services_open = writable(false);
export const is_about_open = writable(false);
export const is_mobile_services_open = writable(false);

// Contact form stores
export const First_Name = writable('');
export const Last_Name = writable('');
