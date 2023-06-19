<script lang="ts" context="module">
  import Background from "components/Background.svelte";
  import Content from "components/Content.svelte";
  import MobileContent from "components/MobileContent.svelte";
  import PortalLayer from "components/PortalLayer.svelte";
  import Sidebar from "components/Sidebar.svelte";
</script>

<main>
  <Background />
  <Sidebar />
  <Content />
  <MobileContent />
</main>
<PortalLayer portalID="tooltip" cover preventClicks zIndex={10} />

<style lang="scss">
  @use "style/media";

  main {
    width: 100%;
    max-width: var(--area-xl-100);
    margin-inline: auto;
    position: relative;

    @include media.larger-than(desktop-sm) {
      display: grid;
      grid-template: "a b" 1fr / max-content 1fr;
      gap: var(--spacing-lg-200);
      padding: var(--spacing-lg-200);
    }

    @include media.smaller-than(desktop-sm) {
      background: var(--color-accent-1);
      z-index: -3;
    }
  }
</style>
