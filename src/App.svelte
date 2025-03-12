<script lang="ts">
  import "animate.css";
  import "metismenu";
  import jq from "jquery";
  import { switchLanguage } from "./i18n";
  import { _, locale } from "svelte-i18n";
  import { isLoading } from "svelte-i18n";
  import { onMount } from "svelte";

  let userName = "World";
  let currentLang: "en" | "zh" = ($locale as "en" | "zh") || "zh";

  onMount(() => {
    console.log('here')
    jq("#metismenu").metisMenu();
  });
</script>

{#if $isLoading}
  <p>Loading translations...</p>
{:else}
  <main>
    <ul id="metismenu">
      <li class="mm-active">
       <a class="has-arrow" href="#" aria-expanded="true">Menu 1</a>
       <ul>
       ...
       </ul>
      </li>
      <li>
       <a class="has-arrow" href="#" aria-expanded="false">Menu 2</a>
       <ul>
       ...
       </ul>
      </li>
      ...
      </ul>
    <h1>{$_("greeting", { values: { name: userName } })}</h1>
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
