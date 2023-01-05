export const load = async ({ fetch, params }) => {
	const { genre } = params;
	const response = await fetch(`/api/books`);
	const allBooks = await response.json();

	const books = allBooks.filter((book) => book.meta.genres.includes(genre));

	return {
		genre,
		books
	};
};
