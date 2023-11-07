import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		imagetools({
			// By default, directives are `?width=480;1024;1920&format=avif;webp;jpg`
			// Now we change it to generate 5 variants instead - `avif/jpg` formats at `640/1280` + LQIP
			profiles: () => new URLSearchParams('?width=240;360;480;1024;1920&format=avif;webp;jpg')
		})
	],
	server: {
		// Set `host: true` if inside GitHub Codespaces to listen on all addresses,
		// see https://vitejs.dev/config/server-options.html#server-host
		host: !!process.env.CODESPACES
	}
};

export default config;
