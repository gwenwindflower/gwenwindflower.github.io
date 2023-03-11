<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p class="metadata">Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.metadata {
		font-family: $mono;
		text-transform: uppercase;
		font-size: 0.8rem;
	}
</style>
