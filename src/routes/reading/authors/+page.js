export const load = async ({ fetch }) => {
	const response = await fetch(`/api/authors`);
	const authors = await response.json();

	return {
		authors
	};
};
