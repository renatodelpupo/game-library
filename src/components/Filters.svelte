<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import countries from '../api/countries.json';
	import games from '../api/games.json';
	import platforms from '../api/platforms.json';
	import type { Option } from '../lib/types';
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

	$: gamesToDisplay = games.filter(
		({ country, hide, players, purchased, status }) =>
			!hide &&
			(!selectedCountry || country === selectedCountry) &&
			(!selectedPlayer || players >= Number(selectedPlayer)) &&
			(!selectedPlatform || purchased.includes(selectedPlatform)) &&
			(!selectedStatus || status === selectedStatus)
	);
	$: selectedCountry = '';
	$: selectedPlatform = '';
	$: selectedPlayer = '';
	$: selectedStatus = '';

	$: {
		dispatch('updateDisplayedGames', { gamesToDisplay });
	}
</script>

<div class="filters">
	<SelectBox options={playersOptions} type="Players" bind:selectedOption={selectedPlayer} />
	<SelectBox options={countryOptions} type="Country" bind:selectedOption={selectedCountry} />
	<SelectBox options={platformOptions} type="Platform" bind:selectedOption={selectedPlatform} />
	<SelectBox options={statusOptions} type="Status" bind:selectedOption={selectedStatus} />
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
