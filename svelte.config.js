import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const config = {
	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess({ scss: { prependData: `@import 'src/lib/styles/style.scss';` } }),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
