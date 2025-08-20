<!-- src/lib/components/landing/VisualGallery.svelte -->
<script lang="ts">
	// No specific script logic needed yet
	const galleryItems = [
		{
			src: 'tzofen/homescreen.webp',
			alt: 'App HomeScreen Screenshot',
			caption: 'מסך הבית הראשי'
		},
		{
			src: 'tzofen/catscreen.webp',
			alt: 'App CategorySelectScreen Screenshot',
			caption: 'בחירת קטגוריה וחידה'
		},
		{
			src: 'tzofen/puzscreen.webp',
			alt: 'App PuzzleScreen Screenshot',
			caption: 'מסך החידה בפעולה'
		},
		{
			src: 'tzofen/solvedscreen.webp',
			alt: 'App PuzzleSolvedScreen Screenshot',
			caption: 'חידה פתורה וציטוט חשוף'
		},
		{
			src: 'tzofen/hintscreen.webp',
			alt: 'App HintsModal Screenshot',
			caption: 'אפשרויות רמזים'
		}
		// Add more gallery items if needed, the grid will adjust
	];
</script>

<section id="gallery" class="py-12 md:py-20 bg-brand-background">
	<div class="container mx-auto px-4">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-brand-text-light mb-10 md:mb-16">
			הצצה אל תוך "הצופן"
		</h2>

		<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
			{#each galleryItems as item}
				<div class="gallery-item bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-brand-primary/30 group transform transition-transform duration-300 hover:scale-105">
					<div class="relative w-full max-w-[250px] mx-auto" style="padding-top: 200%;">
						<img 
							src="{item.src}" 
							alt="{item.alt}" 
							class="absolute top-0 left-0 w-full h-full object-contain bg-slate-800"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<p class="screenshot-caption p-2 text-center text-xs text-brand-text-light opacity-80 group-hover:opacity-100 transition-opacity">
						{item.caption}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Ensure images maintain their aspect ratio and are properly centered */
	.gallery-item img {
		object-fit: contain;
		object-position: center;
	}
</style> 