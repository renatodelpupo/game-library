<script lang="ts">
	import type { Option } from '$lib/types';

	export let options: Option[] = [];
	export let selectedOption: string = '';
	export let type: string = '';

	$: defaultLabel = selectedOption ? 'Reset filter' : type;

	const handleSelectChange = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		selectedOption = target.value;
	};
</script>

<div class="select-wrapper">
	<select on:change={handleSelectChange} bind:value={selectedOption}>
		<option value="">{defaultLabel}</option>
		{#each Object.values(options) as { label, value } (value)}
			<option {value}>{label}</option>
		{/each}
	</select>
</div>

<style>
	select {
		appearance: none;
		background-color: #333;
		border: none;
		border-radius: 0.25rem;
		color: #fff;
		cursor: pointer;
		font-size: 1.15rem;
		padding: 0.75rem;
		width: 100%;
	}

	.select-wrapper {
		max-width: 100%;
		position: relative;
		width: 7.5rem;

		&::after {
			--size: 0.3rem;
			border-left: var(--size) solid transparent;
			border-right: var(--size) solid transparent;
			border-top: var(--size) solid white;
			content: '';
			pointer-events: none;
			position: absolute;
			right: 1rem;
			top: 45%;
		}
	}
</style>
