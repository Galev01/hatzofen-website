<!-- src/lib/components/landing/Nav.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = false;

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav id="nav" class:scrolled>
	<a href="/" class="nav-brand" aria-label="הצופן">
		<img src="/logos/Tzofen_logo2.webp" alt="לוגו הצופן" width="34" height="34" />
		<span class="nav-name">הצופן</span>
	</a>
	<ul class="nav-links">
		<li><a href="/#what-is-it">מה זה?</a></li>
		<li><a href="/#features">תכונות</a></li>
		<li><a href="/#gallery">גלריה</a></li>
		<li><a href="/#faq">שאלות</a></li>
	</ul>
	<a
		href="https://apps.apple.com/il/app/id6746350040"
		target="_blank"
		rel="noopener"
		class="nav-cta"
	>
		הורד עכשיו
	</a>
</nav>

<style>
	#nav {
		position: sticky;
		top: 0;
		z-index: 100;
		height: var(--nav-h);
		background: rgba(14, 13, 28, 0.9);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
		padding: 0 clamp(1.25rem, 5vw, 3rem);
		gap: 2rem;
		transition: border-color 0.3s, background 0.5s;
	}
	#nav.scrolled {
		border-bottom-color: rgba(139, 116, 245, 0.25);
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: 9px;
		flex-shrink: 0;
	}
	.nav-brand img {
		width: 34px;
		height: 34px;
		object-fit: contain;
		filter: drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.4));
	}
	.nav-name {
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--primary);
		letter-spacing: -0.02em;
	}

	.nav-links {
		flex: 1;
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin: 0;
		padding: 0;
	}
	.nav-links a {
		font-size: 0.88rem;
		font-weight: 500;
		color: var(--muted);
		transition: color 0.2s;
	}
	.nav-links a:hover {
		color: var(--text);
	}

	.nav-cta {
		flex-shrink: 0;
		padding: 0.45rem 1.25rem;
		background: var(--primary);
		color: #0b0917;
		border-radius: 8px;
		font-size: 0.85rem;
		font-weight: 700;
		transition: opacity 0.2s, transform 0.2s;
	}
	.nav-cta:hover {
		opacity: 0.85;
		transform: translateY(-1px);
	}

	@media (max-width: 620px) {
		.nav-links {
			display: none;
		}
	}
</style>
