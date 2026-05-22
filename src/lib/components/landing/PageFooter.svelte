<!-- src/lib/components/landing/PageFooter.svelte -->
<script lang="ts">
	const currentYear = new Date().getFullYear();
	const APPSTORE =
		'https://apps.apple.com/il/app/%D7%94%D7%A6%D7%95%D7%A4%D7%9F-%D7%A4%D7%90%D7%96%D7%9C-%D7%A2%D7%91%D7%A8%D7%99/id6746350040?l=he';
	const GOOGLEPLAY = 'https://play.google.com/store/apps/details?id=com.gallev01.tzofen_native';
</script>

<footer id="page-footer" class="z1" dir="rtl">
	<div class="footer-brand">
		<img src="/logos/new_logo.webp" alt="הצופן" />
		<span class="footer-brand-name">הצופן</span>
	</div>
	<p class="footer-tagline">פאזל קריפטוגרפי עברי ממכר</p>

	<div class="store-row footer-store">
		<a href={APPSTORE} target="_blank" rel="noopener" class="store-btn" aria-label="App Store">
			<img src="/icons/App Store.svg" alt="הורד ב-App Store" />
		</a>
		<a href={GOOGLEPLAY} target="_blank" rel="noopener" class="store-btn" aria-label="Google Play">
			<img src="/icons/Google Play.svg" alt="הורד ב-Google Play" />
		</a>
	</div>

	<ul class="footer-nav">
		<li><a href="/contact-us">צור קשר</a></li>
		<li><a href="/privacy-policy">מדיניות פרטיות</a></li>
		<li><a href="/terms-of-use">תנאי שימוש</a></li>
		<li><a href="/account-deletion">מחיקת חשבון</a></li>
		<li><a href="/changelog">יומן שינויים</a></li>
	</ul>

	<p class="footer-copy">© {currentYear} כל הזכויות שמורות ל"הצופן"</p>
</footer>

<style>
	footer {
		background: rgba(5, 3, 14, 0.95);
		border-top: 1px solid var(--border);
		padding: 3rem clamp(1.25rem, 5vw, 3rem) 2rem;
		text-align: center;
		position: relative;
		z-index: 1;
		margin-top: auto;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-bottom: 0.5rem;
	}
	.footer-brand img {
		width: 30px;
		object-fit: contain;
	}
	.footer-brand-name {
		font-size: 1.15rem;
		font-weight: 800;
		color: var(--primary);
	}

	.footer-tagline {
		font-size: 0.82rem;
		color: var(--muted);
		margin-bottom: 1.75rem;
	}

	.footer-store {
		margin-bottom: 2rem;
		gap: 0.85rem;
	}

	.footer-nav {
		list-style: none;
		display: flex;
		gap: 0.4rem 1.25rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 0 0 1.75rem;
		padding: 0;
	}
	.footer-nav a {
		font-size: 0.78rem;
		color: var(--muted);
		transition: color 0.2s;
	}
	.footer-nav a:hover {
		color: var(--text);
	}

	.footer-copy {
		font-size: 0.7rem;
		color: rgba(237, 233, 255, 0.28);
	}
</style>
