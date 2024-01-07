<script lang="ts">
	import games from '../api/games.json';
	import CardList from '../components/CardList.svelte';
	import Filters from '../components/Filters.svelte';

	$: gamesToDisplay = games.filter(({ hide }) => !hide);

	const handleDisplayedGamesUpdate = (event: any) => {
		gamesToDisplay = event.detail.gamesToDisplay;
	};
</script>

<Filters on:updateDisplayedGames={handleDisplayedGamesUpdate} />
<CardList games={gamesToDisplay} />

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
