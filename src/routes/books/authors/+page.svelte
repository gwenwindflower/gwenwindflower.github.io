<script>
	export let data;
</script>

<h1>The people who write the books</h1>
<h3>Sometimes I write notes on the them too.</h3>
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
		font-style: italic;
		a {
			font-family: 'Fanwood Text', 'Georgia', serif;

			text-decoration: none;
			color: $black;
			font-size: 1rem;
			box-shadow: inset 0 -0.1rem 0 0 $accent;
			text-decoration: none;
			&:hover {
				transition: 0.2s;
				background-color: transparent;
				box-shadow: inset 0 -1rem 0 0 $accent;
			}
		}
	}
</style>
