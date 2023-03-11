<script>
	export let data;
</script>

<h1>My blog</h1>
<ul>
	{#each data.posts as post}
		<a href={post.path}>
			<li class="card">
				<h2>{post.meta.title}</h2>
				<p>Published {post.meta.date}</p>
			</li>
		</a>
	{/each}
</ul>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	ul {
		list-style-type: none;
		padding-left: 0;
	}

	li {
		margin-bottom: 2rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
