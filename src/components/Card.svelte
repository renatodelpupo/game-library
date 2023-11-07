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

		<div class="flag-list">
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
		border: 1px solid #fff;
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 8px 16px 32px;
	}

	.country {
		cursor: help;
		font-size: 48px;
		position: absolute;
		right: -8px;
		text-box-edge: cap alphabetic;
		text-box-trim: both;
		top: -8px;
	}

	.flag-list {
		display: inline-flex;
		gap: 16px;
	}

	.game-name {
		margin: 0;
	}

	.image {
		max-width: 100%;
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
	}

	.players {
		color: rgb(170, 211, 252);
		cursor: help;
		font-size: 14px;
		font-weight: bold;
	}
</style>
