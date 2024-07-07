<script lang="ts">
	import type { Game } from '$lib/types';

	import Card from './Card.svelte';

	export let games: Game[] = [];
</script>

<div class="list">
	{#each games as game (game.name)}
		<Card {game} />
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem 1rem;
		padding: 1rem;

		@media (min-width: 1199px) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
