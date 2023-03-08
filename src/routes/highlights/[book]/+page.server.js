import { READWISE_TOKEN } from '$env/static/private';

let myKey;
if (process.env.READWISE_TOKEN) {
	myKey = process.env.READWISE_TOKEN;
} else {
	myKey = READWISE_TOKEN;
}

export async function load({ params, fetch }) {
	const response = await fetch(`https://readwise.io/api/v2/export?ids=${params.book}`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${myKey}`
		}
	});
	const parsedResponse = await response.json();
	const highlights = parsedResponse.results[0];
	return {
		highlights
	};
}
