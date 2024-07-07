<script lang="ts">
	import CardList from '../components/CardList.svelte';
	import Filters from '../components/Filters.svelte';
	import type { Game } from '$lib/types';

	const formatGamesList = (gameList: Game[]) => {
		return gameList.sort((a, b) => a.name.localeCompare(b.name));
	};

	$: gamesToDisplay = [];

	const handleDisplayedGamesUpdate = (event: any) => {
		gamesToDisplay = formatGamesList(event.detail.gamesToDisplay);
	};
</script>

<div class="filters-wrapper">
	<Filters on:updateDisplayedGames={handleDisplayedGamesUpdate} />
</div>
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

	.filters-wrapper {
		overflow: auto;
	}
</style>
