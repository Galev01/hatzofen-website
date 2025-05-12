<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from '../../../routes/request-deletion/$types'; // Adjusted path
    import { invalidateAll } from '$app/navigation';

    export let form: ActionData;

    let email = form?.data?.email ?? '';
    let reason = form?.data?.reason ?? '';
    let loading = false;

    function handleSubmit() {
        loading = true;
        // enhance action handles submission, this is for UI state
        // Invalidate data after submission attempt
        return async ({ update }: { update: () => Promise<void> }) => {
            await update();
            loading = false;
            // Optional: Invalidate all data to refetch page data if needed
            // await invalidateAll(); 
        };
    }
</script>

<div class="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-xl text-gray-200">
    <img src="logos/Tzofen_logo2.png" alt="לוגו האפליקציה" class="w-40 h-64 mx-auto mb-6">
    
    <form method="POST" use:enhance={handleSubmit} class="space-y-6">
        <div>
            <label for="email" class="block text-sm font-medium text-gray-400 mb-1 text-right">כתובת אימייל</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                bind:value={email}
                required 
                dir="ltr"
                placeholder="you@example.com"
                class="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm text-left {form?.errors?.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-600'}"
                aria-invalid={form?.errors?.email ? 'true' : undefined}
                aria-describedby={form?.errors?.email ? 'email-error' : undefined}
            />
            {#if form?.errors?.email}
                <p id="email-error" class="mt-1 text-xs text-red-400 text-right">{form.errors.email}</p>
            {/if}
        </div>

        <div>
            <label for="reason" class="block text-sm font-medium text-gray-400 mb-1 text-right">סיבה למחיקה (אופציונלי)</label>
            <textarea 
                id="reason" 
                name="reason" 
                bind:value={reason}
                rows=4
                dir="rtl"
                placeholder="נשמח אם תשתפו למה ברצונכם למחוק את החשבון..."
                class="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            ></textarea>
        </div>

        <div>
            <button 
                type="submit" 
                disabled={loading} 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {#if loading}
                    <span>מעבד...</span>
                {:else}
                    <span>בקשת מחיקת חשבון</span>
                {/if}
            </button>
        </div>
    </form>
</div> 