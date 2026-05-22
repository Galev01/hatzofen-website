<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import HowToPlay from '$lib/components/landing/HowToPlay.svelte';
	import FeaturesShowcase from '$lib/components/landing/FeaturesShowcase.svelte';
	import VisualGallery from '$lib/components/landing/VisualGallery.svelte';
	import DiscoverSection from '$lib/components/landing/DiscoverSection.svelte';
	import FAQ from '$lib/components/landing/FAQ.svelte';

	// Scroll-reveal: stagger siblings, reveal once on enter.
	onMount(() => {
		const els = document.querySelectorAll<HTMLElement>('.reveal');
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			els.forEach((el) => el.classList.add('in'));
			return;
		}
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((en) => {
					if (!en.isIntersecting) return;
					const target = en.target as HTMLElement;
					const siblings = [...(target.parentElement?.children ?? [])];
					const delay = siblings.indexOf(target) * 90;
					setTimeout(() => target.classList.add('in'), delay);
					obs.unobserve(target);
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
		);
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	});
</script>

<svelte:head>
	<title>הצופן - פאזל עברי קריפטוגרפי</title>
	<meta
		name="description"
		content="גלו את הקסם של המילה העברית עם 'הצופן' - משחק חידות ממכר המשלב אתגר, ידע וכיף בעולם הציטוטים העבריים."
	/>
</svelte:head>

<main>
	<Hero />
	<HowToPlay />
	<FeaturesShowcase />
	<VisualGallery />
	<DiscoverSection />
	<FAQ />
</main>
