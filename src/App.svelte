<script lang="ts">
  import disgruntledEctoplasm from './assets/disgruntledEctoplasm.svg'
  import Ghostfour from './lib/Ghostfour.svelte'
</script>
<main>
<Ghostfour />
</main>
<style>
  :root {
    --black: #2b2928;
  }
  main {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
  }
</style>
