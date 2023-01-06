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

	import '$lib/styles/style.scss';
</script>

<h1>These are all the books I've read</h1>
<p>Feel free to filter by genre.</p>
<div class="button-filter-set">
	{#each genres as genre}
		<button class:selected={selected[genre]} on:click={() => pickGenre(genre)}>{genre}</button>
	{/each}
</div>

<ul>
	<!-- TODO: add genre filters to this list -->
	{#each filteredBooks as book}
		<li><a href={book.path}>{book.meta.title} by {book.meta.author}</a></li>
	{/each}
</ul>

<style lang="scss">
	button {
		font-family: monospace;
		color: $purple;
		background: transparent;
		border: 1px $purple solid;
		padding: 1rem;
		border-right: 0;
		&:first-of-type {
			border-top-left-radius: 0.5rem;
			border-bottom-left-radius: 0.5rem;
		}
		&:last-of-type {
			border-top-right-radius: 0.5rem;
			border-bottom-right-radius: 0.5rem;
			border-right: 1px $purple solid;
		}

		&:hover {
			background-color: transparentize($purple, 0.8);
		}
		&:active {
			background-color: darken($purple, 10);
			color: $white;
		}
	}
	.selected {
		background-color: $purple;
		color: $white;
		&:hover {
			background-color: darken($purple, 4);
		}
		&:active {
			background-color: darken($purple, 10);
		}
	}

	.button-filter-set {
		text-align: center;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		margin: 1rem 0;
	}
</style>
