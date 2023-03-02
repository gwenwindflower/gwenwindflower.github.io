<script>
	export let data;
</script>

<h1>{data.name}</h1>
<ul class="demographics">
	{#each data.demographics as demographic}
		<li>{demographic}</li>
	{/each}
</ul>
<svelte:component this={data.content} />
<ul class="works">
	{#each data.authorBooks as book}
		<li><a href={book.path}>{book.meta.title}</a></li>
	{/each}
</ul>

<style lang="scss">
	.demographics {
		list-style-type: none;
		padding-left: 0;
		font-family: $mono;
		text-transform: uppercase;
		li {
			display: inline;
			padding-right: 1rem;
			&:last-of-type {
				padding-right: 0;
			}
		}
	}

	.works {
		padding-left: 0;
		font-family: $mono;
		font-size: 1rem;
		text-transform: uppercase;
	}
</style>
