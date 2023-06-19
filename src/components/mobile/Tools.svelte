<script context="module">
  import FrameworkGraphs from "components/FrameworkGraphs.svelte";
  import SwipeIndicator from "components/SwipeIndicator.svelte";
  import ToolList from "components/ToolList.svelte";
  import MobileSlide from "components/mobile/Slide.svelte";
</script>

<MobileSlide>
  <svelte:fragment slot="header">
    <p>I've used these <strong>tools and </strong></p>
    <strong>frameworks</strong>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <FrameworkGraphs />
    <ToolList />
    <SwipeIndicator />
  </svelte:fragment>
</MobileSlide>
