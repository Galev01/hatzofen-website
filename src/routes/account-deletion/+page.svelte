<svelte:head>
	<title>מחיקת חשבון - הצופן</title>
	<meta name="description" content="בקש מחיקה של חשבון המשתמש שלך באפליקציית הצופן." />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-theme(spacing.32)-theme(spacing.32))]">
	<article class="prose prose-invert prose-headings:text-brand-primary prose-a:text-brand-accent max-w-3xl mx-auto text-right" dir="rtl">
		<div class="flex justify-center mb-8 md:mb-10">
			<img 
				src="/logos/Tzofen_logo2.png" 
				alt="לוגו הצופן" 
				class="h-128 w-38 md:h-80"
			/>
		</div>
		<h1>בקשת מחיקת חשבון</h1>

		<p>
			אנו מבינים שייתכנו נסיבות בהן תרצה למחוק את חשבונך והנתונים המשויכים אליו מאפליקציית "הצופן".
			כדי להתחיל בתהליך, אנא מלא את הטופס הקצר למטה.
		</p>
		<p>
			<strong>חשוב:</strong> הגשת טופס זה מהווה בקשה למחיקת חשבון. לאחר קבלת הבקשה, אנו נאמת את פרטיך וניצור עמך קשר בדוא"ל שסיפקת כדי לאשר את המחיקה לפני שנמשיך. תהליך המחיקה עשוי להימשך מספר ימים.
		</p>
		<p>
			מחיקת החשבון היא פעולה בלתי הפיכה ותסיר את כל התקדמות המשחק שלך, הישגים ונתונים אישיים אחרים הקשורים לחשבונך.
		</p>

		<form 
			action="mailto:support@hatzofen.com?subject=%D7%91%D7%A7%D7%A9%D7%AA%20%D7%9E%D7%97%D7%99%D7%A7%D7%AA%20%D7%97%D7%A9%D7%91%D7%95%D7%9F%20-%20%D7%94%D7%A6%D7%95%D7%A4%D7%9F" 
			method="post" 
			enctype="text/plain"
			class="mt-8 space-y-6"
		>
			<div>
				<label for="email" class="block text-sm font-medium text-brand-text-light">
					כתובת הדוא"ל הרשומה בחשבון:
				</label>
				<div class="mt-1">
					<input 
						id="email" 
						name="email_address_to_delete" 
						type="email" 
						autocomplete="email" 
						required 
						class="peer block w-full appearance-none rounded-md border border-gray-600 bg-brand-background px-3 py-2 text-brand-text-light placeholder-gray-500 shadow-sm focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
						placeholder="your@email.com"
					/>
					<!-- Basic validation feedback example (optional)
					<p class="mt-2 invisible peer-invalid:visible text-red-400 text-sm">
						אנא הזן כתובת דוא"ל חוקית.
					</p> -->
				</div>
			</div>

			<div>
				<button 
					type="submit" 
					class="flex w-full justify-center rounded-md border border-transparent bg-brand-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-background transition"
				>
					שלח בקשת מחיקה
				</button>
			</div>
			<p class="text-sm text-gray-400">
				לחיצה על "שלח בקשת מחיקה" תפתח את תוכנת הדוא"ל המוגדרת כברירת מחדל במכשירך עם הפרטים מוכנים לשליחה. יהיה עליך לשלוח את הדוא"ל באופן ידני.
			</p>
		</form>

		<p class="mt-10">
			אם נתקלת בבעיות או שיש לך שאלות נוספות, אנא פנה אלינו ישירות בכתובת: <a href="mailto:support@hatzofen.com">support@hatzofen.com</a>.
		</p>

	</article>
</div>