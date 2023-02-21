<script>
	export let label, color;
</script>

<button style="background-color: {color};">
	{label}
</button>

<style lang="scss">
	button {
		font-family: $sans;
		font-size: 1rem;
		padding: 1rem;
		border: 1px black solid;
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
</style>
