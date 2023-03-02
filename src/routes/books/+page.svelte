<script>
	import Button from '../../lib/components/Button.svelte';
	export let data;
	let selected = {
		'sci-fi': true,
		'short stories': true,
		horror: true,
		modern: true
	};
	const genres = Object.keys(selected);

	function pickGenre(genre) {
		selected[genre] = !selected[genre];
	}
	$: filteredBooks = data.books.filter((book) =>
		book.meta.genres.some((bookGenre) => selected[bookGenre])
	);

	import '$lib/styles/style.scss';
</script>

<h1>Book notes</h1>

<article>
	<p>Feel free to <a href="/books/authors">browse by author</a> or filter by genre:</p>
</article>
<div class="button-container">
	{#each genres as genre}
		<button on:click={() => pickGenre(genre)} class:selected={selected[genre]}>{genre}</button>
	{/each}
</div>
<ul>
	{#each filteredBooks as book}
		<li><a href={book.path}>{book.meta.title}</a> by {book.meta.author}</li>
	{/each}
</ul>

<style lang="scss">
	.button-container {
		flex-wrap: wrap;
		display: flex;
		gap: 1rem;
	}
	.selected {
		background-color: $accent;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		margin: 1rem 0;
		font-style: italic;
		a {
			font-family: $mono;
			text-transform: uppercase;
			font-style: normal;
		}
	}
</style>
