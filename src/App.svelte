<script lang="ts">
  /// <reference types="./global" />
  import { isLoading } from "svelte-i18n";
  import { onMount } from "svelte";
  import aos from "aos";
  import "./app.css";
  import "aos/dist/aos.css";
  import RBHeader from "./RBHeader.svelte";

  onMount(() => {
    aos.init();
  });
</script>

{#if $isLoading}
  <p>Loading translations...</p>
{:else}
  
<div class="uk-text-center uk-grid-collapse uk-grid-match" data-uk-grid>
    <div class="uk-width-auto@m">
        <div class="uk-width-1-12 uk-background-muted">Auto</div>
    </div>
    <div class="uk-width-expand@m">
        <div class="uk-background-muted"><RBHeader/></div>
    </div>
    <div class="uk-width-auto@m">
        <div class="uk-width-1-12 uk-background-muted">Auto</div>
    </div>
</div>{/if}

<style>
</style>
