<script lang="ts">
	import DeletionRequestForm from '$lib/components/forms/DeletionRequestForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>בקשת מחיקת חשבון</title>
	<meta name="description" content="בקש מחיקה של חשבון הצופן שלך" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">בקשת מחיקת חשבון</h1>

	{#if form?.success}
		<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-right" role="alert">
			<strong class="font-bold">הצלחה!</strong>
			<span class="block sm:inline"> בקשתך למחיקת חשבון התקבלה. אנו נטפל בה ידנית.</span>
		</div>
	{:else}
        {#if form?.errors}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 text-right" role="alert">
                <strong class="font-bold">שגיאה!</strong>
                 
                <span class="block sm:inline"> {form.errors.email ?? 'אנא תקן את השגיאות למטה.'}</span>
            </div>
        {/if}
		<DeletionRequestForm {form} />
	{/if}

</div> 