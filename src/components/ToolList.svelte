<script lang="ts" context="module">
  import IconLabel from "components/IconLabel.svelte";

  const TOOLS = [
    "Vite, Webpack",
    "Tailwind",
    "Firebase",
    "Jest",
    "Storybook",
    "REST, SEO, SSR",
    "Figma",
  ];
</script>

<script lang="ts">
  export let style: Option<string> = null;
</script>

<section class="ToolList" {style}>
  {#each TOOLS as label}
    <IconLabel icon="checkmark" {label} />
  {/each}
</section>

<style lang="scss">
  .ToolList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-nm-100);
  }
</style>
