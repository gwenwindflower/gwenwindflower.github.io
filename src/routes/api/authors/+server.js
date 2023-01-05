import { fetchAuthors } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allAuthors = await fetchAuthors();

	// TODO sort alpha

	return json(allAuthors);
};
