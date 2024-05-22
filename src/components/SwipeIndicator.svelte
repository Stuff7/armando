<script lang="ts">
  import Icon from "components/Icon.svelte";

  export let vertical = false;
</script>

<div class="SwipeIndicator" class:vertical>
  <Icon name="chevron" />
  <slot>
    {#if !vertical}Swipe{/if}
  </slot>
  <Icon name="chevron" />
</div>

<style lang="scss">
  @use "style/media";

  .SwipeIndicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: var(--p-md-300);
    padding: var(--swipe-indicator-padding, initial);
    --icon-size: var(--spacing-lg-100);
    --icon-color: var(--color-accent-1);

    &:not(.vertical) {
      width: 100%;
      margin-bottom: 5vh;
    }

    &.vertical {
      height: 100%;
      flex-direction: column;
    }

    & :global(.Icon) {
      animation: point-up 1s ease-in-out infinite;
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      gap: var(--spacing-nm-100);

      &:not(.vertical) {
        justify-content: end;
      }

      &:not(.vertical) :global(.Icon:first-child) {
        display: none;
      }
    }
  }
</style>
