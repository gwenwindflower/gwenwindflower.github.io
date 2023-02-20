<script>
	export let data;
</script>

<h1>My blog</h1>
<ul>
	{#each data.posts as post}
		<li>
			<div class="card">
				<h2>
					<a href={post.path}>{post.meta.title}</a>
				</h2>
				Published {post.meta.date}
			</div>
		</li>{/each}
</ul>

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
