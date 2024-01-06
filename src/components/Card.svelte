<script lang="ts">
	import type { Country, Game } from '../lib/types';

	import countries from '../api/countries.json';

	import PlatformFlag from './PlatformFlag.svelte';

	export let game: Game;

	const country: Country = countries[game.country as keyof typeof countries];
	const playersCount: string = `${game.players > 1 ? '1-' : ''}${game.players}`;
	const playersLabel: string = `Up to ${game.players} player${game.players > 1 ? 's' : ''}.`;
</script>

<div class="container">
	{#if game.thumbnail}
		<img alt="" class="image" src={game.thumbnail} />
	{:else}
		<div class="image-placeholder" />
	{/if}

	<div class="content">
		<div class="name-wrapper">
			<h2 class="game-name">{game.name}</h2>

			{#if game?.players > 0}
				<span aria-label={playersLabel} class="players" title={playersLabel}>
					({playersCount})
					<span aria-hidden="true">👥</span>
				</span>
			{/if}
		</div>

		{#if country}
			<span aria-label={country.name} class="country" role="img" title={country.name}>
				{country.flag}
			</span>
		{/if}

		<div class="platform-list">
			{#each game.platformsAvailable as platformAvailable}
				<PlatformFlag
					favorite={game.platformsFavorite.includes(platformAvailable)}
					name={platformAvailable}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		background-color: #333;
		border: 2px solid #ccc;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: 2rem;
		justify-content: space-between;
		padding: 1rem 1rem 1.5rem;
	}

	.country {
		cursor: help;
		font-size: 2.5rem;
		line-height: 0.75;
		order: 2;
		position: absolute;
		right: 0.5rem;
		text-align: right;
		top: 0.5rem;
	}

	.game-name {
		margin: 0;
	}

	.image {
		aspect-ratio: 16/9;
		max-width: 100%;
		width: 100%;
	}

	.image-placeholder {
		aspect-ratio: 16/9;
		background-color: gray;
	}

	.name-wrapper {
		align-items: baseline;
		column-gap: 8px;
		display: flex;
		flex-wrap: wrap;
		grid-column: span 2;
	}

	.platform-list {
		display: inline-flex;
		gap: 1rem;
	}

	.players {
		color: rgb(170, 211, 252);
		cursor: help;
		font-size: 14px;
		font-weight: bold;
	}
</style>
