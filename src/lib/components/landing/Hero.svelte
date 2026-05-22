<!-- src/lib/components/landing/Hero.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	const APPSTORE =
		'https://apps.apple.com/il/app/%D7%94%D7%A6%D7%95%D7%A4%D7%9F-%D7%A4%D7%90%D7%96%D7%9C-%D7%A2%D7%91%D7%A8%D7%99/id6746350040?l=he';
	const GOOGLEPLAY = 'https://play.google.com/store/apps/details?id=com.gallev01.tzofen_native';

	let overlay: HTMLElement;

	onMount(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce || !overlay) return;

		const LETTERS = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
		const timers: number[] = [];

		const spawn = () => {
			const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
			const num = Math.floor(Math.random() * 54) + 1;
			const el = document.createElement('span');
			el.className = 'hcp';
			el.textContent = `${letter}=${num}`;

			const x = Math.random() * 88 + 2;
			const y = Math.random() * 88 + 2;
			const sz = Math.random() * 12 + 11;
			const dur = Math.random() * 2200 + 2000;
			const op = (Math.random() * 0.25 + 0.18).toFixed(2);

			el.style.cssText =
				`left:${x}%;top:${y}%;font-size:${sz}px;` +
				`--dur:${dur}ms;--op:${op};animation-duration:${dur}ms;`;

			overlay.appendChild(el);
			timers.push(window.setTimeout(() => el.remove(), dur + 50));
		};

		for (let i = 0; i < 10; i++) timers.push(window.setTimeout(spawn, Math.random() * 1800));
		const interval = window.setInterval(spawn, 380);

		return () => {
			clearInterval(interval);
			timers.forEach(clearTimeout);
		};
	});
</script>

<section id="hero">
	<div id="hero-cipher" bind:this={overlay} aria-hidden="true"></div>
	<div class="hero-inner">
		<div class="hero-tag reveal">🔐&nbsp; פאזל קריפטוגרפי עברי</div>

		<div class="hero-logo-wrap reveal">
			<img
				src="/logos/Tzofen_logo2.webp"
				alt="הצופן"
				class="hero-logo"
				width="320"
				height="500"
				fetchpriority="high"
				decoding="sync"
			/>
		</div>

		<h1 class="hero-title reveal">
			פאזל ישראלי
			<em>שאתם לא תפסיקו לשחק</em>
		</h1>

		<p class="hero-sub reveal">
			פענחו ציטוטים עבריים מוצפנים. מאות חידות, קטגוריות מגוונות, ואתגר יומי מתחדש.
		</p>

		<div class="store-row reveal">
			<a href={APPSTORE} target="_blank" rel="noopener" class="store-btn" aria-label="הורד ב-App Store">
				<img src="/icons/App Store.svg" alt="הורד ב-App Store" />
			</a>
			<a href={GOOGLEPLAY} target="_blank" rel="noopener" class="store-btn" aria-label="הורד ב-Google Play">
				<img src="/icons/Google Play.svg" alt="הורד ב-Google Play" />
			</a>
		</div>
	</div>

	<div class="scroll-hint" aria-hidden="true">
		<svg viewBox="0 0 16 16" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d="M8 3v10M4 9l4 4 4-4" />
		</svg>
		גללו
	</div>
</section>

<style>
	#hero {
		min-height: calc(100svh - var(--nav-h));
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem clamp(1.25rem, 5vw, 3rem) 4rem;
		text-align: center;
		position: relative;
	}

	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		max-width: 680px;
		position: relative;
		z-index: 1;
	}

	.hero-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 0.3rem 1rem;
		border: 1px solid var(--border);
		border-radius: 100px;
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--primary);
		background: var(--primary-dim);
		letter-spacing: 0.04em;
	}

	.hero-logo-wrap {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	.hero-logo-wrap::before {
		content: '';
		position: absolute;
		width: 260px;
		height: 260px;
		background: radial-gradient(circle, var(--primary-dim) 0%, transparent 70%);
		border-radius: 50%;
		animation: glow-pulse 3.5s ease-in-out infinite;
	}
	@keyframes glow-pulse {
		0%,
		100% {
			transform: scale(0.95);
			opacity: 0.6;
		}
		50% {
			transform: scale(1.1);
			opacity: 1;
		}
	}

	.hero-logo {
		width: clamp(150px, 28vw, 220px);
		height: auto;
		object-fit: contain;
		position: relative;
		z-index: 1;
		filter: drop-shadow(0 10px 50px rgba(var(--primary-rgb), 0.35));
		animation: float 7s ease-in-out infinite;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-14px);
		}
	}

	.hero-title {
		font-size: clamp(2.4rem, 6.5vw, 5rem);
		font-weight: 900;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}
	.hero-title em {
		color: var(--primary);
		font-style: normal;
		display: block;
	}

	.hero-sub {
		font-size: clamp(1rem, 2.2vw, 1.2rem);
		color: var(--muted);
		max-width: 480px;
		line-height: 1.7;
	}

	/* Hero cipher overlay */
	#hero-cipher {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		overflow: hidden;
	}
	/* :global because the spans are created imperatively */
	#hero-cipher :global(.hcp) {
		position: absolute;
		font-family: 'Heebo', monospace;
		font-weight: 700;
		color: var(--primary);
		white-space: nowrap;
		opacity: 0;
		letter-spacing: 0.04em;
		animation: hcp-blink var(--dur, 3s) ease-in-out forwards;
	}
	@keyframes hcp-blink {
		0% {
			opacity: 0;
			transform: translateY(5px);
		}
		18% {
			opacity: var(--op, 0.35);
			transform: translateY(0);
		}
		75% {
			opacity: var(--op, 0.35);
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-5px);
		}
	}

	.scroll-hint {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		color: var(--muted);
		font-size: 0.7rem;
		letter-spacing: 0.08em;
		animation: bounce 2s ease-in-out infinite;
	}
	.scroll-hint svg {
		width: 16px;
		height: 16px;
		stroke: var(--muted);
	}
	@keyframes bounce {
		0%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(5px);
		}
	}
</style>
