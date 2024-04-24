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
			label: '1',
			value: '1'
		},
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

	const statusOptions: Option[] = [
		{
			label: 'In progress',
			value: 'in-progress'
		},
		{
			label: 'Finished',
			value: 'finished'
		},
		{
			label: 'Not applicable',
			value: 'not-applicable'
		},
		{
			label: 'Not started / Stopped',
			value: 'not-started-stopped'
		}
	];

	const platformOptions = Object.entries(platforms).map(([value, { label }]) => ({
		label,
		value
	}));

	const hasSufficientPlayers = (target: number, total: number) => {
		if (target === 1) {
			return target === total;
		}

		return target <= total;
	};

	$: favoriteOnly = false;
	$: gamesToDisplay = games.filter(
		({ country, favorite, hide, players, platformsAvailable, purchased, status }) =>
			!hide &&
			(!favoriteOnly || favorite) &&
			(!purchasedOnly ||
				(selectedPlatform ? purchased.includes(selectedPlatform) : purchased.length >= 1)) &&
			(!selectedCountry || country === selectedCountry) &&
			(!selectedPlayer || hasSufficientPlayers(Number(selectedPlayer), players)) &&
			(!selectedPlatform || platformsAvailable.includes(selectedPlatform)) &&
			(!selectedStatus || status === selectedStatus)
	);
	$: purchasedOnly = false;
	$: selectedCountry = '';
	$: selectedPlatform = '';
	$: selectedPlayer = '';
	$: selectedStatus = '';

	$: {
		dispatch('updateDisplayedGames', { gamesToDisplay });
	}

	const checkFavorite = (event: CustomEvent<InputEvent>) => {
		favoriteOnly = !!event.detail;
	};

	const checkPurchased = (event: CustomEvent<InputEvent>) => {
		purchasedOnly = !!event.detail;
	};
</script>

<div class="filters">
	<SelectBox options={playersOptions} type="Players" bind:selectedOption={selectedPlayer} />
	<SelectBox options={countryOptions} type="Country" bind:selectedOption={selectedCountry} />
	<SelectBox options={platformOptions} type="Platform" bind:selectedOption={selectedPlatform} />
	<SelectBox options={statusOptions} type="Status" bind:selectedOption={selectedStatus} />
	<Checkbox label="Favorite" on:updateCheckbox={checkFavorite} />
	<Checkbox label="Purchased" on:updateCheckbox={checkPurchased} />
</div>

<style>
	.filters {
		align-items: center;
		box-sizing: border-box;
		display: inline-flex;
		gap: 1rem;
		justify-content: center;
		min-width: 100%;
		padding: 1rem;
	}
</style>
