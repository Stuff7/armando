<script lang="ts">
  export let progress = 0;
  export let label = "Progress";
  export let width = "100%";

  $: progressPercent = `${progress}%`;
</script>

<div
  class="ProgressBar"
  style:--progress-bar-progress="{progress}%"
  style:--progress-bar-width={width}
>
  <label for="">
    <p>{label}</p>
    <p>{progressPercent}</p>
  </label>
  <div class="ProgressBar__bar" style:--progress-bar-progress={progressPercent}>
    <div class="ProgressBar__progress"></div>
  </div>
</div>

<style lang="scss">
  .ProgressBar {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
    width: var(--progress-bar-width, 100%);

    label {
      color: white;
      display: flex;
      justify-content: space-between;
    }

    &__bar {
      width: 100%;
      height: var(--spacing-nm-200);
      border-radius: var(--spacing-nm-200);
      background: var(--color-light);
      overflow: hidden;
    }

    &__progress {
      height: 100%;
      background: var(--color-accent-1);
      animation: load 1s linear forwards;
    }

    @keyframes load {
      0% {
        width: 0%;
      }

      100% {
        width: var(--progress-bar-progress, 0%);
      }
    }
  }
</style>
