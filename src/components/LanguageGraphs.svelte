<script lang="ts" context="module">
  import ProgressRing from "components/ProgressRing.svelte";

  const LANGUAGES = [["Spanish", 100], ["English", 100]] as const;
</script>

<script lang="ts">
  export let style: Option<string> = null;
</script>

<section class="LanguageGraphs" {style}>
  {#each LANGUAGES as [label, progress]}
    <ProgressRing {label} {progress} />
  {/each}
</section>

<style lang="scss">
  .LanguageGraphs {
    display: flex;
    flex-direction: var(--language-graphs-direction, row);
    gap: var(--spacing-lg-100);
    justify-content: center;

    & :global(.ProgressRing) {
      flex: 0;
    }
  }
</style>
