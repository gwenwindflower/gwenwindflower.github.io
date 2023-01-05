<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p><a href={data.authorLink}>Written by: {data.authorName}</a></p>
	<p>Last updated: {data.updatedAt}</p>
	<ul>
		genres:
		{#each data.genres as genre}
			<li><a href="/books/genre/{genre}">{genre}</a></li>
		{/each}
	</ul>
	<svelte:component this={data.content} />
</article>
