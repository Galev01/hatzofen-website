<script lang="ts">
  import { onMount } from 'svelte';
  import { marked } from 'marked';

  let html = '';

  async function loadMarkdown() {
    try {
      const res = await fetch('/changelog.he.md', { cache: 'no-cache' });
      if (!res.ok) {
        throw new Error(`Failed to load: ${res.status}`);
      }
      const text = await res.text();
      html = await marked.parse(text);
    } catch (error) {
      console.error('Error loading markdown:', error);
      html = '<p>שגיאה בטעינת יומן השינויים</p>';
    }
  }

  onMount(loadMarkdown);
</script>

<svelte:head>
  <title>יומן שינויים</title>
  <meta name="description" content="יומן שינויים של האפליקציה הצופן" />
</svelte:head>

<main class="container mx-auto px-4 py-12 prose prose-invert text-right" dir="rtl">
  <h1 class="text-3xl font-bold mb-6">יומן שינויים</h1>
  {#if html}
    <div class="prose prose-invert" dir="rtl">
      {@html html}
    </div>
  {:else}
    <p>טוען…</p>
  {/if}
</main>


