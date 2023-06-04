<script lang="ts" context="module">
  import ProgressRingSvg from "components/ProgressRingSvg.svelte";

  interface RingChartData {
    label: string,
    percentage: number,
    color?: string,
  }
</script>

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
      {radius}
    />
    <h1 style:bottom="calc(var(--h-lg-300) * {i} - var(--spacing-sm-50))">{item.label}</h1>
  {/each}
</section>

<style lang="scss">
  @use "style/misc";

  .RingChart {
    display: flex;
    justify-content: center;
    min-width: var(--ring-chart-radius, var(--area-nm-100));
    min-height: var(--ring-chart-radius, var(--area-nm-100));
    position: relative;

    :global(.ProgressRingSvg) {
      position: absolute;
    }

    h1 {
      position: absolute;
      left: 50%;
      padding-left: var(--spacing-nm-100);
    }
  }
</style>
