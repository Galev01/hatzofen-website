# SvelteKit Deployment Guide for IONOS

This guide outlines options for deploying your SvelteKit application to IONOS, focusing on free or cheap methods.

## Understanding Your SvelteKit App's Needs

The best deployment method depends on whether your SvelteKit application:
1.  Can be fully pre-rendered as a **static site** (or function as a Single Page Application - SPA).
2.  Requires a **live Node.js server** for Server-Side Rendering (SSR) per request or dynamic API endpoints.

Your `svelte.config.js` currently uses `adapter-auto`. For IONOS, it's generally better to choose a specific adapter:
-   `@sveltejs/adapter-static`: For static sites.
-   `@sveltejs/adapter-node`: For Node.js server applications.

## Option 1: Static Site with IONOS "Deploy Now" (Potentially Free, Easiest)

-   **Suitable for:** SvelteKit apps that can be fully pre-rendered or operate as an SPA without a live Node.js backend for critical, per-request server-side logic.
-   **How it works:**
    1.  Configure your SvelteKit project with `@sveltejs/adapter-static`.
        -   Install: `npm install -D @sveltejs/adapter-static`
        -   Update `svelte.config.js`:
            ```javascript
            // import adapter from '@sveltejs/adapter-auto'; // Remove or comment out
            import adapter from '@sveltejs/adapter-static'; // Add this

            /** @type {import('@sveltejs/kit').Config} */
            const config = {
                kit: {
                    adapter: adapter({
                        // default options are often sufficient
                        pages: 'build',
                        assets: 'build',
                        fallback: null, // or 'index.html' or '200.html' for SPAs
                        precompress: false,
                        strict: true
                    })
                }
            };
            export default config;
            ```
    2.  Build your project: `npm run build`. This will typically output files to a `build` directory.
    3.  Push your project to a GitHub repository.
    4.  Use **IONOS Deploy Now**:
        -   Connect your GitHub repository.
        -   Deploy Now will detect your framework (as a static site) and set up a GitHub Actions workflow for CI/CD.
        -   It supports static site generators and SPAs.
-   **Pros:**
    -   **Free Tier:** IONOS Deploy Now offers a free tier (e.g., 3 starter projects, 50MB storage per deployment).
    -   **Automated CI/CD:** Builds and deploys automatically on `git push`.
    -   **Performance & Security:** Static sites are generally fast and secure.
-   **Cons:**
    -   **No Node.js Server-Side Rendering:** Deploy Now does *not* support live Node.js server-side rendering. Any server-side logic in SvelteKit (e.g., `+server.js` files for dynamic APIs, form actions that require a server) that cannot be pre-rendered or handled client-side will not work with this method directly.

## Option 2: Node.js Application on IONOS Shared Web Hosting (Cheap, More Manual)

-   **Suitable for:** SvelteKit apps that *require* a live Node.js server for dynamic SSR or API routes.
-   **How it works:**
    1.  Configure your SvelteKit project with `@sveltejs/adapter-node`.
        -   Install: `npm install -D @sveltejs/adapter-node`
        -   Update `svelte.config.js`:
            ```javascript
            // import adapter from '@sveltejs/adapter-auto'; // Remove or comment out
            import adapter from '@sveltejs/adapter-node'; // Add this

            /** @type {import('@sveltejs/kit').Config} */
            const config = {
                kit: {
                    adapter: adapter({
                        // default options are often sufficient
                        out: 'build', // The directory for the output
                        precompress: false, // or true if you want to precompress assets
                    })
                }
            };
            export default config;
            ```
    2.  Build your project: `npm run build`. This creates a Node.js application in the `build` directory (or as specified in `out`).
    3.  Choose an IONOS shared Linux hosting plan that provides SSH access.
    4.  Deployment Steps:
        -   Upload the contents of your SvelteKit project's `build` directory and the `node_modules` (or just `package.json` and `package-lock.json` and run `npm install` on the server) to your hosting space (e.g., via SFTP or Git over SSH).
        -   Via SSH, navigate to your app directory.
        -   Install production dependencies: `npm install --production`.
        -   Start your Node.js application (usually `node index.js` inside the `build` directory).
        -   **Crucial:** Use a process manager like PM2 (`npm install pm2 -g`, then `pm2 start build/index.js --name your-app-name`) to keep your app running and manage restarts.
        -   You may need to configure your web server (Apache/Nginx if used by IONOS as a frontend) to proxy requests to your Node.js application's port, or ensure your app listens on the port assigned by IONOS. Check IONOS documentation for Node.js deployment specifics on shared hosting.
-   **Pros:**
    -   Supports full SvelteKit Node.js features.
    -   Shared hosting plans are often cheap initially.
-   **Cons:**
    -   **Manual Setup:** Requires more technical steps for deployment and process management.
    -   **Resource Limits:** Shared hosting has CPU/RAM limits that might affect Node.js app performance.
    -   **Node.js Environment:** Ensure the IONOS plan supports a suitable Node.js version or allows you to manage it (e.g., via NVM).

## Option 3: Node.js Application on IONOS VPS (Most Flexible, More Expensive)

-   **Suitable for:** SvelteKit apps needing Node.js, if shared hosting is too restrictive or if you need more control/resources.
-   **How it works:** Similar to Option 2 but on a Virtual Private Server.
    1.  Configure with `@sveltejs/adapter-node`.
    2.  Provision an IONOS VPS.
    3.  Set up your environment (install Node.js, Nginx/Apache as a reverse proxy if desired, PM2).
    4.  Deploy your built application files and run with PM2.
-   **Pros:**
    -   Full control over the server environment.
    -   Dedicated resources (better performance potential).
-   **Cons:**
    -   More expensive than shared hosting.
    -   Requires server administration skills (setup, security, updates).

## Recommendation Flowchart

1.  **Does your app work purely client-side after initial load, or can all content be pre-rendered at build time?**
    *   **YES:** Strongly consider **Option 1 (Static Site with Deploy Now)**.
        *   Change SvelteKit adapter to `@sveltejs/adapter-static`.
        *   This is the easiest and potentially free route.
    *   **NO (App requires dynamic server-side rendering per request or live Node.js API endpoints):**
        *   Consider **Option 2 (Node.js on Shared Hosting)** for a cheaper Node.js deployment.
            *   Change SvelteKit adapter to `@sveltejs/adapter-node`.
            *   Be prepared for manual setup and check hosting plan specifics for Node.js support and resources.
        *   If Option 2 is too restrictive or slow, consider **Option 3 (Node.js on VPS)**.
            *   Adapter: `@sveltejs/adapter-node`.
            *   Higher cost and server management responsibility.

Always refer to the latest IONOS documentation for specific plan features and deployment procedures. 

## Domain Registration vs. Hosting Note

Having your domain registered with IONOS (e.g., `Hatzofen.com`) does **not** obligate you to host your website with IONOS. Domain registration and web hosting are separate services.

- You can host your website with any provider.
- If you host elsewhere, you will need to update the DNS settings (e.g., A records, CNAME records, or nameservers) for your domain within your IONOS account to point to your chosen hosting provider's servers. 