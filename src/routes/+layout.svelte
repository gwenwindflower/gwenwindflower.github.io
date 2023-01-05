<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '$lib/styles/style.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style global>
	a {
		text-decoration: none;
		text-shadow: 1px 1px 0 lavenderblush, -1px 1px 0 lavenderblush, 2px 0 0 lavenderblush,
			-2px 0 0 lavenderblush;
		box-shadow: inset 0 -1px 0 0 lavenderblush, inset 0 -0.25rem 0 0 lavender;
	}
</style>
