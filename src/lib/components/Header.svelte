<script>
	import Button from './Button.svelte';
</script>

<header>
	<a class="home-link" aria-label="Home" href="/">
		Gwen Windflower/<span>artist+analyst</span>
	</a>
	<nav>
		<ul>
			<li>
				<a href="/books" aria-label="Books"><Button label="✧ reading ✧" /></a>
			</li>
			<li>
				<a href="/blog" aria-label="Blog"><Button label="✦ writing ✦" /></a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		font-size: 1.25rem;
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.home-link {
		font-size: 2rem;
		align-self: center;
		font-family: $serif;
		font-style: italic;
		font-weight: 900;
		box-shadow: inset 0 -1rem 0 0 transparentize($accent, 0.5);
		color: inherit;
		transition: 0.1s;
		&:hover {
			box-shadow: inset 0 -2.2rem 0 0 transparentize($accent, 0.5);
			transition: 0.1s;
		}
		span {
			text-transform: uppercase;
			font-family: $mono;
			font-style: normal;
			font-weight: 100;
			font-size: 1rem;
		}
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	li a {
		text-decoration: none;
		color: $black;
		box-shadow: none;
		text-shadow: none;
		&:hover,
		&:active {
			color: $black;
		}
	}
</style>
