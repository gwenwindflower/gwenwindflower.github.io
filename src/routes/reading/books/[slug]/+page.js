export async function load({ params }) {
	const book = await import(`../${params.slug}.md`);
	const { title, updated_at } = book.metadata;
	const content = book.default;

	return {
		title,
		updated_at,
		content
	};
}
