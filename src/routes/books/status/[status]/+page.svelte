<script>
	export let data;
</script>

{#if ['want'].includes(data.status)}
	<h1>Books I {data.status} to read</h1>
{:else if ['finished', 'paused'].includes(data.status)}
	<h1>Books I {data.status} reading</h1>
{:else if ['reading'].includes(data.status)}
	<h1>Books I'm currently reading</h1>
{:else}
	<h1>{data.status} books</h1>
{/if}

<ul>
	{#each data.books as book}
		<li>
			<a href={book.path}>{book.meta.title}</a> by {book.meta.author}
		</li>
	{/each}
</ul>

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
