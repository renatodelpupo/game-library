<script lang="ts">
	import type { Platform, PlatformEnum } from '$lib/types';

	import platforms from '../api/platforms.json';

	export let name: PlatformEnum;
	export let purchased: boolean;

	const platform: Platform = platforms[name as PlatformEnum];
</script>

<div
	class="platform"
	class:not-purchased={!purchased}
	style:background={platform.color}
	title={!purchased ? 'Not purchased' : undefined}
>
	{name}
</div>

<style>
	.not-purchased {
		cursor: help;
		opacity: 0.25;
		text-decoration: line-through;
	}

	.platform {
		align-items: center;
		border: 2px solid #ccc;
		border-radius: 0.25rem;
		color: white;
		display: inline-flex;
		gap: 0.25rem;
		padding: 4px 8px;
		position: relative;
	}
</style>
