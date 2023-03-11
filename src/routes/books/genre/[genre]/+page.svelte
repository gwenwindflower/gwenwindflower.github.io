<script>
	export let data;
</script>

<h1>My {data.genre} books</h1>

<ul>
	{#each data.books as book}
		<li>
			<a href={book.path}>{book.meta.title}</a> by {book.meta.author}
		</li>
	{/each}
</ul>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	ul li {
		font-style: italic;
		a {
			font-size: 1rem;
			text-transform: uppercase;
			font-family: $mono;
			font-style: normal;
		}
	}
</style>
