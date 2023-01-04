import { fetchAuthors } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allAuthors = await fetchAuthors();

	const sortedAuthors = allAuthors.sort((a, b) => {
		return new Date(b.meta.updated_date) - new Date(a.meta.updated_date);
	});

	return json(sortedAuthors);
};
