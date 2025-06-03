<!-- src/routes/contact-us/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	
	let isSubmitting = false;
	let submitMessage = '';
	let submitSuccess = false;
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		
		if (!browser) return;
		
		isSubmitting = true;
		submitMessage = '';
		
		try {
			// Create mailto URL with form data
			const emailSubject = encodeURIComponent(`צור קשר: ${formData.subject}`);
			const emailBody = encodeURIComponent(
				`שם: ${formData.name}\n` +
				`אימייל: ${formData.email}\n\n` +
				`הודעה:\n${formData.message}`
			);
			
			const mailtoUrl = `mailto:hatzofen.haivri@gmail.com?subject=${emailSubject}&body=${emailBody}`;
			
			// Open email client
			window.location.href = mailtoUrl;
			
			// Reset form after a short delay
			setTimeout(() => {
				formData = {
					name: '',
					email: '',
					subject: '',
					message: ''
				};
				
				submitSuccess = true;
				submitMessage = 'נפתח עבורך לקוח האימייל עם ההודעה מוכנה לשליחה!';
				isSubmitting = false;
			}, 500);
			
		} catch (error) {
			submitSuccess = false;
			submitMessage = 'אירעה שגיאה בפתיחת לקוח האימייל. אנא נסה שוב.';
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>צור קשר - הצופן</title>
	<meta name="description" content="צור קשר עם צוות הצופן. שלח לנו הודעה, מצא אותנו ברשתות החברתיות או צור קשר ישירות באימייל." />
</svelte:head>

<main class="min-h-screen bg-brand-background text-brand-text-light">
	<!-- Header Section -->
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4 text-center">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6">
				צור קשר
			</h1>
			<p class="text-xl md:text-2xl text-brand-text-light opacity-90 max-w-3xl mx-auto">
				יש לך שאלות, הצעות או רוצה לשתף אותנו ברעיונות? תמיד פתוח לשיחות והצעות!
                תודה שאתם בוחרים בצופן, גם אם לפעמים הוא לא מושלם ❤️
			</p>
		</div>
	</section>

	<!-- Contact Options Section -->
	<section class="py-12 md:py-16">
		<div class="container mx-auto px-4">
			<div class="max-w-6xl mx-auto">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
					
					<!-- Contact Methods -->
					<div class="space-y-8">
						<h2 class="text-3xl md:text-4xl font-bold text-brand-primary mb-8 text-center lg:text-right">
							דרכי התקשרות
						</h2>
						
						<!-- Email Contact -->
						<div class="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
							<div class="flex items-center gap-4 mb-4">
								<div class="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<h3 class="text-xl font-semibold text-brand-text-light">אימייל</h3>
							</div>
							<p class="text-brand-text-light opacity-80 mb-4">
								שלח אליי אימייל ואחזור אליך בהקדם האפשרי
							</p>
							<a 
								href="mailto:hatzofen.haivri@gmail.com" 
								class="text-brand-accent hover:text-brand-primary transition-colors font-medium"
								dir="ltr"
							>
								hatzofen.haivri@gmail.com
							</a>
						</div>

						<!-- LinkedIn Contact -->
						<div class="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
							<div class="flex items-center gap-4 mb-4">
								<div class="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
									</svg>
								</div>
								<h3 class="text-xl font-semibold text-brand-text-light">LinkedIn</h3>
							</div>
							<p class="text-brand-text-light opacity-80 mb-4">
								הוסף אותי בלינקאדין, אני תמיד פתוח להצעות ותלונות!
							</p>
							<a 
								href="https://www.linkedin.com/in/gal-lev-a867b9219/" 
								target="_blank"
								rel="noopener noreferrer"
								class="text-brand-accent hover:text-brand-primary transition-colors font-medium"
							>
								פרופיל המפתח ב-LinkedIn
							</a>
						</div>

						<!-- Response Time Info -->
						<div class="bg-brand-primary bg-opacity-10 border border-brand-primary border-opacity-30 rounded-lg p-6">
							<h3 class="text-lg font-semibold text-brand-primary mb-2">זמן תגובה</h3>
							<p class="text-brand-text-light opacity-90">
								אני מפתח יחיד, עובד במשרה מלאה, ומשתדל להגיע לכל פנייה תוך 24-48 שעות בימי עבודה, מתנצל מראש על כל עיכוב
							</p>
						</div>
					</div>

					<!-- Contact Form -->
					<div class="space-y-8">
						<h2 class="text-3xl md:text-4xl font-bold text-brand-primary mb-8 text-center lg:text-right">
							שלח הודעה
						</h2>
						
						<form on:submit={handleSubmit} class="space-y-6">
							<!-- Name Field -->
							<div>
								<label for="name" class="block text-sm font-medium text-brand-text-light mb-2">
									שם מלא *
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-brand-text-light placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
									placeholder="הכנס את שמך המלא"
								/>
							</div>

							<!-- Email Field -->
							<div>
								<label for="email" class="block text-sm font-medium text-brand-text-light mb-2">
									כתובת אימייל *
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									dir="ltr"
									class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-brand-text-light placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
									placeholder="your.email@example.com"
								/>
							</div>

							<!-- Subject Field -->
							<div>
								<label for="subject" class="block text-sm font-medium text-brand-text-light mb-2">
									נושא *
								</label>
								<input
									type="text"
									id="subject"
									bind:value={formData.subject}
									required
									class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-brand-text-light placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
									placeholder="נושא ההודעה"
								/>
							</div>

							<!-- Message Field -->
							<div>
								<label for="message" class="block text-sm font-medium text-brand-text-light mb-2">
									הודעה *
								</label>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows="6"
									class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-brand-text-light placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-vertical"
									placeholder="כתב את הודעתך כאן..."
								></textarea>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full bg-brand-primary hover:bg-brand-primary/90 disabled:bg-brand-primary/50 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-background"
							>
								{#if isSubmitting}
									<span class="flex items-center justify-center gap-2">
										<svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
											<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										פותח לקוח אימייל...
									</span>
								{:else}
									שלח הודעה
								{/if}
							</button>

							<!-- Submit Message -->
							{#if submitMessage}
								<div class="p-4 rounded-lg {submitSuccess ? 'bg-green-900/30 border border-green-500/30 text-green-400' : 'bg-red-900/30 border border-red-500/30 text-red-400'}">
									{submitMessage}
								</div>
							{/if}
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-12 md:py-16 bg-slate-900/50">
		<div class="container mx-auto px-4">
			<div class="max-w-4xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-bold text-brand-primary mb-8">
					שאלות נפוצות
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
					<div class="bg-slate-800 rounded-lg p-6">
						<h3 class="text-lg font-semibold text-brand-text-light mb-3">
							איך אני יכול לדווח על באג במשחק?
						</h3>
						<p class="text-brand-text-light opacity-80">
							שלח אליי אימייל עם תיאור מפורט של הבעיה, כולל מודל המכשיר וגרסת האפליקציה.
						</p>
					</div>
					<div class="bg-slate-800 rounded-lg p-6">
						<h3 class="text-lg font-semibold text-brand-text-light mb-3">
							האם אפשר להציע רעיונות לחידות חדשות?
						</h3>
						<p class="text-brand-text-light opacity-80">
							בהחלט! תמיד אשמח לשמוע רעיונות יצירתיים לחידות חדשות. צור קשר דרך הטופס או האימייל.
						</p>
					</div>
					<div class="bg-slate-800 rounded-lg p-6">
						<h3 class="text-lg font-semibold text-brand-text-light mb-3">
							יש בעיה עם החשבון שלי, מה לעשות?
						</h3>
						<p class="text-brand-text-light opacity-80">
							צור קשר איתי עם פרטי החשבון (ללא סיסמאות) ואעזור לפתור את הבעיה.
						</p>
					</div>
					<div class="bg-slate-800 rounded-lg p-6">
						<h3 class="text-lg font-semibold text-brand-text-light mb-3">
							האם אתה מחפש מפתחים נוספים/עזרה בפרויקטים נוספים?
						</h3>
						<p class="text-brand-text-light opacity-80">
							אני תמיד מחפש אנשים יצירתיים עם שאפתנות, פנו אליי בלינקאדין
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main> 