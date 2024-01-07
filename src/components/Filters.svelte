<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import countries from '../api/countries.json';
	import games from '../api/games.json';
	import platforms from '../api/platforms.json';
	import type { Option } from '../lib/types';
	import Checkbox from './Checkbox.svelte';
	import SelectBox from './SelectBox.svelte';

	const dispatch = createEventDispatcher();

	const countryOptions = Object.entries(countries).map(([value, { name }]) => ({
		label: name,
		value
	}));

	const playersOptions: Option[] = [
		{
			label: '2+',
			value: '2'
		},
		{
			label: '4+',
			value: '4'
		},
		{
			label: '8+',
			value: '8'
		}
	];

	const platformOptions = Object.entries(platforms).map(([value, { label }]) => ({
		label,
		value
	}));

	$: favoritesOnly = false;
	$: gamesToDisplay = games.filter(
		({ country, hide, platformsAvailable, platformsFavorite, players }) =>
			!hide &&
			(!selectedCountry || country === selectedCountry) &&
			(!selectedPlayer || players >= Number(selectedPlayer)) &&
			(!selectedPlatform || platformsAvailable.includes(selectedPlatform)) &&
			(!favoritesOnly || !selectedPlatform || platformsFavorite.includes(selectedPlatform))
	);
	$: selectedCountry = '';
	$: selectedPlatform = '';
	$: selectedPlayer = '';

	$: {
		dispatch('updateDisplayedGames', { gamesToDisplay });
	}

	const checkFavorite = (event: CustomEvent<InputEvent>) => {
		favoritesOnly = !!event.detail;
	};
</script>

<div class="filters">
	<SelectBox options={playersOptions} type="Players" bind:selectedOption={selectedPlayer} />
	<SelectBox options={countryOptions} type="Country" bind:selectedOption={selectedCountry} />
	<SelectBox options={platformOptions} type="Platform" bind:selectedOption={selectedPlatform} />
	<Checkbox disabled={!selectedPlatform} label="⭐️" on:updateCheckbox={checkFavorite} />
</div>

<style>
	.filters {
		align-items: center;
		display: flex;
		gap: 1rem;
		justify-content: center;
		padding: 1rem;
	}
</style>
