<!-- src/lib/components/landing/HowToPlay.svelte -->
<script lang="ts">
	// import { LottiePlayer } from '@lottiefiles/svelte-lottie-player'; // Removed static import
	import { browser } from '$app/environment';
	// No specific script logic needed yet
</script>

<section id="what-is-it" class="py-12 md:py-20 bg-slate-900">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-brand-text-light mb-10 md:mb-16">
			מה זה הצופן? <span class="text-brand-primary">|</span> איך משחקים?
		</h2>
		
		<div class="max-w-2xl mx-auto text-center mb-10 md:mb-16">
			<p class="text-lg text-brand-text-light opacity-90 leading-relaxed">
				"הצופן" הוא פאזל קריפטוגרפי בעברית שבו כל אות מוחלפת במספר ייחודי. המטרה שלכם היא לפענח את הציטוט המסתתר מאחורי המספרים, בעזרת היגיון, וידע בשפה העברית.
			</p>
		</div>

		<div class="steps-graphic grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
			<!-- Step 1 -->
			<div class="step bg-slate-800 p-6 rounded-lg shadow-lg text-center md:text-right border border-brand-primary/50 flex flex-col items-center md:items-start">
				{#if browser}
					{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}
						{#if LottieModule && LottieModule.LottiePlayer}
							<LottieModule.LottiePlayer 
								src="/lotties/Question Mark.json"
								autoplay
								loop
								width="64px"
								height="64px"
								ariaLabel="בחרו חידה"
								class="mb-4 mx-auto md:mx-0"
							/>
						{:else}
							<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
								<span class="text-brand-primary text-lg">?</span>
							</div>
						{/if}
					{:catch error}
						<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
							<span class="text-brand-primary text-lg">?</span>
						</div>
					{/await}
				{:else}
					<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
						<span class="text-brand-primary text-lg">?</span>
					</div>
				{/if}
				<h3 class="text-xl font-semibold text-brand-primary mb-2">1. בחרו קטגוריה וחידה</h3>
				<p class="text-brand-text-light opacity-80 text-sm leading-relaxed">
					בחרו מתוך מאות חידות בקטגוריות מגוונות כמו יהדות, ספורט, שירה עברית ועוד...
				</p>
			</div>
			<!-- Step 2 -->
			<div class="step bg-slate-800 p-6 rounded-lg shadow-lg text-center md:text-right border border-brand-primary/50 flex flex-col items-center md:items-start">
				{#if browser}
					{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}
						{#if LottieModule && LottieModule.LottiePlayer}
							<LottieModule.LottiePlayer 
								src="/lotties/Binary.json"
								autoplay
								loop
								width="64px"
								height="64px"
								ariaLabel="פענחו אותיות"
								class="mb-4 mx-auto md:mx-0"
							/>
						{:else}
							<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
								<span class="text-brand-primary text-lg">1</span>
							</div>
						{/if}
					{:catch error}
						<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
							<span class="text-brand-primary text-lg">1</span>
						</div>
					{/await}
				{:else}
					<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
						<span class="text-brand-primary text-lg">1</span>
					</div>
				{/if}
				<h3 class="text-xl font-semibold text-brand-primary mb-2">2. פענחו את האותיות</h3>
				<p class="text-brand-text-light opacity-80 text-sm leading-relaxed">
					השתמשו במקלדת החכמה כדי להתאים אותיות למספרים ולחשוף את המילים.
				</p>
			</div>
			<!-- Step 3 -->
			<div class="step bg-slate-800 p-6 rounded-lg shadow-lg text-center md:text-right border border-brand-primary/50 flex flex-col items-center md:items-start">
				{#if browser}
					{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}
						{#if LottieModule && LottieModule.LottiePlayer}
							<LottieModule.LottiePlayer 
								src="/lotties/Puzzle-Solving Teamwork.json"
								autoplay
								loop
								width="64px"
								height="64px"
								ariaLabel="גלו ציטוט"
								class="mb-4 mx-auto md:mx-0"
							/>
						{:else}
							<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
								<span class="text-brand-primary text-lg">✓</span>
							</div>
						{/if}
					{:catch error}
						<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
							<span class="text-brand-primary text-lg">✓</span>
						</div>
					{/await}
				{:else}
					<div class="w-16 h-16 bg-brand-primary/20 rounded-lg mb-4 mx-auto md:mx-0 flex items-center justify-center">
						<span class="text-brand-primary text-lg">✓</span>
					</div>
				{/if}
				<h3 class="text-xl font-semibold text-brand-primary mb-2">3. גלו את הציטוט המלא</h3>
				<p class="text-brand-text-light opacity-80 text-sm leading-relaxed">
					פתרו את החידה במלואה, צברו מטבעות והתקדמו לאתגר הבא!
				</p>
			</div>
		</div>
	</div>
</section> 