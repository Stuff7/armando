<script context="module">
  import FrameworkGraphs from "components/FrameworkGraphs.svelte";
  import ToolList from "components/ToolList.svelte";
  import MobileSlide from "components/mobile/Slide.svelte";
</script>

<MobileSlide class="MobileTools">
  <svelte:fragment slot="header">
    <p>I've used these <strong>frameworks</strong></p>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <FrameworkGraphs />
    <ToolList />
  </svelte:fragment>
</MobileSlide>

<style lang="scss">
  :global(.MobileTools) {
    & :global(.FrameworkGraphs) {
      grid-area: right;
    }

    & :global(.ToolList) {
      grid-area: left;
      --icon-label-flow: row-reverse;
    }
  }
</style>
