<script>
	export let data;
</script>

<h1>The {data.genre} books I've read</h1>

<ul>
	{#each data.books as book}
		<li>
			<a href={book.path}>{book.meta.title}</a>
		</li>
	{/each}
</ul>
