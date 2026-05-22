<!-- src/lib/components/landing/FAQ.svelte -->
<script lang="ts">
	let activeIndex: number | null = null;

	const faqItems = [
		{
			q: 'איך משחקים בצופן?',
			a: 'בכל רמה תקבלו ציטוט מוצפן עם מספרים במקום אותיות. המטרה היא לפענח ולגלות את הציטוט המקורי.'
		},
		{
			q: 'כמה רמות יש במשחק?',
			a: 'המשחק כולל מאות רמות מקל למתקדם. תכנים חדשים מתווספים באופן קבוע.'
		},
		{
			q: 'מה סוגי הציטוטים?',
			a: 'פסוקים מהתנ"ך, אמרות חז"ל, ביטויים עממיים, שירים עבריים קלסיים ואמרות של הוגי דעות ישראליים.'
		},
		{
			q: 'האם המשחק מתאים לכל הגילאים?',
			a: 'בהחלט! מתאים מגיל 10 לכל המשפחה. הרמות הקלות לילדים ובני נוער, הקשות לאוהבי אתגרים.'
		},
		{
			q: 'האם יש רמזים?',
			a: 'כן! רמז על נושא הציטוט, חשיפת אות בודדת, או חשיפת מילה שלמה — לכם לבחור.'
		},
		{
			q: 'האם המשחק חינמי?',
			a: 'המשחק זמין להורדה חינמית עם מבחר רמות ללא תשלום.'
		},
		{
			q: 'המשחק לא עובד, מה עושים?',
			a: 'אני מפתח יחיד ואני לוקח כל בעיה ברצינות. באגים רציניים מקבלים עדיפות עליונה — כתבו לי!'
		},
		{
			q: 'איך יוצרים קשר?',
			a: "דרך דף 'צור קשר' באתר, אימייל ישיר, או ברשתות החברתיות. עונה לכל פנייה בהקדם."
		}
	];

	function toggle(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section id="faq" class="sec sec-alt z1">
	<div class="l-container">
		<h2 class="sec-title reveal">שאלות <span class="hi">נפוצות</span></h2>
		<p class="sec-sub reveal">מצאו תשובות לכל מה שרציתם לדעת</p>
		<div class="faq-wrap">
			{#each faqItems as item, index}
				<div class="faq-item reveal" class:open={activeIndex === index}>
					<button
						class="faq-q"
						aria-expanded={activeIndex === index}
						on:click={() => toggle(index)}
					>
						<span class="faq-chevron">
							<svg viewBox="0 0 11 11" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8">
								<path d="M1.5 3.5l4 4 4-4" />
							</svg>
						</span>
						{item.q}
					</button>
					<div class="faq-body">
						<div class="faq-ans">{item.a}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq-wrap {
		max-width: 780px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.faq-item {
		border: 1px solid var(--border);
		border-radius: var(--r-sm);
		overflow: hidden;
		transition: border-color 0.25s;
	}
	.faq-item.open {
		border-color: var(--primary);
	}

	.faq-q {
		width: 100%;
		background: var(--surface);
		border: none;
		cursor: pointer;
		padding: 1.05rem 1.4rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		color: var(--text);
		font-family: var(--font);
		font-size: 0.97rem;
		font-weight: 600;
		text-align: right;
		direction: rtl;
		transition: background 0.2s;
	}
	.faq-q:hover {
		background: var(--surface-hov);
	}

	.faq-chevron {
		flex-shrink: 0;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		border: 1.5px solid var(--border);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s, border-color 0.25s;
	}
	.faq-item.open .faq-chevron {
		transform: rotate(180deg);
		border-color: var(--primary);
	}
	.faq-chevron svg {
		width: 11px;
		height: 11px;
		stroke: var(--muted);
		fill: none;
	}
	.faq-item.open .faq-chevron svg {
		stroke: var(--primary);
	}

	.faq-body {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.faq-item.open .faq-body {
		max-height: 320px;
	}

	.faq-ans {
		padding: 0 1.4rem 1.2rem;
		border-top: 1px solid var(--border);
		padding-top: 0.9rem;
		font-size: 0.88rem;
		color: var(--muted);
		line-height: 1.7;
	}
</style>
