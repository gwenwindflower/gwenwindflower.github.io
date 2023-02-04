<script>
	export let data;
</script>

<h1>Blog</h1>
<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>{post.meta.title}</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style-type: none;
		padding-left: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
