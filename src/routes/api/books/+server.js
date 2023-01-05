import { fetchBooks } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBooks = await fetchBooks();

	const sortedBooks = allBooks.sort((a, b) => {
		return new Date(b.meta.updatedAt) - new Date(a.meta.updatedAt);
	});

	return json(sortedBooks);
};
