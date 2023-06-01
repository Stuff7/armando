<script lang="ts">
  import Background from "components/Background.svelte";
  import Content from "components/Content.svelte";
  import PortalLayer from "components/PortalLayer.svelte";
  import Sidebar from "components/Sidebar.svelte";
</script>

<main>
  <Background />
  <Sidebar />
  <Content />
</main>
<PortalLayer portalID="tooltip" cover preventClicks zIndex={10} />

<style>
  main {
    width: 100%;
    height: 100%;
    padding: var(--spacing-lg-200);
    overflow: hidden auto;
    display: flex;
    gap: var(--spacing-lg-200);
  }
</style>
