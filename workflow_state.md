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

## Plan (SvelteKit & Tailwind)

1.  **Tailwind Configuration Update**: COMPLETED
2.  **Global Layout & HTML Attributes (`src/app.html`, `src/routes/+layout.svelte`)**: COMPLETED
3.  **Component Scaffolding**: COMPLETED
4.  **Main Page Assembly (`src/routes/+page.svelte`)**: COMPLETED
5.  **Hero Section Component (`Hero.svelte`) Implementation**: COMPLETED
6.  **"How to Play?" Component (`HowToPlay.svelte`) Implementation**: COMPLETED
7.  **Features Showcase Component (`FeaturesShowcase.svelte`) Implementation**: COMPLETED
8.  **Visual Gallery Component (`VisualGallery.svelte`) Implementation**: COMPLETED
9.  **"Discover" Section Component (`DiscoverSection.svelte`) Implementation**: COMPLETED
10. **Footer Component (`PageFooter.svelte`) Implementation**: COMPLETED
11. **Responsiveness & RTL Polish**: (Pending)
12. **Documentation Update**: (Pending)

## Log
-   Previous static HTML/CSS landing page development completed.
-   Resolved `tailwindcss-rtl` installation and configuration issue in SvelteKit project.
-   **New Plan Adopted**: Rebuilding landing page with SvelteKit and Tailwind CSS.

-   **Plan (SvelteKit & Tailwind) Step 1: Tailwind Configuration Update** completed.
-   **Plan (SvelteKit & Tailwind) Step 2: Global Layout & HTML Attributes** completed.
-   **Plan (SvelteKit & Tailwind) Step 3: Component Scaffolding** completed.
-   **Plan (SvelteKit & Tailwind) Step 4: Main Page Assembly** completed.
-   **Plan (SvelteKit & Tailwind) Step 5: Hero Section Component Implementation** completed.
-   **Plan (SvelteKit & Tailwind) Step 6: "How to Play?" Component Implementation** completed.
-   **Plan (SvelteKit & Tailwind) Step 7: Features Showcase Component Implementation** completed.
-   **Plan (SvelteKit & Tailwind) Step 8: Visual Gallery Component Implementation** completed.
-   **Plan (SvelteKit & Tailwind) Step 9: "Discover" Section Component Implementation** completed.
-   **Plan (SvelteKit & Tailwind) Step 10: Footer Component Implementation** was completed.

## Status
Apple App Store integration completed successfully. All App Store buttons now link to the official app listing with proper external link attributes. Documentation has been created and workflow state updated.

## Plan
Waiting for user's next steps. Ready for Google Play Store integration when approved.

## New Plan: Legal Pages

1.  **Create Privacy Policy Page (`src/routes/privacy-policy/+page.svelte`)**: COMPLETED
    *   Created the Svelte component with placeholder content for a privacy policy.
    *   Included `<svelte:head>` for page title and meta description.
    *   Applied basic Tailwind CSS for styling and readability.
2.  **Create Terms of Use Page (`src/routes/terms-of-use/+page.svelte`)**: COMPLETED
    *   Created the Svelte component with placeholder content for terms of use.
    *   Included `<svelte:head>` for page title and meta description.
    *   Applied basic Tailwind CSS for styling and readability.
3.  **Update Footer Links (`src/lib/components/landing/PageFooter.svelte`)**: COMPLETED
    *   Changed `href="/privacy-policy.html"` to `href="/privacy-policy"`.
    *   Changed `href="/terms-of-use.html"` to `href="/terms-of-use"`.

## Next Steps
Waiting for user's next instructions.

## Plan: Visual Enhancements & Animations

1.  **Hero Section: Replace Image with Video (`src/lib/components/landing/Hero.svelte`)**: COMPLETED
    *   Replaced the placeholder `<img>` with an HTML5 `<video>` tag.
    *   Set video attributes: `autoplay`, `loop`, `muted`, `playsinline`.
    *   Used a placeholder video source: `/placeholder-app-video.mp4`.
    *   Applied existing Tailwind CSS classes for responsiveness and styling.
    *   Advise user on placing the video file in the `static` directory and considerations for video optimization.

2.  **Install Lottie Player Library**:
    *   Instruct user to run `npm install --save-dev @lottiefiles/svelte-lottie-player`.
3.  **Integrate Lottie Animations in `HowToPlay.svelte`**:
    *   Import `LottiePlayer` from `@lottiefiles/svelte-lottie-player`.
    *   Replace `<img>` tags for step icons with `<LottiePlayer>` components.
    *   Use placeholder Lottie JSON paths: `/lottie/choose-puzzle.json`, `/lottie/decode.json`, `/lottie/reveal-quote.json`.
    *   Set `autoplay`, `loop`, `width`, `height`, and `ariaLabel` props for the Lottie player.
    *   Remove `filter-brand-primary` class from these elements.
    *   Advise user to place Lottie files in `static/lottie/`.
4.  **Integrate Lottie Animations in `FeaturesShowcase.svelte`**:
    *   Import `LottiePlayer` from `@lottiefiles/svelte-lottie-player`.
    *   Modify the `features` array to use Lottie JSON paths for icons (e.g., `/lottie/gameplay.json`).
    *   Replace `<img>` tags in the features loop with `<LottiePlayer>` components.
    *   Set `autoplay`, `loop`, `width`, `height`, and `ariaLabel` props.
    *   Remove `filter-brand-primary` class.
    *   Advise user to place Lottie files in `static/lottie/`.

5.  **Fix Lottie Player SSR Issue (`HowToPlay.svelte`, `FeaturesShowcase.svelte`)**:
    *   Import `browser` from `$app/environment` in both components.
    *   Wrap `<LottiePlayer>` instances in `{#if browser} ... {/if}` blocks to ensure client-side rendering only.

6.  **Refactor Lottie Player to use Dynamic Imports (`HowToPlay.svelte`, `FeaturesShowcase.svelte`)**:
    *   Remove static imports of `LottiePlayer`.
    *   Within the `{#if browser}` block, use `{#await import('@lottiefiles/svelte-lottie-player') then LottieModule}` to load the component dynamically.
    *   Render `<LottieModule.LottiePlayer>`.
    *   This is a more robust solution for preventing SSR evaluation of client-side only modules.

7.  **Integrate Lottie Animations for Store Badges in `Hero.svelte`**:
    *   Import `browser` from `$app/environment`.
    *   Conditionally import `LottiePlayer` from `@lottiefiles/svelte-lottie-player` using dynamic import (`{#await import...}`) within an `{#if browser}` block.
    *   Replace the `<img>` tags for App Store and Google Play badges with `<LottiePlayer>` (or `LottieModule.LottiePlayer`) components.
    *   Use placeholder Lottie JSON paths: `/lottie/appstore-badge.json` and `/lottie/googleplay-badge.json`.
    *   Set `autoplay`, `loop` (true, or false if the animation is not meant to loop), `controls` (false), `width` (e.g., "160px"), `height` (e.g., "54px"), and `ariaLabel` props for the Lottie players. (Adjust width/height to match original image aspect ratios if possible, or a standard badge size).
    *   The original images were `h-12 md:h-14`. A common App Store badge aspect ratio is around 2.96:1. So if height is 56px (h-14), width would be around 166px.
    *   Advise the user to place Lottie files in `static/lottie/`.
    *   Ensure the new Lottie players maintain similar styling (e.g., `mx-auto sm:mx-0`) and layout to the original image badges.

8.  **Add App Logo to Hero Section (`src/lib/components/landing/Hero.svelte`)**:
    *   Add an `<img>` tag for the app logo at the beginning of the Hero section.
    *   Use a placeholder image source, e.g., `/images/app-logo.png`.
    *   Apply appropriate Tailwind CSS classes for sizing (e.g., `h-16 w-auto` or `max-w-xs`), margins (e.g., `mb-6` or `mx-auto`), and potentially responsive alignment.
    *   Ensure the logo is thematically consistent with the page design.
    *   Advise user on placing their logo image in the `static/images/` directory (or similar) and adjusting styles as needed.

9.  **Refactor Hero Section Layout (`src/lib/components/landing/Hero.svelte`)**:
    *   Modify the main hero content structure to a 50/50 split on desktop (md and up).
    *   **Left 50% (Visual for RTL): Video Area**
        *   Container div set to `md:w-1/2`.
        *   Video element wrapped to enforce a 9:16 aspect ratio (e.g., using padding-top trick on a relative parent).
        *   Video itself styled with `object-cover` to fill the 9:16 frame.
        *   Constrain the max-width of the video player to resemble a phone screen within the 50% column.
    *   **Right 50% (Visual for RTL): Logo, Title, Subtitle Area**
        *   Container div set to `md:w-1/2`.
        *   Group logo, title, and subtitle within an inner div.
        *   Logo (`<img>`) placed above the title (`<h1>`).
        *   Subtitle (`<p>`) below the title.
        *   Content to be text-center on mobile and text-right (RTL start) on desktop.
    *   **Bottom Full-Width Area: CTA Buttons**
        *   Move the existing `hero-cta-buttons` div into a new container below the 50/50 split.
        *   This container should span the full width.
        *   Ensure CTA buttons are centered within this new container.
    *   Adjust flex order and stacking for mobile vs. desktop views to maintain good flow (e.g., video first on mobile, then text, then buttons).

## Plan: Contact Us Page

1.  **Create Contact Us Page (`src/routes/contact-us/+page.svelte`)**: COMPLETED
    *   Created comprehensive contact page with multiple contact methods
    *   Email contact section with direct mailto link to `support@hatzofen.com`
    *   LinkedIn profile section (placeholder URL)
    *   Full-featured contact form with validation
    *   Form submission opens user's email client with pre-filled data
    *   FAQ section with common questions
    *   Responsive design with RTL support
    *   Proper SEO optimization with title and meta description

2.  **Update Footer Navigation (`src/lib/components/landing/PageFooter.svelte`)**: COMPLETED
    *   Added "צור קשר" (Contact Us) link to footer navigation
    *   Link positioned first in the navigation menu
    *   Consistent styling with other footer links

3.  **Create Documentation (`docs/contact-us-page.md`)**: COMPLETED
    *   Comprehensive documentation of contact page features
    *   Technical implementation details
    *   Customization notes and future enhancement suggestions
    *   Integration points and maintenance guidelines

## Log
-   **Plan (SvelteKit & Tailwind) Step 10: Footer Component Implementation** was completed.
-   **Legal Pages Plan Step 1: Create Privacy Policy Page** completed.
-   **Legal Pages Plan Step 2: Create Terms of Use Page** completed.
-   **Legal Pages Plan Step 3: Update Footer Links** completed.
-   **Visual Enhancements Plan Step 1: Hero Section Video** completed. Replaced image with autoplaying, looped, muted video element. Advised user on video placement and optimization.
-   **Visual Enhancements Plan Step 2: Install Lottie Player Library** completed.
-   **Visual Enhancements Plan Step 3: Integrate Lottie Animations in `HowToPlay.svelte`** completed.
-   **Visual Enhancements Plan Step 4: Integrate Lottie Animations in `FeaturesShowcase.svelte`** (partially completed, pending SSR fix).
-   **Visual Enhancements Plan Step 5: Fix Lottie Player SSR Issue** (Attempt 1: Conditional rendering) completed.
-   **Visual Enhancements Plan Step 6: Refactor Lottie Player to use Dynamic Imports** completed. This should more reliably prevent SSR issues.
-   **Visual Enhancements Plan Step 7: Integrate Lottie Animations for Store Badges in `Hero.svelte`** completed.
-   **Visual Enhancements Plan Step 8: Add App Logo to Hero Section** completed.
-   **Visual Enhancements Plan Step 9: Refactor Hero Section Layout** completed.
-   **Contact Us Plan Step 1: Create Contact Us Page** completed. Implemented comprehensive contact page with email, LinkedIn, and contact form that opens user's email client.
-   **Contact Us Plan Step 2: Update Footer Navigation** completed. Added contact link to footer.
-   **Contact Us Plan Step 3: Create Documentation** completed. Added comprehensive documentation for the contact page.
-   **FAQ Plan Step 1: Create FAQ Component** completed. Implemented animated dropdown FAQ with 7 comprehensive questions and answers.
-   **FAQ Plan Step 2: Integrate FAQ into Main Page** completed. Added FAQ section to main page after DiscoverSection.
-   **Apple App Store Integration Plan Step 1: Update Hero Section App Store Button** completed. Updated link to official App Store URL with proper external link attributes.
-   **Apple App Store Integration Plan Step 2: Update Footer Section App Store Button** completed. Updated link to official App Store URL with proper external link attributes.
-   **Apple App Store Integration Plan Step 3: Create Documentation** completed. Added comprehensive documentation for App Store integration.
-   **Apple App Store Integration Plan Step 4: Add Google Play Coming Soon Message** completed. Converted Google Play buttons to interactive buttons with user-friendly coming soon message.

## Plan: FAQ Section

1.  **Create FAQ Component (`src/lib/components/landing/FAQ.svelte`)**: COMPLETED
    *   Created animated dropdown FAQ component with 7 comprehensive questions and answers
    *   Implemented smooth expand/collapse animations with CSS transitions
    *   Only one FAQ item can be open at a time (accordion behavior)
    *   RTL-first design with proper Hebrew text alignment
    *   Responsive design with hover effects and focus states
    *   Questions cover gameplay, difficulty levels, content types, age appropriateness, hints system, pricing, and support

2.  **Integrate FAQ into Main Page (`src/routes/+page.svelte`)**: COMPLETED

## Plan: Apple App Store Integration

1.  **Update Hero Section App Store Button (`src/lib/components/landing/Hero.svelte`)**: COMPLETED
    *   Updated Apple App Store button link from `href="/"` to official App Store URL
    *   Added `target="_blank"` and `rel="noopener noreferrer"` attributes for security and proper new tab behavior
    *   App Store URL: https://apps.apple.com/il/app/%D7%94%D7%A6%D7%95%D7%A4%D7%9F-%D7%A4%D7%90%D7%96%D7%9C-%D7%A2%D7%91%D7%A8%D7%99/id6746350040?l=he

2.  **Update Footer Section App Store Button (`src/lib/components/landing/PageFooter.svelte`)**: COMPLETED
    *   Updated Apple App Store button link from `href="/"` to official App Store URL
    *   Added `target="_blank"` and `rel="noopener noreferrer"` attributes for security and proper new tab behavior
    *   App Store URL: https://apps.apple.com/il/app/%D7%94%D7%A6%D7%95%D7%A4%D7%9F-%D7%A4%D7%90%D7%96%D7%9C-%D7%A2%D7%91%D7%A8%D7%99/id6746350040?l=he

3.  **Create Documentation (`docs/app-store-integration.md`)**: COMPLETED
    *   Comprehensive documentation of Apple App Store integration
    *   App details: הצופן - פאזל עברי, ID: 6746350040, Developer: Gal Lev
    *   Technical implementation details
    *   Future maintenance notes for Google Play Store integration
    *   Deployment instructions

4.  **Add Google Play Coming Soon Message**: COMPLETED
    *   Converted Google Play buttons from links to interactive buttons
    *   Added JavaScript function to display coming soon message: "בקרוב ב-Google Play! תאריך משוער: 1/07/2025"
    *   Updated both Hero and Footer components
    *   Enhanced user experience by providing clear expectations
    *   Added FAQ component import
    *   Positioned FAQ section after DiscoverSection in the page flow
    *   Maintains consistent page structure and styling

## Log
-   **FAQ Section Plan Step 1: Create FAQ Component** completed. Implemented animated dropdown FAQ with 7 questions covering all aspects of the game.
-   **FAQ Section Plan Step 2: Integrate FAQ into Main Page** completed. Added FAQ section after the Discover section.