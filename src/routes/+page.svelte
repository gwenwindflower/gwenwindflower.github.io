<article>
	<h1>Hi! I'm Winnie.</h1>
	<p>
		This is my blog. I primarily write about data and storytelling, and particularly keep notes on
		my reading here.
	</p>
	<ul>
		<li>
			<a rel="me" href="https://sunny.garden/@winnie">
				<img src="/src/lib/assets/mastodon.svg" alt="Mastodon" />
			</a>
		</li>
		<li>
			<a href="https://www.github.com">
				<img src="/src/lib/assets/github.svg" alt="Github" />
			</a>
		</li>
	</ul>
</article>

<style lang="scss">
	ul {
		padding: 0;
		list-style: none;
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}

	ul li a {
		box-shadow: none;
		&:hover {
			box-shadow: none;
		}
		img {
			height: 2rem;
			width: 2rem;
			&:hover {
				background-color: transparentize(palegreen, $amount: 0.5);
			}
		}
	}
</style>
