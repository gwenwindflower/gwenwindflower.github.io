<script>
	export let data;
</script>

<h1>Morning pages habit</h1>
<ul>
	{#each data.journals as journal}
		<li><a href={journal.link}>{journal.title}</a></li>
	{/each}
</ul>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	ul {
		list-style: none;
	}
	li {
		margin-bottom: 1rem;
		&:before {
			content: '✧ ';
		}
	}
</style>
