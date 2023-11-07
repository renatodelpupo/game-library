<script lang="ts">
	import type { Platform } from '../lib/types';

	import platforms from '../api/platforms.json';

	export let favorite: boolean;
	export let name: string;

	const platform: Platform = platforms[name as keyof typeof platforms];
</script>

<div class="container">
	<span class="flag" style:background={platform.color}>
		{name}
	</span>

	{#if favorite}
		<span class="star"> ⭐️ </span>
	{/if}
</div>

<style>
	.container {
		display: inline-flex;
		position: relative;
		outline: 1px solid white;
	}

	.flag {
		padding: 4px 8px;
	}

	.star {
		position: absolute;
		right: -0.75rem;
		top: -1rem;
	}
</style>
