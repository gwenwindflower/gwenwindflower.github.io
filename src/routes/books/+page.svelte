<script>
	import { text } from 'svelte/internal';

	export let data;
	// TODO: figure out a way to build this list from the markdown files
	const genres = ['modern', 'sci-fi', 'short stories', 'horror'];
	let genresSelected = genres;
	function pickGenre(genre) {
		genresSelected = genre;
	}
	$: filteredBooks = data.books.filter((book) =>
		book.meta.genres.some((bookGenre) => genresSelected.includes(bookGenre))
	);
</script>

<h1>These are all the books I've read</h1>
<p>Feel free to filter by genre.</p>
{#each genres as genre}
	<button on:click={() => pickGenre(genre)}>{genre}</button>
{/each}
<ul>
	<!-- TODO: add genre filters to this list -->
	{#each filteredBooks as book}
		<li><a href={book.path}>{book.meta.title}</a></li>
	{/each}
</ul>
