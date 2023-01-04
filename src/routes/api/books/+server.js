import { fetchBooks } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBooks = await fetchBooks();

	const sortedBooks = allBooks.sort((a, b) => {
		return new Date(b.meta.updated_date) - new Date(a.meta.updated_date);
	});

	return json(sortedBooks);
};
