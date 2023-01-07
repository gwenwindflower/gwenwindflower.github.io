import { compute_rest_props } from 'svelte/internal';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/authors`);
	const authors = await response.json();
	console.log(authors);
	return {
		authors
	};
};
