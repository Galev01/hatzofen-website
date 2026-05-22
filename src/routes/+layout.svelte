<script>
	import '../app.css';
	import Nav from '$lib/components/landing/Nav.svelte';
	import CipherCanvas from '$lib/components/landing/CipherCanvas.svelte';
	import PageFooter from '$lib/components/landing/PageFooter.svelte';
</script>

<CipherCanvas />

<div class="font-hebrew min-h-screen flex flex-col">
	<Nav />
	<div class="page-body z1">
		<slot />
	</div>
	<PageFooter />
</div>

<style>
	.page-body {
		flex: 1 0 auto;
	}
</style>
