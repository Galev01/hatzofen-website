# Account Deletion Process

This document outlines the process for users to request the deletion of their account associated with the הצופן application.

## User Flow

1.  **Navigate to Deletion Page:** The user navigates to the "Request Account Deletion" page on the website (route: `/request-deletion`).
2.  **Fill Form:** The user provides their account email address and, optionally, a reason for the deletion request.
3.  **Submit Form:** The user submits the form.
4.  **Confirmation:** The user sees an on-page confirmation that their request has been received.

## Technical Implementation (Current)

*   **Frontend:**
    *   A dedicated page exists at `src/routes/request-deletion/+page.svelte`.
    *   A form component `src/lib/components/forms/DeletionRequestForm.svelte` handles user input.
    *   SvelteKit\'s `enhance` action is used for progressive enhancement, providing immediate feedback without a full page reload.
*   **Backend (Form Action):**
    *   A server-side form action is defined in `src/routes/request-deletion/+page.server.ts`.
    *   The action validates the submitted email address.
    *   **Current Limitation:** Instead of sending an email, the action currently **logs the deletion request details (email and reason) to the server console**. This is a placeholder until an email sending service (e.g., SendGrid, Resend) is integrated.

## Manual Deletion Process (Current)

1.  **Monitor Logs:** The site administrator needs to monitor the server logs for messages formatted like:
    ```
    --- Account Deletion Request ---
    Email: user@example.com
    Reason: [User\'s provided reason or \'No reason provided\']
    ---------------------------------
    ```
2.  **Verify Request:** The administrator should verify the request (e.g., by contacting the user via the provided email if necessary).
3.  **Perform Deletion:** The administrator manually deletes the user\'s account and associated data from the backend database or user management system.
4.  **Confirm Deletion:** Optionally, the administrator can email the user back to confirm that their account has been deleted.

## Future Enhancements

*   Integrate an email service to automatically send the deletion request to the designated admin email address.
*   Potentially add a user lookup step to verify the email exists before accepting the request.
*   Consider adding a confirmation email link to the user to prevent accidental or malicious deletion requests. 