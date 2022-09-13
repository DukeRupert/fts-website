import { dev } from '$app/environment';
import postmark from 'postmark';

const POSTMARK_API_KEY = dev ? import.meta.env.VITE_POSTMARK_API_KEY : process.env.POSTMARK_API_KEY;

const client = new postmark.ServerClient(POSTMARK_API_KEY);

export default client;
