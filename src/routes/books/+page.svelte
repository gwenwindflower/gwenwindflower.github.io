<script>
	import { text } from 'svelte/internal';

	export let data;
	// TODO: figure out a way to build this list from the markdown files
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
</script>

<h1>These are all the books I've read</h1>
<p>Feel free to filter by genre.</p>
{#each genres as genre}
	<button class:selected={selected[genre]} on:click={() => pickGenre(genre)}>{genre}</button>
{/each}
<ul>
	<!-- TODO: add genre filters to this list -->
	{#each filteredBooks as book}
		<li><a href={book.path}>{book.meta.title} by {book.meta.author}</a></li>
	{/each}
</ul>

<style lang="scss">
	button {
		font-family: inherit;
		color: blue;
		background: transparent;
		border: 1px blue solid;
		padding: 0.5rem;
		border-right: 0;
		&:first-of-type {
			border-top-left-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
		}
		&:last-of-type {
			border-top-right-radius: 0.5rem;
			border-bottom-right-radius: 0.5rem;
			border-right: 1px blue solid;
		}
	}
	.selected {
		background-color: blue;
		color: lavenderblush;
	}
</style>
