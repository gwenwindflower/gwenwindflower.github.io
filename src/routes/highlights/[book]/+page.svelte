<script>
	export let data;
</script>

<h1>{data.highlights.readable_title}</h1>
<h2>Highlights</h2>
{#each data.highlights.highlights as highlight}
	<li><em>From page {highlight.location}</em>: {highlight.text}</li>
{/each}

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	li em {
		font-family: $mono;
		font-weight: 100;
		font-style: normal;
	}
	h2 {
		font-family: $mono;
		font-weight: 100;
	}
</style>
