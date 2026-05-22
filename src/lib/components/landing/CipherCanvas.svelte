<!-- src/lib/components/landing/CipherCanvas.svelte -->
<!-- Floating Hebrew letter=number pairs drifting across the background. -->
<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const LETTERS = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
		const MAX = 60;
		const particles: {
			x: number;
			y: number;
			vx: number;
			vy: number;
			sz: number;
			op: number;
			txt: string;
		}[] = [];
		let raf = 0;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const spawn = () => {
			const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
			const num = Math.floor(Math.random() * 54) + 1;
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.18,
				vy: (Math.random() - 0.5) * 0.18,
				sz: Math.random() * 9 + 8,
				op: Math.random() * 0.06 + 0.025,
				txt: `${letter}=${num}`
			});
		};

		const tick = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const p of particles) {
				ctx.font = `${p.sz}px 'Heebo', monospace`;
				ctx.fillStyle = `rgba(${getComputedStyle(document.documentElement)
					.getPropertyValue('--primary-rgb')
					.trim()},${p.op})`;
				ctx.fillText(p.txt, p.x, p.y);
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < -60) p.x = canvas.width + 20;
				if (p.x > canvas.width + 60) p.x = -20;
				if (p.y < -20) p.y = canvas.height + 10;
				if (p.y > canvas.height + 20) p.y = -10;
			}
			raf = requestAnimationFrame(tick);
		};

		resize();
		for (let i = 0; i < MAX; i++) spawn();
		tick();
		window.addEventListener('resize', resize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<canvas id="cipher-canvas" bind:this={canvas} aria-hidden="true"></canvas>
