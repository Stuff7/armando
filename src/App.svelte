<script lang="ts" context="module">
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
    padding: var(--spacing-lg-200);
    display: grid;
    grid-template: "a b" 1fr / max-content 1fr;
    gap: var(--spacing-lg-200);
  }
</style>
