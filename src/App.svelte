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
    display: grid;
    grid-template:
      "a b" 1fr
      "a b" 1fr / max-content 1fr;
    gap: var(--spacing-lg-200);

    & > :global(.Sidebar) {
      grid-area: a;
    }

    & > :global(.Content) {
      grid-area: b;
    }
  }
</style>
