<script>
	export let data;
</script>

{#each data.highlights as highlight}
	<li><a href="/highlights/{highlight.user_book_id}">{highlight.readable_title}</a></li>
{/each}
