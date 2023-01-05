<script>
	export let data;
</script>

<h1>hello these are the books i've read in the {data.genre} genre</h1>

<ul>
	{#each data.books as book}
		<li>
			<a href={book.path}>{book.meta.title}</a>
		</li>
	{/each}
</ul>
