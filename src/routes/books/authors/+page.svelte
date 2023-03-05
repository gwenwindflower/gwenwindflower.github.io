<script>
	export let data;
</script>

<h1>Writers</h1>
<h3>I write about them sometimes.</h3>
{#each data.authors as author}
	<li><a href={author.path}>{author.meta.name}</a></li>
{/each}

<style lang="scss">
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		margin: 1rem 0;
		a {
			font-style: italic;
		}
	}
</style>
