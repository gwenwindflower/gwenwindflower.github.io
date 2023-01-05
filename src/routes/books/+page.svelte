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
		<li><a href={book.path}>{book.meta.title}</a></li>
	{/each}
</ul>

<style>
	.selected {
		background-color: blue;
		color: white;
	}
</style>
