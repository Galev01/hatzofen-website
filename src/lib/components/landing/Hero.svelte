<!-- src/lib/components/landing/Hero.svelte -->
<script lang="ts">
	// Function to show Google Play coming soon message
	function showGooglePlayMessage() {
		alert('בקרוב ב-Google Play!\n\nתאריך משוער: 1/07/2025\n\nהאפליקציה זמינה כעת ב-App Store');
	}
</script>

<section id="hero" class="py-16 md:py-24">
	<div class="container mx-auto px-4">
		<!-- Desktop: 50/50 Split | Mobile: Stacks -->
		<div class="flex flex-col md:flex-row md:gap-12 lg:gap-16 items-center">
			<!-- Video Column (Visually Left in RTL on Desktop) -->
			<div class="md:w-1/2 w-full hidden md:flex justify-center items-center order-1 md:order-2">
				<div class="w-full max-w-[400px] sm:max-w-[340px] mx-auto">
					<div class="iphone-frame relative shadow-2xl shadow-brand-primary/30">
						<div class="video-wrapper-for-iphone overflow-hidden">
							<video 
								src="/videos/tzofen_video.mp4" 
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
			</div>

			<!-- Text Column (Logo, Title, Subtitle) (Visually Right in RTL on Desktop) -->
			<div class="md:w-1/2 w-full flex flex-col items-center md:items-end text-center md:text-center order-2 md:order-1 mt-10 md:mt-0">
				<div> <!-- Invisible container for grouping -->
					<img 
						src="/logos/Tzofen_logo2.png" 
						alt="הצופן App Logo" 
						class="h-80 w-auto mx-auto md:mx-auto mb-6 md:mb-8"
					/>
					<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary mb-4 md:mb-6">
						פאזל ישראלי עברי
					</h1>
					<p class="text-lg sm:text-xl text-brand-text-light opacity-90">
						פאזל קריפטוגרפי ממכר המשלב אתגר וידע בשפה העברית<br>
						בקרוב בחנויות האפליקציות
					</p>
				</div>
			</div>
		</div>

		<!-- Bottom Full-Width Section: Store Buttons -->
		<div class="mt-12 md:mt-16">
			<div class="hero-cta-buttons flex flex-col sm:flex-row justify-center items-center gap-4">
				<a 
					href="https://apps.apple.com/il/app/%D7%94%D7%A6%D7%95%D7%A4%D7%9F-%D7%A4%D7%90%D7%96%D7%9C-%D7%A2%D7%91%D7%A8%D7%99/id6746350040?l=he" 
					target="_blank"
					rel="noopener noreferrer"
					class="btn-appstore transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-background rounded-md"
					aria-label="Download on the App Store"
				>
					<img src="/icons/App Store.svg" alt="הורד ב-App Store" class="h-12 md:h-14 mx-auto sm:mx-0">
				</a>
				<button 
					on:click={showGooglePlayMessage}
					class="btn-googleplay transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-background rounded-md cursor-pointer"
					aria-label="Get it on Google Play - Coming Soon"
				>
					<img src="/icons/Google Play.svg" alt="הורד ב-Google Play - בקרוב" class="h-12 md:h-14 mx-auto sm:mx-0">
				</button>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	/* Existing styles might be here */

	.iphone-frame {
		/* Adjust width/height based on the aspect ratio of your iphone-frame.png */
		/* For example, an iPhone X is roughly 19.5:9 aspect ratio */
		/* Let's assume the image itself dictates the aspect ratio, so we'll use padding-top trick if needed or set explicit dimensions */
		width: 100%; /* Or a fixed width like 300px */
		/* If using a frame image that includes the bezels and determines aspect ratio: */
		 aspect-ratio: 320/ 630; /* Example for iPhone 12/13 Pro. Adjust to your image. */

		/* If the image is just a border, you might need to set aspect ratio for the container explicitly */
		/* background-color: black; /* Optional: if the frame image has transparency for the device body */
		border-radius: 40px; /* Adjust to match your frame image's outer radius */
		overflow: hidden; /* Crucial to clip the video */
	}

	.video-wrapper-for-iphone {
		position: absolute;
		/* These values are EXAMPLES and MUST be adjusted based on your iphone-frame.png */
		/* They define the 'screen' area within the frame */
		top: 15px;   /* Distance from top of frame to screen */
		left: 15px;  /* Distance from left of frame to screen */
		right: 15px; /* Distance from right of frame to screen */
		bottom: 15px;/* Distance from bottom of frame to screen */
		border-radius: 30px; /* Inner radius of the screen, should be slightly less than the iphone-frame's radius */
		overflow: hidden; /* Ensures video stays within these bounds */
		z-index: 1; /* Ensure video is behind the frame image if it's an overlay with transparency */
	}

	.iphone-frame video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures video covers the area, might crop */
		/* No z-index here, it's inside the wrapper which is behind the frame image */
	}

	/* Ensure the image path is correct and the image is in static/images */
	/* .iphone-frame img { Commenting out as the image is removed
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2; /* Make sure frame is on top */

</style> 