<script lang="ts" context="module">
  import ProgressBar from "components/ProgressBar.svelte";

  const PROGRAMMING = [
    ["Typescript / Javascript", 100],
    ["CSS / SASS", 100],
    ["Rust", 80],
    ["Python / Mojo", 80],
  ] as const;
</script>

<script lang="ts">
  export let style: Option<string> = null;
</script>

<section class="ProgrammingGraphs" {style}>
  {#each PROGRAMMING as [label, progress]}
    <ProgressBar {label} {progress} />
  {/each}
</section>

<style lang="scss">
  .ProgrammingGraphs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-nm-100);
  }
</style>
