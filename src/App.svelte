<script lang="ts">
  /// <reference types="./global" />
  import { isLoading } from "svelte-i18n";
  import { onMount } from "svelte";
  import aos from "aos";
  import 'animate.css';
  import "./app.css";
  import "aos/dist/aos.css";
  import RBHeader from "./RBHeader.svelte";
  import Money from './Money.svelte'
  onMount(() => {
    aos.init();
  });
</script>

{#if $isLoading}
  <div class="animate__bounceOut">
    <enhanced:img src="./assets/2e732a2e84e46c19.gif" alt="An alt text" />
  </div>
{:else}
  <div class="uk-text-center uk-grid-collapse uk-grid-match" data-uk-grid>
    <div class="uk-width-auto@m">
      <div class="uk-width-1-12">&nbsp;</div>
    </div>
    <div class="uk-width-expand@m">
      <div>
        <RBHeader />
        <Money/>

        <Money/>
        
      </div>
    </div>
    <div class="uk-width-auto@m">
      <div class="uk-width-1-12">&nbsp;</div>
    </div>
  </div>
{/if}

<style>
  :global(body) {
    background-image: url(./assets/pexels-photo-323705.jpeg);
  }
</style>
