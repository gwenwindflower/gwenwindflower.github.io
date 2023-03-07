export async function load({ params, fetch }) {
	const response = await fetch(`https://readwise.io/api/v2/export?ids=${params.book}`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${import.meta.env.VITE_READWISE_TOKEN}`
		}
	});
	const parsedResponse = await response.json();
	const highlights = parsedResponse.results[0];
	console.log(highlights);
	return {
		highlights
	};
}
