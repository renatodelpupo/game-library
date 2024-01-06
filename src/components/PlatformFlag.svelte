<script lang="ts">
	import type { Platform } from '../lib/types';

	import platforms from '../api/platforms.json';

	export let favorite: boolean;
	export let name: string;

	const platform: Platform = platforms[name as keyof typeof platforms];
</script>

<div class="platform" style:background={platform.color}>
	{name}

	{#if favorite}
		<span class="star"> ⭐️ </span>
	{/if}
</div>

<style>
	.platform {
		align-items: center;
		border: 2px solid #ccc;
		border-radius: 0.25rem;
		display: inline-flex;
		gap: 0.25rem;
		padding: 4px 8px;
		position: relative;
	}
</style>
