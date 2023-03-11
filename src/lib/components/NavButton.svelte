<script>
	import { page } from '$app/stores';
	export let label, path;
</script>

<a href={path} aria-label={label}>
	<button class={$page.url.pathname === path ? 'selected' : ''}>
		{label}
	</button>
</a>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.selected {
		&::before {
			content: '✦ ';
		}
		&::after {
			content: ' ✦';
		}
	}

	button {
		&::before {
			content: '\00a0 \00a0';
		}
		&::after {
			content: '\00a0 \00a0';
		}
	}
</style>
