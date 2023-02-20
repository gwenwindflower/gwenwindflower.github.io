<script>
	import Button from './Button.svelte';
</script>

<header>
	<a class="home-link" aria-lable="Home" href="/"><Button label="Winnie 🏡" /></a>
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
		font-family: $display-bold;
		color: lavender;
		text-shadow: 0.1rem 0.1rem 0.1rem transparentize($black, 0.7);
		font-size: 2rem;
		text-decoration: none;
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
