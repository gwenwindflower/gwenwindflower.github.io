<script>
	export let data;
</script>

<h1>Bloggy blog blog</h1>
<ul>
	{#each data.posts as post}
		<li>
			<h2>
				☆ <a href={post.path}>{post.meta.title}</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
