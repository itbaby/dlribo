<script lang="ts">
  
  import { switchLanguage } from "./i18n";
  import { _, locale } from "svelte-i18n";
  import { isLoading } from "svelte-i18n";
  import { onMount } from "svelte";

  let userName = "World";
  let currentLang: "en" | "zh" = ($locale as "en" | "zh") || "zh";

  onMount(() => {
    console.log('here')
  });
</script>

{#if $isLoading}
  <p>Loading translations...</p>
{:else}
  <main>




<div uk-alert>
    <a href class="uk-alert-close" uk-close></a>
    <h3>Notice</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>    <h1>{$_("greeting", { values: { name: userName } })}</h1>
    <input bind:value={userName} placeholder="Enter your name" />
    <button
      on:click={() => {
        currentLang = currentLang === "en" ? "zh" : "en";
        switchLanguage(currentLang);
      }}
    >
      {$_("button.toggle")}
    </button>
  </main>
{/if}

<style>
</style>
