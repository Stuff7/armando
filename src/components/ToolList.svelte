<script lang="ts" context="module">
  import IconLabel from "components/IconLabel.svelte";

  const TOOLS = [
    "Vite, Webpack, Gulp",
    "Tailwind, Styled components, Emotion, MUI",
    "Deno, Node",
    "Firebase",
    "Jest",
    "Storybook",
    "REST, GraphQL",
    "SEO, SSR, serverless",
    "Figma",
  ];
</script>

<section class="ToolList">
  {#each TOOLS as label}
    <IconLabel icon="checkmark" {label} />
  {/each}
</section>

<style lang="scss">
  .ToolList {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
  }
</style>
