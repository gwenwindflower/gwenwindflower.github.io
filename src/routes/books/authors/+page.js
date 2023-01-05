export const load = async ({ fetch, params }) => {
	const { slug } = params;
	const bookResponse = await fetch(`/api/books`);
	const allBooks = await bookResponse.json();
	const authorResponse = await fetch(`/api/authors`);
	const allAuthors = await authorResponse.json();
	const author = allAuthors.filter((author) => author.meta.slug == slug);
	const authorBooks = allBooks.filter((book) => book.meta.author == author.meta.name);

	return {
		slug,
		author,
		authorBooks
	};
};
