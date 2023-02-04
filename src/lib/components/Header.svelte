<header>
	<a class="home-link" href="/">Gwyneth 🌻 Windflower</a>
	<nav>
		<ul>
			<li>
				<a href="/books" aria-label="Books">reading</a>
			</li>
			<li>
				<a href="/blog" aria-label="Blog">writing</a>
			</li>
			<li>
				<a href="/about" aria-label="About">about</a>
			</li>
			<li>
				<a href="/contact" aria-label="Contact">contact</a>
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
		font-family: $display-bold;
		color: $accent;
		font-size: 1.5rem;
		text-decoration: none;
		&:hover {
			transition: 0.2s;
			background-color: transparent;
			color: $white;
			box-shadow: inset 0 -2rem 0 0 $accent;
		}
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		font-family: $display;
		text-decoration: none;
		color: inherit;
		box-shadow: none;
		text-shadow: none;
		transition: 0.4s;
		&:hover {
			transition: 0.2s;
			color: $accent;
		}
	}
</style>
