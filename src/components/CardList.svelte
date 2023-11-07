<script lang="ts">
	import games from '../api/games.json';

	import Card from './Card.svelte';
</script>

<div class="list">
	{#each games as game}
		<Card {game} />
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 32px 16px;
		padding: 16px;
	}
</style>
