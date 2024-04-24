<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let disabled = false;
	export let label = '';

	const dispatch = createEventDispatcher();

	export let checked: boolean;

	$: checked = checked || false;

	const handleChange = (event: Event) => {
		if (!disabled) {
			const target = event.target as HTMLInputElement;
			dispatch('updateCheckbox', target.checked);
		}
	};
</script>

<label>
	<input on:change={handleChange} bind:checked {disabled} type="checkbox" />
	{label}
</label>

<style>
	label {
		align-items: center;
		display: flex;
		gap: 0.25rem;
		justify-content: center;
	}

	label:has(input:disabled) {
		visibility: hidden;
	}
</style>
