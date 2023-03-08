import { READWISE_TOKEN } from '$env/static/private';

let token;
if (!READWISE_TOKEN) {
	token = process.env.READWISE_TOKEN;
}

export async function load({ fetch }) {
	const response = await fetch(`https://readwise.io/api/v2/export/`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${READWISE_TOKEN | token}`
		}
	});
	const parsedResponse = await response.json();
	const highlights = parsedResponse.results;
	return {
		highlights
	};
}
