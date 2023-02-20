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
<p>Feel free to <a href="/books/authors">browse by author</a> or filter by genre:</p>
{#each genres as genre}
	<button on:click={() => pickGenre(genre)} class:selected={selected[genre]}>&nbsp;{genre}</button>
{/each}
<ul>
	{#each filteredBooks as book}
		<li><a href={book.path}>{book.meta.title}</a> by {book.meta.author}</li>
	{/each}
</ul>

<style lang="scss">
	.selected {
		background-color: lightgray;
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
			font-family: $sans;
			font-style: normal;
			text-decoration: none;
			color: $black;
			font-size: 1rem;
			box-shadow: inset 0 -0.4rem 0 0 transparentize(palegreen, 0.5);
			transition: 0.1s;
			&:hover {
				box-shadow: inset 0 -1rem 0 0 transparentize(palegreen, 0.5);
				transition: 0.1s;
			}
		}
	}
</style>
