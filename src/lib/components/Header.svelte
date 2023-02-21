<script>
	import Button from './Button.svelte';
</script>

<header>
	<a class="home-link" aria-label="Home" href="/">
		<button>Gwen Windflower</button>
	</a>
	<nav>
		<ul>
			<li>
				<a href="/books" aria-label="Books"><Button label="reading 📚" color="lavender" /></a>
			</li>
			<li>
				<a href="/blog" aria-label="Blog"><Button label="writing 📝" color="palegreen" /></a>
			</li>
			<li>
				<a href="/about" aria-label="About"><Button label="about 💁🏻‍♀️" color="peachpuff" /></a>
			</li>
			<li>
				<a href="/contact" aria-label="Contact"
					><Button label="contact 💌" color="lavenderblush" /></a
				>
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
		button {
			background-color: lavender;
			font-family: $display-bold;
			color: $white;
			text-shadow: 1px 0px 3px transparentize($black, 0.5);
			padding: 0.75rem;
			font-size: 1.5rem;
			box-shadow: 0.1rem 0.1rem 1rem transparentize($black, 0.9);
			transition: 0.1s;
			&:hover {
				box-shadow: 0.25rem 0.25rem $black;
				transform: translate(-0.25rem, -0.25rem);
				transition: 0.1s;
			}
			&:active {
				box-shadow: none;
				transform: translate(0, 0);
				transition: 0.1s;
			}
		}

		text-decoration: none;
		box-shadow: none;
		&:hover {
			box-shadow: none;
		}
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	li a {
		font-family: $sans;
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
