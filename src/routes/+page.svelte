<script>
	import CardList from '../components/CardList.svelte';
</script>

<CardList />

<style>
	:global(html) {
		font-size: 12px;

		@media (width > 768px) {
			font-size: 16px;
		}
	}

	:global(body) {
		background-color: black;
		color: white;
		font-family: sans-serif;
		margin: 0;
		padding: 0;
	}
</style>
