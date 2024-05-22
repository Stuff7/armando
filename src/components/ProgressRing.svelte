<script lang="ts">
  export let progress = 85;
  export let label = "";

  $: degreesRight = progress / 100 * 360;
  $: degreesLeft = Math.min(degreesRight, 180);
</script>

<div
  class="ProgressRing"
  style:--progress-ring__degrees-left="{degreesLeft}deg"
  style:--progress-ring__degrees-right="{degreesRight}deg"
>
  <div class="ProgressRing__ring">
    <span class="ProgressRing__progress">{progress}%</span>
    <div class="ProgressRing__overlay"></div>
    <div class="ProgressRing__left"></div>
    {#if degreesRight > 180}
      <div class="ProgressRing__right"></div>
    {/if}
  </div>
  {#if label}
    <p>{label}</p>
  {/if}
</div>

<style lang="scss">
  .ProgressRing {
    --size: var(--progress-ring-size, calc(var(--area-sm-50) * 1.3));
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-nm-100);
    font-size: max(calc(var(--size) * 0.25), var(--p-nm-100));
    color: #fff;

    &__ring {
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      text-align: center;
      line-height: var(--size);
    }

    &__progress {
      position: relative;
      z-index: 100;
    }

    &__overlay {
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &__left, &__right {
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: calc(var(--size) / 10) solid var(--color-accent-1);
      border-radius: calc(var(--size) / 2) 0px 0px calc(var(--size) / 2);
      border-right: 0;
      transform-origin: right;
    }

    &__left {
      animation: load 1s linear forwards;
    }

    &__right {
      animation: load2 0.5s linear forwards;
    }
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(var(--progress-ring__degrees-left));
    }
  }

  @keyframes load2 {
    0% {
      z-index: 100;
      transform: rotate(180deg);
    }

    100% {
      z-index: 100;
      transform: rotate(var(--progress-ring__degrees-right));
    }
  }
</style>
