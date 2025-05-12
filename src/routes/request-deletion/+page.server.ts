import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

// Disable prerendering for this page because it uses form actions
export const prerender = false;

// Basic email validation regex (adjust as needed for stricter validation)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
    default: async ({ request }: { request: Request }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;
        const reason = formData.get('reason') as string || 'No reason provided'; // Default if empty

        // --- Validation ---
        if (!email) {
            return fail(400, { 
                data: { email, reason },
                errors: { email: 'יש למלא כתובת אימייל.' }
            });
        }

        if (!emailRegex.test(email)) {
            return fail(400, { 
                data: { email, reason },
                errors: { email: 'אנא הזן כתובת אימייל תקינה.' }
            });
        }

        // --- Logging (Placeholder for actual email sending) ---
        console.log('\n--- Account Deletion Request ---');
        console.log(`Email: ${email}`);
        console.log(`Reason: ${reason}`);
        console.log('---------------------------------\n');

        // --- Success Response ---
        // Indicate success. The page will show the confirmation message.
        return { success: true }; 
    },
} satisfies Actions; 