<script lang="ts">

  import { switchLanguage } from './i18n';
  import { _, locale } from 'svelte-i18n';
  import { isLoading } from 'svelte-i18n';
  
  let userName = "World";
  let currentLang: 'en' | 'zh' = ($locale as 'en' | 'zh') || 'zh';  

</script>

{#if $isLoading}
  <p>Loading translations...</p>
{:else}
  <main>
    <h1>{$_('greeting', { values: { name: userName } })}</h1>
    <input bind:value={userName} placeholder="Enter your name">
    <button on:click={() => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      switchLanguage(currentLang);
    }}>
      {$_('button.toggle')}
    </button>
  </main>
{/if}

<style>

</style>
