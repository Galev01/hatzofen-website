<!-- src/lib/components/landing/HowToPlay.svelte -->
<script lang="ts">
	const steps = [
		{
			icon: '🗂️',
			num: 1,
			title: 'בחרו קטגוריה וחידה',
			desc: 'מאות חידות בקטגוריות מגוונות: יהדות, ספורט, שירה, הומור ועוד.'
		},
		{
			icon: '🔢',
			num: 2,
			title: 'פענחו את האותיות',
			desc: 'המקלדת החכמה עוזרת להתאים אותיות למספרים ולחשוף את המילים.'
		},
		{
			icon: '🏆',
			num: 3,
			title: 'גלו את הציטוט',
			desc: 'פתרו את החידה, צברו מטבעות והתקדמו לאתגר הבא!'
		}
	];
</script>

<section id="what-is-it" class="sec sec-alt z1">
	<div class="l-container">
		<h2 class="sec-title reveal">מה זה <span class="hi">הצופן</span>?</h2>
		<p class="sec-sub reveal">
			פאזל קריפטוגרפי שבו כל אות מוחלפת במספר ייחודי — פענחו את הציטוט המוסתר ברמה שלכם.
		</p>
		<div class="steps-grid">
			{#each steps as step}
				<div class="step-card reveal">
					<div class="step-icon">{step.icon}</div>
					<div class="step-num">{step.num}</div>
					<div class="step-title">{step.title}</div>
					<p class="step-desc">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.steps-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.25rem;
	}

	.step-card {
		background: var(--bg-alt);
		border: 1px solid rgba(139, 116, 245, 0.12);
		border-radius: var(--r);
		padding: 2rem 1.75rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
		transition: border-color 0.3s, transform 0.3s, background 0.3s;
		cursor: default;
	}
	.step-card:hover {
		border-color: var(--border-hov);
		transform: translateY(-5px);
		background: rgba(139, 116, 245, 0.06);
	}

	.step-num {
		width: 54px;
		height: 54px;
		border-radius: 50%;
		background: var(--primary-dim);
		border: 2px solid var(--primary);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--primary);
	}

	.step-icon {
		font-size: 2.2rem;
		line-height: 1;
	}
	.step-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text);
	}
	.step-desc {
		font-size: 0.88rem;
		color: var(--muted);
		line-height: 1.65;
	}

	@media (max-width: 500px) {
		.steps-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
