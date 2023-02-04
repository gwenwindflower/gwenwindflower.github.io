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

<h1>Book notes</h1>
<p>Feel free to <a href="/books/authors">browse by author</a> or filter by genre:</p>
{#each genres as genre}
	<button class:selected={selected[genre]} on:click={() => pickGenre(genre)}>&nbsp;{genre}</button>
{/each}
<ul>
	<!-- TODO: add genre filters to this list -->
	{#each filteredBooks as book}
		<li><a href={book.path}>{book.meta.title}</a> by {book.meta.author}</li>
	{/each}
</ul>

<style lang="scss">
	button {
		font-size: 1rem;
		font-family: 'Fanwood Text', 'Georgia', serif;
		font-style: italic;
		color: transparentize($black, 0.75);
		background: transparent;
		border: 0;
		padding: 1rem;
		margin: 0;
		transition: 0.1s;
		&:hover {
			transition: 0.1s;
			background-color: $accent;
		}
		&:active {
			background-color: darken($accent, 7);
		}
	}

	.selected {
		color: $black;
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
			font-family: 'Fanwood Text', 'Georgia', serif;
			font-style: normal;
			text-decoration: none;
			color: $black;
			font-size: 1rem;
			box-shadow: inset 0 -0.1rem 0 0 $accent;
			text-decoration: none;
			&:hover {
				transition: 0.2s;
				background-color: transparent;
				box-shadow: inset 0 -0.1rem 0 0 $dark-accent;
			}
		}
	}
</style>
