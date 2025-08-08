## Project Goal
Add a Hebrew changelog page that renders a Markdown file and is linked from the footer, keeping docs up to date.

## Plan: Hebrew Changelog Page
1. Create Hebrew changelog markdown (`static/changelog.he.md`).
2. Add route `src/routes/changelog/+page.svelte` to render markdown.
3. Add dependency for markdown parsing (`marked`).
4. Link to changelog from footer.
5. Create docs for maintaining the changelog.

## Status
Steps 1–4 completed. Docs added under `docs/changelog_maintenance.md`.

## Log
- Added `marked` dep and created `/changelog` route that loads `static/changelog.he.md` and renders it RTL.
- Linked "יומן שינויים" in `PageFooter.svelte`.