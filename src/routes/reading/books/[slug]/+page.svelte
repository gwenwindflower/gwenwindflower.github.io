<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Last updated: {data.updated_at}</p>
	<svelte:component this={data.content} />
</article>
