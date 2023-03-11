<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<div class="metadata">
		<p>Written by: <a href={data.authorLink}>{data.authorName}</a></p>
		<p>Last updated: {data.updatedAt}</p>
		<p>Status: <a href="/books/status/{data.status}">{data.status}</a></p>
		<ul>
			genres:
			{#each data.genres as genre}
				<li><a href="/books/genre/{genre}">{genre}</a></li>
			{/each}
		</ul>
	</div>
	<div class="content">
		<svelte:component this={data.content} />
	</div>
</article>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.metadata {
		font-family: $mono;
		font-size: 0.8rem;
		p {
			font-size: 0.8rem;
		}
		text-transform: uppercase;
		ul {
			padding-left: 0;
			list-style: disc;
			li {
				margin-left: 1rem;
			}
		}
	}
</style>
