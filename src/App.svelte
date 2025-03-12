<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { switchLanguage } from './i18n';
  import { _, locale } from 'svelte-i18n';
  import { isLoading } from 'svelte-i18n';
  let userName = "World";
  let currentLang = $locale;
</script>

<main>
 {#if $isLoading}
  <p>Loading translations...</p>
{:else}
  <main>
    <h1>{$_('greeting', { name: 'World' })}</h1>
    <button on:click={() => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      switchLanguage(currentLang);
    }}>
      {$_('button.toggle')}
    </button>
  </main>
{/if}
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
