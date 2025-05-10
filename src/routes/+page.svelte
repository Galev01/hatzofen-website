<script lang="ts">
	import Hero from '$lib/components/landing/Hero.svelte';
	import HowToPlay from '$lib/components/landing/HowToPlay.svelte';
	import FeaturesShowcase from '$lib/components/landing/FeaturesShowcase.svelte';
	import VisualGallery from '$lib/components/landing/VisualGallery.svelte';
	import DiscoverSection from '$lib/components/landing/DiscoverSection.svelte';
	import PageFooter from '$lib/components/landing/PageFooter.svelte';
</script>

<svelte:head>
	<title>הצופן - משחק חידות מילים בעברית</title>
	<meta name="description" content="גלו את הקסם של המילה העברית עם 'הצופן' - משחק חידות ממכר המשלב אתגר, ידע וכיף בעולם הציטוטים העבריים." />
</svelte:head>

<main class="flex-grow">
	<Hero />
	<HowToPlay />
	<FeaturesShowcase />
	<VisualGallery />
	<DiscoverSection />
</main>

<PageFooter />
