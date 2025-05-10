<!-- src/lib/components/landing/FeaturesShowcase.svelte -->
<script lang="ts">
	// import { LottiePlayer } from '@lottiefiles/svelte-lottie-player'; // Removed static import
	import { browser } from '$app/environment';

	// No specific script logic needed yet
	const features = [
		{
			icon: '/lotties/AI Brain Mapping.json',
			alt: 'Engaging Gameplay Icon',
			title: 'משחק מאתגר וייחודי',
			description: 'פענחו ציטוטים עבריים על ידי התאמת מספרים לאותיות. חווית פאזל מרעננת המותחת את כישורי השפה וההיגיון שלכם.'
		},
		{
			icon: '/lotties/Data Server.json',
			alt: 'Rich Content Icon',
			title: 'מאגר תוכן עשיר',
			description: 'מאות חידות בקטגוריות מגוונות: חוכמת ישראל, תנ"ך, הומור, פתגמים, שירים ועוד. '
		},
		{
			icon: '/lotties/Calendar.json',
			alt: 'Daily Challenge Icon',
			title: 'אתגר יומי מתחדש',
			description: 'חידה חדשה ומקורית מחכה לכם מדי יום. סיבה מצוינת לחזור ולשחק כל יום מחדש!'
		},
		{
			icon: '/lotties/AI Data Segments.json',
			alt: 'Progressive Difficulty Icon',
			title: 'קושי הדרגתי ורמות',
			description: 'חידות מחולקות לרמות קושי (קל, בינוני, קשה) ומאורגנות ברמות בתוך הקטגוריות. מתאים למתחילים ולמומחי פאזלים כאחד.'
		},
		{
			icon: '/lotties/Ready to Help.json',
			alt: 'Hint System Icon',
			title: 'מערכת רמזים חכמה',
			description: 'נתקעתם? השתמשו במטבעות המשחק כדי לחשוף אות, מילה שלמה או לקבל רמז מיוחד. האתגר נשאר, התסכול יורד.'
		},
		{
			icon: '/lotties/UI and UX Design.json',
			alt: 'RTL Design Icon',
			title: 'עיצוב עברי מודרני',
			description: 'ממשק משתמש מותאם באופן מלא לימין-לשמאל (RTL), עם עיצוב מודרני ואינטואיטיבי לחוויה מושלמת.'
		}
	];
</script>

<section id="features" class="py-12 md:py-20 bg-slate-800">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-brand-text-light mb-10 md:mb-16">
			למה תאהבו את הצופן?
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
			{#each features as feature}
				<div class="feature-item bg-brand-background p-6 rounded-lg shadow-lg text-center border border-brand-primary/50 flex flex-col items-center">
					{#if browser}
						{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}
							<LottieModule.LottiePlayer 
								src="{feature.icon}"
								autoplay
								loop
								width="{300}" 
								height="{300}"
								ariaLabel="{feature.alt}"
								class="mb-5"
							/>
						{:catch error}
							<p class="text-red-500 text-sm">Error loading animation: {error.message}</p>
						{/await}
					{/if}
					<h3 class="text-xl font-semibold text-brand-primary mb-2">{feature.title}</h3>
					<p class="text-brand-text-light opacity-80 text-sm leading-relaxed flex-grow">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- 
  The .filter-brand-primary class is defined in HowToPlay.svelte's style block. 
  For a real application, this should be a global utility or SVGs should be styled differently.
--> 