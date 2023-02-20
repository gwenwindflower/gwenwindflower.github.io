<script>
	export let label, color;
</script>

<div class="button" style="background-color: {color};">
	{label}
</div>

<style lang="scss">
	.button {
		padding: 1rem;
		border: 1px black solid;
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
