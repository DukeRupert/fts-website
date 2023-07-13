import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		imagetools({
			// By default, directives are `?width=480;1024;1920&format=avif;webp;jpg`
			// Now we change it to generate 5 variants instead - `avif/jpg` formats at `640/1280` + LQIP
			defaultDirectives: () =>
				new URLSearchParams('?width=240;360;480;1024;1920&format=avif;webp;jpg')
		})
	]
};

export default config;
