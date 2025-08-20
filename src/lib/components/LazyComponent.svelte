<!-- LazyComponent.svelte - Intersection Observer based lazy loading wrapper -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	
	export let rootMargin = '100px';
	export let threshold = 0.1;
	
	let isVisible = false;
	let container: HTMLElement;
	
	onMount(() => {
		if (!browser || !container) return;
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					isVisible = true;
					observer.disconnect();
				}
			});
		}, {
			rootMargin,
			threshold
		});
		
		observer.observe(container);
		
		return () => observer.disconnect();
	});
</script>

<div bind:this={container}>
	{#if isVisible}
		<slot />
	{:else}
		<slot name="placeholder">
			<!-- Default loading placeholder -->
			<div class="w-full h-32 bg-brand-primary/5 rounded-lg animate-pulse flex items-center justify-center">
				<div class="w-8 h-8 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
			</div>
		</slot>
	{/if}
</div>
