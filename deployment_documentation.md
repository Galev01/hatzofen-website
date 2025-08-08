# Deploying the Hatzofen Website to GitHub Pages with an IONOS Custom Domain

This document outlines the steps taken to configure and deploy the Hatzofen SvelteKit website to GitHub Pages, using a custom domain (`hatzofen.com`) managed by IONOS. It also details the process for updating the live site with new changes.

## Initial Setup and Configuration

### 1. SvelteKit Static Adapter Configuration

To deploy to GitHub Pages, which serves static files, the SvelteKit project was configured to use `@sveltejs/adapter-static`.

*   **File:** `hatzofen-website/svelte.config.js`
*   **Action:** The `adapter` was set up to output the built site to a `docs` directory in the project root. This is a common convention for GitHub Pages.

    ```javascript
    import adapter from '@sveltejs/adapter-static';

    /** @type {import('@sveltejs/kit').Config} */
    const config = {
    	kit: {
    		adapter: adapter({
    			pages: 'docs',
    			assets: 'docs',
    			fallback: null, // Or 'index.html'/'200.html' for SPA behavior
    			precompress: false,
    			strict: true
    		})
    	}
    };

    export default config;
    ```

### 2. Asset Management

During the initial build, errors occurred due to missing static assets (videos, images). 

*   **Action:** All static assets (images, videos, Lottie files, SVGs) were moved into the `hatzofen-website/static/` directory. Paths in Svelte components (`.svelte` files) were updated to reference these assets correctly (e.g., `/videos/tzofen_video.mp4`, `/icons/App_Store.svg`).
*   **Note:** Files in the `static` directory are copied to the root of the output directory (`docs`) during the build process.

### 3. Replacing Lottie Animations with SVGs

To simplify asset handling and resolve potential issues, Lottie animations for App Store and Google Play badges were replaced with static SVG icons.

*   **Affected Components:**
    *   `hatzofen-website/src/lib/components/landing/Hero.svelte`
    *   `hatzofen-website/src/lib/components/landing/PageFooter.svelte`
*   **Action:** 
    1.  SVG files (`App Store.svg`, `Google Play.svg`) were placed in `hatzofen-website/static/icons/`.
    2.  The Lottie player code in the components was replaced with `<img>` tags pointing to these SVGs (e.g., `<img src="/icons/App Store.svg" ...>`).
    3.  The `import { browser } from '$app/environment';` and the dynamic import of `@lottiefiles/svelte-lottie-player` were removed from `Hero.svelte` as they were no longer needed for these specific icons.

## Build Process

### 1. Building the Static Site

After configuration changes, the site was built using the SvelteKit build command.

*   **Command:** `npm run build` (executed in the `hatzofen-website` directory).
*   **Output:** This command compiles the SvelteKit application and outputs the static files into the `hatzofen-website/docs/` directory, as configured by the static adapter. The `/changelog` page is generated as a route that fetches `changelog.he.md` from the built output root.

## GitHub Repository and GitHub Pages Setup

### 1. Committing and Pushing to GitHub

All project files, including the newly generated `docs` folder, were committed to the local Git repository and pushed to the remote GitHub repository.

### 2. Configuring GitHub Pages

The GitHub repository was configured to serve the website using GitHub Pages.

*   **Steps on GitHub:**
    1.  Navigated to the repository settings.
    2.  Went to the "Pages" section.
    3.  Under "Build and deployment":
        *   Selected "Deploy from a branch".
        *   Chose the `main` (or `master`) branch.
        *   Selected the `/docs` folder as the source.
    4.  Saved the changes.

### 3. Configuring Custom Domain in GitHub Pages

Your custom domain `hatzofen.com` was added in the GitHub Pages settings.

*   **Steps on GitHub:**
    1.  In the "Pages" settings, under "Custom domain", `hatzofen.com` was entered and saved.
    2.  GitHub initially showed a "DNS check unsuccessful" message, which is normal until DNS records are correctly configured and propagated.

## IONOS DNS Configuration

To point `hatzofen.com` and `www.hatzofen.com` to the GitHub Pages site, and to ensure email functionality remained, DNS records were configured in the IONOS account.

### 1. Essential DNS Records Added:

| Type  | Host name          | Value                                   | Notes                                      |
|-------|--------------------|-----------------------------------------|--------------------------------------------|
| A     | `@`                | `185.199.108.153`                       | Points apex domain to GitHub Pages         |
| A     | `@`                | `185.199.109.153`                       | Points apex domain to GitHub Pages         |
| A     | `@`                | `185.199.110.153`                       | Points apex domain to GitHub Pages         |
| A     | `@`                | `185.199.111.153`                       | Points apex domain to GitHub Pages         |
| CNAME | `www`              | `galev01.github.io.`                    | Points `www` subdomain to GitHub Pages     |
| MX    | `@`                | `mx00.ionos.com` (Priority 10)          | IONOS Email service                        |
| MX    | `@`                | `mx01.ionos.com` (Priority 10)          | IONOS Email service                        |
| TXT   | `@`                | `"v=spf1 include:_spf-us.ionos.com ~all"` | IONOS Email SPF record                     |
| CNAME | `s1-ionos._domainkey`| `s1.dkim.ionos.com`                     | IONOS Email DKIM                           |
| CNAME | `s42582890._domainkey`| `s42582890.dkim.ionos.com`            | IONOS Email DKIM (specific key may vary)   |
| CNAME | `autodiscover`     | `adsredir.ionos.info`                   | IONOS Email autodiscover                   |

*   **Note:** Old conflicting A records for `www` and the root domain (pointing to IONOS default site) were removed before adding these.

### 2. DNS Propagation and Verification

After configuring DNS records in IONOS:
*   **Waiting Period:** DNS changes can take time to propagate globally (minutes to 48 hours).
*   **Verification:** DNS propagation was checked using `nslookup` commands (e.g., `nslookup hatzofen.com 8.8.8.8`, `nslookup -type=CNAME www.hatzofen.com 8.8.8.8`).
*   **GitHub Check:** The GitHub Pages settings were monitored until the "DNS check unsuccessful" message disappeared, indicating GitHub successfully verified the DNS setup.

## Implementing and Deploying Changes to the Live Site

When you want to make changes to your website (e.g., update text, add new features, change images):

1.  **Make Code Changes:**
    *   Modify your SvelteKit project files (components, routes, static assets, etc.) in your local development environment as needed.
    *   Test your changes locally using `npm run dev` to ensure they work as expected.

2.  **Rebuild the Static Site:**
    *   Once you are satisfied with the changes, stop the development server (if running) and rebuild the static site.
    *   Run the build command in your project's root directory (`hatzofen-website`):
        ```bash
        npm run build
        ```
    *   This will update the contents of the `docs` folder with your latest changes.

3.  **Commit and Push Changes to GitHub:**
    *   Stage all modified files, including the updated `docs` folder, using Git:
        ```bash
        git add .
        ```
    *   Commit your changes with a descriptive message:
        ```bash
        git commit -m "Your descriptive commit message (e.g., Updated hero section, Fixed typo on about page)"
        ```
    *   Push your committed changes to your GitHub repository (e.g., to the `main` branch):
        ```bash
        git push origin main
        ```

4.  **GitHub Pages Automatic Deployment:**
    *   Because GitHub Pages is configured to deploy from the `docs` folder in your `main` branch, it will automatically detect the new commit.
    *   GitHub Actions (or the built-in Pages deployment process) will rebuild and redeploy your site using the updated contents of the `docs` folder.
    *   This process usually takes a few minutes. You can often monitor the deployment status in the "Actions" tab of your GitHub repository if it's using GitHub Actions, or the Pages settings might show an update status.

5.  **Verify Live Changes:**
    *   After a few minutes, open your website (`hatzofen.com` or `www.hatzofen.com`) in your browser.
    *   You might need to do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) or clear your browser cache to see the latest changes, as browsers often cache website content.

**Summary of Update Process:**
`Code Changes -> npm run build -> git add . -> git commit -> git push -> GitHub Pages auto-deploys`

---

This documentation should serve as a reference for the deployment process and future updates to the Hatzofen website. 