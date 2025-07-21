## Project Goal
Develop a fully responsive, Hebrew-first (RTL) landing page for the "הצופן" (The Cipher) mobile puzzle game, aiming to drive app downloads and effectively communicate the app's value, built using SvelteKit and Tailwind CSS.

## Tech Stack
- SvelteKit
- Tailwind CSS (with `tailwindcss-rtl` plugin)
- HTML5
- CSS3 (principles applied via Tailwind)
- JavaScript (as part of Svelte)

## Critical Patterns & Conventions
-   **RTL First**: All styling and layout must be implemented with Right-to-Left (Hebrew) as the primary direction, utilizing Tailwind's RTL utilities.
-   **Color Palette (Tailwind Theme)**:
    -   Background: `#1A1F2C`
    -   Primary: `#9b87f5`
    -   Accent: `#FDE1D3`
    -   Text Light: `#F0F0F0`
-   **Responsive Design**: The page must be fully responsive using Tailwind's responsive prefixes.
-   **Clarity and Readability**: Use clear Hebrew fonts (to be configured in Tailwind).
-   **Component-Based**: Structure the landing page into reusable Svelte components.
-   **Completeness**: Placeholders for final content/images are acceptable initially; no TODO comments in code for core structure.

## Plan: Privacy Policy Update

1.  **Update Privacy Policy Content (`src/routes/privacy-policy/+page.svelte`)**: COMPLETED
    *   Updated privacy policy with comprehensive new content including advertising policy
    *   Added detailed information about IronSource (Unity LevelPlay) advertising platform
    *   Enhanced user rights section with GDPR-compliant rights and procedures
    *   Added new sections: advertising controls, data retention periods, international transfers
    *   Improved formatting with bold headers and clear structure
    *   Updated account deletion process timeline to 48 hours
    *   Added specific information about third-party advertising partners

2.  **Create Documentation (`docs/privacy-policy-update.md`)**: COMPLETED
    *   Document the changes made to the privacy policy
    *   Include key differences from the previous version
    *   Note advertising integration requirements and compliance

## Plan: Terms of Use Update

1.  **Update Terms of Use Content (`src/routes/terms-of-use/+page.svelte`)**: COMPLETED
    *   Updated terms of use with comprehensive new content including advertising services
    *   Added detailed anti-cheat and reverse engineering prohibitions
    *   Enhanced user account security and enforcement measures
    *   Added new sections: advertising services, fair use enforcement, dispute resolution
    *   Improved formatting with bold text and clear structure
    *   Added user-generated content licensing provisions
    *   Enhanced liability limitations and service availability clauses

2.  **Create Documentation (`docs/terms-of-use-update.md`)**: COMPLETED
    *   Document the changes made to the terms of use
    *   Include key differences from the previous version
    *   Note enforcement mechanisms and legal compliance

## Plan: AdMob Verification

1.  **Create app-ads.txt File (`static/app-ads.txt`)**: COMPLETED
    *   Created app-ads.txt file with Google AdMob publisher ID: pub-5737865788941448
    *   File placed in static folder to be accessible at root domain (hatzofen.com/app-ads.txt)
    *   Follows IAB Tech Lab specification format
    *   Enables verification for both iOS and Android apps in AdMob
    *   Required for advertising monetization compliance

2.  **Create Documentation (`docs/admob-verification.md`)**: COMPLETED
    *   Document the AdMob verification process
    *   Include app-ads.txt implementation details
    *   Note verification requirements and compliance

## Status
All legal and advertising verification tasks completed successfully. Privacy policy and terms of use have been updated with comprehensive advertising integration policies, enhanced user protections, and improved enforcement mechanisms. AdMob verification is now set up with the required app-ads.txt file, enabling Google AdMob to verify both iOS and Android apps for advertising integration. Complete documentation has been created for all changes and compliance requirements.

## Completed Workflows

### SvelteKit Landing Page Development (COMPLETED)
All primary landing page components including Hero, Features, Visual Gallery, Contact Us, FAQ, and legal pages were successfully implemented with RTL Hebrew support and responsive design.

### App Store Integration (COMPLETED)  
Both Apple App Store and Google Play Store integrations completed successfully with official app store links and proper external link attributes.

### Visual Enhancements & Animations (COMPLETED)
Lottie animations, video integration, and enhanced hero section layout with 50/50 split design implemented successfully.

### Legal Pages (COMPLETED)
Privacy Policy, Terms of Use, and Contact Us pages created with proper Svelte components and Hebrew RTL support.

## Log
-   **Privacy Policy Update Plan Step 1: Update Privacy Policy Content** completed. Comprehensive new privacy policy with advertising integration and enhanced user rights implemented.