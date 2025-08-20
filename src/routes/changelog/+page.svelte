<script lang="ts">
  import { onMount } from 'svelte';

  let html = '';
  let loading = true;

  async function loadMarkdown() {
    try {
      const res = await fetch('/changelog.he.md', { cache: 'no-cache' });
      const text = await res.text();
      
      // Dynamic import to reduce initial bundle size
      const { marked } = await import('marked');
      html = await marked.parse(text);
    } catch (error) {
      console.error('Failed to load markdown:', error);
      html = '<p class="text-red-500">שגיאה בטעינת יומן השינויים</p>';
    } finally {
      loading = false;
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
  {#if loading}
    <div class="flex items-center justify-center py-8">
      <div class="w-8 h-8 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
      <span class="mr-3">טוען יומן שינויים...</span>
    </div>
  {:else if html}
    <div class="prose prose-invert" dir="rtl">
      {@html html}
    </div>
  {:else}
    <p class="text-red-500">שגיאה בטעינת יומן השינויים</p>
  {/if}
</main>


