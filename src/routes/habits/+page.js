export async function load({ fetch }) {
	const response = await fetch(`https://api.val.town/eval/@winnie.myMorningPages`);
	const parsedResponse = await response.json();
	const journals = parsedResponse.data.channel.item;
	return {
		journals
	};
}
