<script lang="ts">
  export let data: RingChartData[];
  export let radius: string | undefined = undefined;
</script>

<section class="RingChart" style:--ring-chart-radius={radius}>
  {#each data as item, i}
    <ProgressRingSvg
      progress={item.percentage}
      scale={1 - i / data.length}
      color={item.color}
      radius="100%"
    />
    <h1 style:bottom="calc({radius} / 8 * {i} - {radius} / 140)">{item.label}</h1>
  {/each}
</section>

<style lang="scss">
  @use "style/misc";

  .RingChart {
    display: flex;
    justify-content: center;
    min-width: var(--ring-chart-radius, var(--area-nm-100));
    aspect-ratio: 1 / 1;
    position: relative;

    :global(.ProgressRingSvg) {
      position: absolute;
    }

    h1 {
      position: absolute;
      left: 50%;
      padding-left: var(--spacing-nm-100);
      font-size: var(--h-nm-200);
    }
  }
</style>

<script lang="ts" context="module">
  import ProgressRingSvg from "components/ProgressRingSvg.svelte";

  interface RingChartData {
    label: string,
    percentage: number,
    color?: string,
  }
</script>
