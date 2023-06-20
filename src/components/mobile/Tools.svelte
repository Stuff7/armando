<script context="module">
  import FrameworkGraphs from "components/FrameworkGraphs.svelte";
  import ToolList from "components/ToolList.svelte";
  import MobileSlide from "components/mobile/Slide.svelte";
</script>

<MobileSlide>
  <svelte:fragment slot="header">
    <p>I've used these <strong>tools and frameworks</strong></p>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <FrameworkGraphs />
    <ToolList />
  </svelte:fragment>
</MobileSlide>
