<script lang="ts" context="module">
  import ProgressBar from "components/ProgressBar.svelte";

  const FRAMEWORKS = [
    ["React / Svelte", 100],
    ["SvelteKit / Next.js", 100],
    ["Express / Koa", 80],
    ["Axum / Rocket", 80],
    ["MongoDB / SQL", 80],
  ] as const;
</script>

<script lang="ts">
  export let style: Option<string> = null;
</script>

<section class="FrameworkGraphs" {style}>
  {#each FRAMEWORKS as [label, progress]}
    <ProgressBar {label} {progress} />
  {/each}
</section>

<style lang="scss">
  .FrameworkGraphs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-nm-100);
  }
</style>
