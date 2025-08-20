<script lang="ts">
	import Hero from '$lib/components/landing/Hero.svelte';
	import HowToPlay from '$lib/components/landing/HowToPlay.svelte';
	import FeaturesShowcase from '$lib/components/landing/FeaturesShowcase.svelte';
	import LazyComponent from '$lib/components/LazyComponent.svelte';
	// Lazy load below-the-fold components
	import VisualGallery from '$lib/components/landing/VisualGallery.svelte';
	import DiscoverSection from '$lib/components/landing/DiscoverSection.svelte';
	import FAQ from '$lib/components/landing/FAQ.svelte';
	import PageFooter from '$lib/components/landing/PageFooter.svelte';
</script>

<svelte:head>
	<title>הצופן - פאזל עברי</title>
	<meta name="description" content="גלו את הקסם של המילה העברית עם 'הצופן' - משחק חידות ממכר המשלב אתגר, ידע וכיף בעולם הציטוטים העבריים." />
</svelte:head>

<main class="flex-grow">
	<Hero />
	<HowToPlay />
	<FeaturesShowcase />
	
	<!-- Lazy load below-the-fold components -->
	<LazyComponent rootMargin="200px">
		<VisualGallery />
	</LazyComponent>
	
	<LazyComponent rootMargin="150px">
		<DiscoverSection />
	</LazyComponent>
	
	<LazyComponent rootMargin="100px">
		<FAQ />
	</LazyComponent>
</main>

<LazyComponent rootMargin="50px">
	<PageFooter />
</LazyComponent>
