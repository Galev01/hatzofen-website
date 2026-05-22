<!-- src/lib/components/landing/VisualGallery.svelte -->
<script lang="ts">
	const shots = [
		{ src: '/tzofen/homescreen.webp', alt: 'מסך הבית', label: 'מסך הבית' },
		{ src: '/tzofen/catscreen.webp', alt: 'בחירת קטגוריה', label: 'בחירת קטגוריה' },
		{ src: '/tzofen/puzscreen.webp', alt: 'מסך החידה', label: 'מסך החידה' },
		{ src: '/tzofen/solvedscreen.webp', alt: 'חידה פתורה', label: 'חידה פתורה' },
		{ src: '/tzofen/hintscreen.webp', alt: 'רמזים', label: 'מערכת רמזים' }
	];
</script>

<section id="gallery" class="sec sec-alt z1">
	<div class="l-container">
		<h2 class="sec-title reveal">הצצה אל תוך <span class="hi">הצופן</span></h2>
		<p class="sec-sub reveal">ראו את האפליקציה בפעולה</p>

		<div class="gallery-row">
			{#each shots as shot}
				<div class="phone reveal">
					<div class="phone-notch"></div>
					<div class="phone-screen">
						<img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
					</div>
					<div class="phone-label">{shot.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.gallery-row {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
		align-items: flex-end;
		flex-wrap: wrap;
		padding-bottom: 1rem;
	}

	.phone {
		width: 165px;
		flex-shrink: 0;
		background: #0d0a1e;
		border-radius: 30px;
		border: 2px solid rgba(255, 255, 255, 0.12);
		box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.06),
			0 0 0 1px var(--primary-dim);
		overflow: hidden;
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s;
	}
	.phone:hover {
		transform: translateY(-10px) scale(1.04);
		box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.1),
			0 0 0 1px var(--primary);
	}

	.phone:nth-child(1) {
		margin-bottom: 2.5rem;
	}
	.phone:nth-child(2) {
		margin-bottom: 0;
	}
	.phone:nth-child(3) {
		margin-bottom: 3rem;
	}
	.phone:nth-child(4) {
		margin-bottom: 0.5rem;
	}
	.phone:nth-child(5) {
		margin-bottom: 2rem;
	}

	.phone-notch {
		height: 22px;
		background: #0d0a1e;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 2px;
	}
	.phone-notch::after {
		content: '';
		width: 52px;
		height: 12px;
		background: rgba(0, 0, 0, 0.95);
		border-radius: 0 0 10px 10px;
	}

	.phone-screen {
		aspect-ratio: 9 / 19.5;
		overflow: hidden;
	}
	.phone-screen img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	.phone-label {
		padding: 0.45rem 0.5rem;
		text-align: center;
		font-size: 0.68rem;
		color: var(--muted);
		white-space: nowrap;
	}

	@media (max-width: 700px) {
		.phone {
			width: 130px;
		}
		.phone:nth-child(n) {
			margin-bottom: 0;
		}
	}
</style>
