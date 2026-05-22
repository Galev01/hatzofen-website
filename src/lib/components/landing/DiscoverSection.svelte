<!-- src/lib/components/landing/DiscoverSection.svelte -->
<script lang="ts">
	const APPSTORE =
		'https://apps.apple.com/il/app/%D7%94%D7%A6%D7%95%D7%A4%D7%9F-%D7%A4%D7%90%D7%96%D7%9C-%D7%A2%D7%91%D7%A8%D7%99/id6746350040?l=he';
	const GOOGLEPLAY = 'https://play.google.com/store/apps/details?id=com.gallev01.tzofen_native';
</script>

<section id="discover" class="sec z1">
	<div class="l-container">
		<div class="discover-inner">
			<h2 class="sec-title reveal">מוכנים <span class="hi">לאתגר</span> את עצמכם?</h2>
			<p class="discover-body reveal">
				"הצופן" הוא לא רק משחק — זוהי דרך מהנה לחדד את המחשבה, להרחיב את אוצר המילים בעברית ולעבוד על
				המוח. כל חידה היא הזדמנות לגלות דברים שלא ידעתם.
			</p>
			<div class="store-row reveal">
				<a href={APPSTORE} target="_blank" rel="noopener" class="store-btn" aria-label="App Store">
					<img src="/icons/App Store.svg" alt="הורד ב-App Store" />
				</a>
				<a href={GOOGLEPLAY} target="_blank" rel="noopener" class="store-btn" aria-label="Google Play">
					<img src="/icons/Google Play.svg" alt="הורד ב-Google Play" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	#discover {
		position: relative;
		overflow: hidden;
		text-align: center;
	}
	.discover-inner {
		max-width: 660px;
		margin: 0 auto;
	}
	.discover-body {
		font-size: clamp(0.95rem, 2vw, 1.1rem);
		color: var(--muted);
		line-height: 1.8;
		margin-bottom: 2.5rem;
	}
</style>
