<!-- src/lib/components/landing/FeaturesShowcase.svelte -->
<script lang="ts">
	const features = [
		{
			icon: '🧩',
			title: 'משחק מאתגר וייחודי',
			desc: 'פענחו ציטוטים עבריים על ידי התאמת מספרים לאותיות. חוויית פאזל מרעננת שמותחת את הלוגיקה.'
		},
		{
			icon: '📚',
			title: 'מאגר תוכן עשיר',
			desc: 'מאות חידות בקטגוריות מגוונות: חוכמת ישראל, תנ"ך, הומור, פתגמים, שירים ועוד.'
		},
		{
			icon: '📅',
			title: 'אתגר יומי מתחדש',
			desc: 'חידה חדשה ומקורית מחכה מדי יום — סיבה מצוינת לחזור ולשחק.'
		},
		{
			icon: '📊',
			title: 'קושי הדרגתי ורמות',
			desc: 'חידות מחולקות לרמות קל, בינוני וקשה. מתאים למתחילים ולמומחים כאחד.'
		},
		{
			icon: '💡',
			title: 'מערכת רמזים חכמה',
			desc: 'נתקעתם? השתמשו במטבעות לחשיפת אות, מילה שלמה, או רמז מיוחד.'
		},
		{
			icon: '✡️',
			title: 'עיצוב עברי מודרני',
			desc: 'ממשק מלא RTL, עיצוב אינטואיטיבי לחוויה מושלמת בעברית.'
		}
	];
</script>

<section id="features" class="sec z1">
	<div class="l-container">
		<h2 class="sec-title reveal">למה תאהבו את <span class="hi">הצופן</span>?</h2>
		<p class="sec-sub reveal">שישה סיבות טובות לפתוח אותו כל יום מחדש</p>

		<div class="features-grid">
			{#each features as feature}
				<div class="feat-card reveal">
					<div class="feat-icon-box">{feature.icon}</div>
					<div class="feat-body">
						<div class="feat-title">{feature.title}</div>
						<p class="feat-desc">{feature.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.1rem;
	}

	.feat-card {
		background: var(--bg-alt);
		border: 1px solid rgba(139, 116, 245, 0.12);
		border-radius: var(--r);
		padding: 1.6rem 1.5rem;
		display: flex;
		gap: 1.1rem;
		align-items: flex-start;
		transition: border-color 0.3s, transform 0.3s, background 0.3s;
		cursor: default;
	}
	.feat-card:hover {
		border-color: var(--border-hov);
		background: rgba(139, 116, 245, 0.06);
		transform: translateY(-3px);
	}

	.feat-icon-box {
		width: 46px;
		height: 46px;
		flex-shrink: 0;
		border-radius: 12px;
		background: var(--primary-dim);
		border: 1px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		transition: background 0.3s;
	}
	.feat-card:hover .feat-icon-box {
		background: rgba(var(--primary-rgb), 0.3);
	}

	.feat-body {
		flex: 1;
	}
	.feat-title {
		font-size: 0.98rem;
		font-weight: 700;
		color: var(--text);
		margin-bottom: 0.3rem;
	}
	.feat-desc {
		font-size: 0.84rem;
		color: var(--muted);
		line-height: 1.6;
	}

	@media (max-width: 500px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
