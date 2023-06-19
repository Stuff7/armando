<script lang="ts" context="module">
  import ProgressBar from "components/ProgressBar.svelte";

  const PROGRAMMING = [
    ["Typescript / Javascript", 100],
    ["CSS / SASS", 100],
    ["Rust", 80],
    ["Python / Mojo", 80],
  ] as const;
</script>

<section class="ProgrammingGraphs">
  {#each PROGRAMMING as [label, progress]}
    <ProgressBar {label} {progress} />
  {/each}
</section>

<style lang="scss">
  .ProgrammingGraphs {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
  }
</style>
