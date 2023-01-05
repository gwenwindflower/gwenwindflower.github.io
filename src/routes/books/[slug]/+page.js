export async function load({ params, fetch }) {
	const book = await import(`../${params.slug}.md`);
	const { title, author, updatedAt, genres } = book.metadata;
	const content = book.default;

	const authorsResponse = await fetch(`/api/authors`);
	const allAuthors = await authorsResponse.json();
	// TODO this could be simplified with a method that picks a single item not filter
	const authorData = allAuthors.filter((authorItem) => authorItem.meta.name == author);
	const thisAuthor = authorData[0];
	const authorName = thisAuthor.meta.name;
	const authorDemographics = thisAuthor.meta.demographics;
	const authorLink = thisAuthor.path;

	return {
		title,
		authorName,
		authorDemographics,
		authorLink,
		updatedAt,
		genres,
		content
	};
}
