export const load = async ({ fetch, params }) => {
	const { status } = params;
	const response = await fetch(`/api/books`);
	const allBooks = await response.json();

	const books = allBooks.filter((book) => book.meta.status.includes(status));

	return {
		status,
		books
	};
};
