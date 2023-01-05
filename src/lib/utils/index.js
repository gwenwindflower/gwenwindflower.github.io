export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const fetchBooks = async () => {
	const allBookFiles = import.meta.glob('/src/routes/books/*.md');
	const iterableBookFiles = Object.entries(allBookFiles);

	const allBooks = await Promise.all(
		iterableBookFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const bookPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: bookPath
			};
		})
	);

	return allBooks;
};

export const fetchAuthors = async () => {
	const allAuthorFiles = import.meta.glob('/src/routes/books/authors/*.md');
	const iterableAuthorFiles = Object.entries(allAuthorFiles);

	const allAuthors = await Promise.all(
		iterableAuthorFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const authorPath = path.slice(11, -3);
			return {
				meta: metadata,
				path: authorPath
			};
		})
	);

	return allAuthors;
};
