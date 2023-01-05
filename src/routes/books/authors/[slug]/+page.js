export const load = async ({ fetch, params }) => {
	const author = await import(`../${params.slug}.md`);
	const { name, demographics } = author.metadata;
	const content = author.default;

	const bookResponse = await fetch(`/api/books`);
	const allBooks = await bookResponse.json();
	const authorBooks = allBooks.filter((book) => book.meta.author == name);

	return {
		name,
		demographics,
		authorBooks,
		content
	};
};
