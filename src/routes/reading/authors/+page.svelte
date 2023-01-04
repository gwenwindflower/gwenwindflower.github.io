<script>
	export let data;
</script>

<h1>These are all the authors I've read:</h1>

<ul>
	{#each data.authors as author}
		<li><a href={author.path}>{author.meta.name}</a></li>
	{/each}
</ul>
