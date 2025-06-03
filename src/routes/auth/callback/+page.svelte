<svelte:head>
	<title>אימות - הצופן</title>
	<meta name="description" content="דף אימות עבור אפליקציית הצופן." />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { supabaseClient } from '$lib/supabaseClient'; // Ensure this path is correct

	const logoUrl: string = "/logos/Tzofen_logo2.png";
	let message: string = "מעבד את הבקשה...";
	let isError: boolean = false;
	let showMessage: boolean = false; // To delay showing message until checks are done

	let authSubscription: { unsubscribe: () => void } | null = null;

	onMount(() => {
		// Check for Supabase URL and Key configuration
		if (supabaseClient.supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseClient.supabaseKey === 'YOUR_SUPABASE_ANON_KEY') {
			message = "שגיאת הגדרה: פרטי Supabase אינם מוגדרים כראוי. אנא פנה לתמיכה.";
			isError = true;
			showMessage = true;
			return;
		}

		const hash = window.location.hash.substring(1);
		const params = new URLSearchParams(hash);
		const errorDescription = params.get('error_description');
		const accessToken = params.get('access_token');
		// const type = params.get('type'); // e.g., 'signup', 'recovery', 'magiclink'

		if (errorDescription) {
			message = decodeURIComponent(errorDescription.replace(/\+/g, ' '));
			// For a more user-friendly generic message:
			// message = "תוקף הלינק פג או שאירעה שגיאה בעיבודו.";
			isError = true;
			showMessage = true;
			return;
		}

		// If there's no access token and no error, the link might be invalid or already processed.
		// Supabase client handles the token from the hash automatically if present.
		// We rely on onAuthStateChange to confirm the session.
		if (!accessToken && !errorDescription) {
			// This condition might be too strict if some flows don't immediately present an access_token
			// but rely on onAuthStateChange after Supabase client init.
			// For now, assume if no token and no error, it's an invalid direct access or malformed link.
			// message = "קישור לא תקין או שפג תוקפו.";
			// isError = true;
			// showMessage = true;
			// If supabase is already initialized and has a session, it might be a refresh
			// Let onAuthStateChange handle it.
		}
		
		const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN' && session) {
				message = "אישור הרישום בוצע בהצלחה! הנך מועבר/ת לאפליקציה בעוד מספר רגעים...";
				isError = false;
				setTimeout(() => {
					goto('/'); // Redirect to home page or user dashboard
				}, 3000);
			} else if (event === 'SIGN_IN_ERROR' || (event === 'INITIAL_SESSION' && !session && accessToken)) {
				// If INITIAL_SESSION without a session but there was an access token, it likely failed
				message = "תוקף הלינק פג או שאירעה שגיאה בתהליך האימות.";
				isError = true;
			} else if (event === 'INITIAL_SESSION' && !session && !accessToken && !errorDescription) {
				// Loaded the page directly without any Supabase context in URL
				message = "קישור לא תקין או ישיר. דף זה מיועד לשימוש כחלק מתהליך אימות.";
				isError = true;
			}
			showMessage = true;
		});
		
		authSubscription = data.subscription;

		// Fallback if no auth state change fires quickly or if it's an invalid link without specific errors
		// This timeout helps handle cases where onAuthStateChange might not fire if link is totally bogus
		// or Supabase client fails to initialize properly due to bad config.
		setTimeout(() => {
			if (!showMessage) { // If no event has set the message yet
				if (!supabaseClient.supabaseUrl || supabaseClient.supabaseUrl === 'YOUR_SUPABASE_URL') {
					// Handled by the initial check, but as a safeguard
					message = "שגיאת הגדרה: פרטי Supabase אינם מוגדרים כראוי. אנא פנה לתמיכה.";
				} else {
					message = "לא ניתן היה לעבד את הבקשה. אנא נסה שנית או בדוק את הקישור.";
				}
				isError = true;
				showMessage = true;
			}
		}, 2500); // Adjust timeout as needed

	});

	onDestroy(() => {
		if (authSubscription) {
			authSubscription.unsubscribe();
		}
	});
</script>

<div class="flex-grow flex flex-col items-center justify-center text-center p-6" dir="rtl">
	{#if showMessage}
		<img src="{logoUrl}" alt="לוגו הצופן" class="h-24 md:h-32 mb-8" />
		<p 
			class="text-xl md:text-2xl mb-4 px-4 py-2 rounded-md"
			class:text-red-400={isError}
			class:bg-red-900={isError}
			class:text-green-400={!isError && message.includes('בהצלחה')}
			class:bg-green-900={!isError && message.includes('בהצלחה')}
			class:text-brand-text-light={!message.includes('בהצלחה') && !isError}
		>
			{message}
		</p>
		{#if !message.includes('בהצלחה') && isError}
			<a href="/" class="mt-4 text-brand-accent hover:underline">חזור לדף הבית</a>
		{/if}
	{:else}
		<!-- Optional: Simple loading spinner or text while showMessage is false -->
		<div class="flex flex-col items-center justify-center">
			<img src="{logoUrl}" alt="לוגו הצופן" class="h-24 md:h-32 mb-8 opacity-50" />
			<p class="text-xl text-brand-text-light animate-pulse">טוען...</p>
		</div>
	{/if}
</div> 