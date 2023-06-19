<script lang="ts">
  export let vertical = false;
  export let compact = false;
</script>

<div class="Divider" class:vertical class:margin={!compact} />

<style lang="scss">
  .Divider {
    background: var(--color-accent-2);
    opacity: 0.25;
    flex-shrink: 0;

    &:not(.vertical) {
      &.margin {
        margin-block: var(--spacing-nm-100);
      }
      height: 1px;
      width: 100%;
    }

    &.vertical {
      &.margin {
        margin-inline: var(--spacing-nm-100);
      }
      width: 1px;
      height: 100%;
    }
  }
</style>
