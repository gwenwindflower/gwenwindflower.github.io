import { READWISE_TOKEN } from '$env/static/private';

let myKey;
if (process.env.READWISE_TOKEN) {
	myKey = process.env.READWISE_TOKEN;
	console.log('poooooooop');
} else {
	myKey = READWISE_TOKEN;
	console.log('peepee');
}

export async function load({ fetch }) {
	const response = await fetch(`https://readwise.io/api/v2/export/`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Token ${myKey}`
		}
	});
	const parsedResponse = await response.json();
	const highlights = parsedResponse.results;
	return {
		highlights
	};
}
