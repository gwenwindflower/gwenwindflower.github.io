<script>
	export let data;
</script>

<h1>{data.name}</h1>
{data.demographics}
<ul>
	{#each data.authorBooks as book}
		<li><a href={book.path}>{book.meta.title}</a></li>
	{/each}
</ul>
