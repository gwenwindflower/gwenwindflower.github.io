import { READWISE_TOKEN } from '$env/static/private';

export async function load({ fetch }) {
	const response = await fetch(`https://readwise.io/api/v2/export/`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${READWISE_TOKEN}`
		}
	});
	const parsedResponse = await response.json();
	const highlights = parsedResponse.results;
	return {
		highlights
	};
}
