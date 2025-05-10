<!-- src/lib/components/landing/PageFooter.svelte -->
<script lang="ts">
	// Component logic, e.g., for dynamic year
	const currentYear = new Date().getFullYear();
</script>

<footer id="page-footer" class="bg-slate-900 text-brand-text-light py-10 md:py-16 mt-auto">
	<div class="container mx-auto px-4 text-center">
		<div class="max-w-xl mx-auto">
			<h3 class="text-2xl md:text-3xl font-bold text-brand-primary mb-3">
				מוכנים לאתגר את המחשבה?
			</h3>
			<p class="text-lg text-brand-text-light opacity-90 mb-8">
				הורידו את "הצופן" עכשיו וצללו לעולם של חידות עבריות מרתקות!
			</p>

			<div class="footer-cta-buttons flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
				<a 
					href="#" 
					class="btn-appstore transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md"
					aria-label="Download on the App Store"
				>
					<img src="/placeholder-appstore-badge-he.png" alt="הורד ב-App Store" class="h-12 md:h-14">
				</a>
				<a 
					href="#" 
					class="btn-googleplay transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md"
					aria-label="Get it on Google Play"
				>
					<img src="/placeholder-googleplay-badge-he.png" alt="הורד ב-Google Play" class="h-12 md:h-14">
				</a>
			</div>

			<nav class="footer-nav mb-6">
				<a href="/privacy-policy" class="text-sm text-brand-text-light opacity-70 hover:opacity-100 hover:text-brand-accent transition mx-2">
					מדיניות פרטיות
				</a>
				<span class="text-brand-text-light opacity-50">|</span>
				<a href="/terms-of-use" class="text-sm text-brand-text-light opacity-70 hover:opacity-100 hover:text-brand-accent transition mx-2">
					תנאי שימוש
				</a>
				<!-- Optional: Social media links, contact email can be added here -->
			</nav>

			<p class="footer-copyright text-xs text-brand-text-light opacity-60">
				&copy; {currentYear} כל הזכויות שמורות ל"הצופן".
			</p>
		</div>
	</div>
</footer> 