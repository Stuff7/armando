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

<section class="FrameworkGraphs">
  {#each FRAMEWORKS as [label, progress]}
    <ProgressBar {label} {progress} />
  {/each}
</section>

<style lang="scss">
  .FrameworkGraphs {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
  }
</style>
