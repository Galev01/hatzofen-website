<script lang="ts">
	let activeIndex: number | null = null;

	const faqItems = [
		{
			question: "איך משחקים בצופן?",
			answer: "בכל רמה תקבלו ציטוט מוצפן עם אותיות מעורבבות. המטרה שלכם היא לפענח את הציטוט על ידי החלפת האותיות במקומות הנכונים. השתמשו ברמזים ובהיגיון כדי לגלות את המשפט המקורי."
		},
		{
			question: "כמה רמות יש במשחק?",
			answer: "המשחק כולל מאות רמות מאתגרות, החל מרמות קלות למתחילים ועד לרמות מורכבות למומחים. אני מוסיף רמות חדשות באופן קבוע כדי לשמור על האתגר."
		},
		{
			question: "מה סוגי הציטוטים במשחק?",
			answer: "המשחק כולל ציטוטים מגוונים: פסוקים מהתנ\"ך, אמרות חז\"ל, ביטויים עממיים, שירים עבריים קלסיים, ואמרות של הוגי דעות ישראליים."
		},
		{
			question: "האם המשחק מתאים לכל הגילאים?",
			answer: "בהחלט! המשחק מתאים לכל בני המשפחה החל מגיל 10 ומעלה. הרמות הקלות מתאימות לילדים ובני נוער, בעוד שהרמות המתקדמות יאתגרו גם מבוגרים ואוהבי תרבות עברית."
		},
		{
			question: "האם יש רמזים במשחק?",
			answer: "כן! כל רמה כוללת מערכת רמזים מתקדמת: רמז על נושא הציטוט, חשיפת אות בודדת, או חשיפת מילה שלמה. הרמזים עוזרים לכם להתקדם גם ברמות הקשות ביותר."
		},
		{
			question: "האם המשחק זמין בחינם?",
			answer: "המשחק זמין להורדה בחינם עם מבחר רמות ללא תשלום."
		},
        {
			question: "המשחק נתקע או לא עובד טוב, מה עושים?",
			answer: "אני כאן כדי לפתור לכם את הבעיות, אני מפתח יחיד ולא תמיד יש לי זמן לטפל בהכל, אבל כל מה שתכתבו לי נרשם, ואני לוקח אותו איתי לפיתוח כמה שיותר מהר, באגים רציניים ובעיות יקבלו עדיפות עליונה"
		},
		{
			question: "איך אפשר לקבל עזרה או לדווח על בעיה?",
			answer: "אנחנו כאן לעזור! ניתן ליצור קשר איתנו דרך דף 'צור קשר' באתר, לשלוח אימייל ישירות, או לפנות אלינו ברשתות החברתיות. אנחנו מקפידים לענות במהירות לכל פניה."
		}
	];

	function toggleFAQ(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section class="py-16 bg-gradient-to-b from-background to-background/95">
	<div class="container mx-auto px-4 max-w-4xl">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-text-light mb-4">
				שאלות נפוצות
			</h2>
			<p class="text-lg text-text-light/80 max-w-2xl mx-auto">
				מצאו תשובות לשאלות הנפוצות ביותר על המשחק
			</p>
		</div>

		<div class="space-y-4">
			{#each faqItems as item, index}
				<div class="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10">
					<button
						class="w-full px-6 py-4 text-right flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200"
						on:click={() => toggleFAQ(index)}
						aria-expanded={activeIndex === index}
					>
						<div class="flex items-center">
							<svg
								class="w-5 h-5 text-primary transition-transform duration-300 {activeIndex === index ? 'rotate-180' : ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</div>
						<h3 class="text-lg font-semibold text-text-light text-right flex-1 mr-4">
							{item.question}
						</h3>
					</button>
					
					<div
						class="overflow-hidden transition-all duration-300 ease-in-out {activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}"
					>
						<div class="px-6 pb-4 pt-2">
							<div class="border-t border-white/10 pt-4">
								<p class="text-text-light/90 leading-relaxed text-right">
									{item.answer}
								</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> 