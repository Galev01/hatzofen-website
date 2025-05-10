<!-- src/lib/components/landing/Hero.svelte -->
<script lang="ts">
	// No specific script logic needed for this component yet
	import { browser } from '$app/environment';
</script>

<section id="hero" class="py-16 md:py-24">
	<div class="container mx-auto px-4">
		<!-- Desktop: 50/50 Split | Mobile: Stacks -->
		<div class="flex flex-col md:flex-row md:gap-12 lg:gap-16 items-center">
			<!-- Video Column (Visually Left in RTL on Desktop) -->
			<div class="md:w-1/2 w-full flex justify-center items-center order-1 md:order-2">
				<div class="w-full max-w-[280px] sm:max-w-[320px] mx-auto">
					<div class="relative rounded-lg shadow-2xl shadow-brand-primary/30 overflow-hidden" style="padding-top: 177.78%;"> <!-- 9:16 Aspect Ratio -->
						<video 
							src="/placeholder-app-video.mp4" 
							autoplay 
							loop 
							muted 
							playsinline
							class="absolute top-0 left-0 w-full h-full object-cover"
							aria-label="App gameplay video"
						>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>

			<!-- Text Column (Logo, Title, Subtitle) (Visually Right in RTL on Desktop) -->
			<div class="md:w-1/2 w-full flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1 mt-10 md:mt-0">
				<div> <!-- Invisible container for grouping -->
					<img 
						src="/logos/Tzofen_logo2.png" 
						alt="הצופן App Logo" 
						class="h-80 w-auto mx-auto md:mx-auto mb-6 md:mb-8"
					/>
					<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 md:mb-6">
						הצופן: פצחו את סודות החוכמה העברית!
					</h1>
					<p class="text-lg sm:text-xl text-brand-text-light opacity-90">
						משחק חידות ממכר המשלב אתגר, ידע וכיף בעולם הציטוטים העבריים.
					</p>
				</div>
			</div>
		</div>

		<!-- Bottom Full-Width Section: Store Buttons -->
		<div class="mt-12 md:mt-16">
			<div class="hero-cta-buttons flex flex-col sm:flex-row justify-center items-center gap-4">
				<a 
					href="#" 
					class="btn-appstore transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-background rounded-md"
					aria-label="Download on the App Store"
				>
					{#if browser}
						{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}
							<LottieModule.LottiePlayer
								src="/lottie/icons/App Store.json"
								autoplay={true}
								loop={false}
								controls={false}
								width="166px"
								height="56px"
								ariaLabel="הורד ב-App Store"
								renderer="svg"
								background="transparent"
								containerClass="h-12 md:h-14"
							/>
						{/await}
					{:else}
						<img src="/placeholder-appstore-badge-he.png" alt="הורד ב-App Store" class="h-12 md:h-14 mx-auto sm:mx-0">
					{/if}
				</a>
				<a 
					href="#" 
					class="btn-googleplay transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-background rounded-md"
					aria-label="Get it on Google Play"
				>
					{#if browser}
						{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}
							<LottieModule.LottiePlayer
								src="/lottie/icons/Google Play.json"
								autoplay={true}
								loop={false}
								controls={false}
								width="166px"
								height="56px"
								ariaLabel="הורד ב-Google Play"
								renderer="svg"
								background="transparent"
								containerClass="h-12 md:h-14"
							/>
						{/await}
					{:else}
						<img src="/placeholder-googleplay-badge-he.png" alt="הורד ב-Google Play" class="h-12 md:h-14 mx-auto sm:mx-0">
					{/if}
				</a>
			</div>
		</div>
	</div>
</section> 