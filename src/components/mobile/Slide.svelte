<script lang="ts">
  import SwipeIndicator from "components/SwipeIndicator.svelte";

  export let padding: Option<string> = null;
  export let radius: Option<string> = null;
  export let background: Option<string> = null;
  export let hideSwipe = false;
</script>

<article
  class="MobileSlide"
  style:background
  style:--mobile-slide-padding={padding}
  style:--mobile-slide-radius={radius}
>
  <h1 class="MobileSlide__header"><slot name="header" /></h1>
  <slot name="content" />
  {#if !hideSwipe}<SwipeIndicator />{/if}
  <slot name="footer" />
</article>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .MobileSlide {
    display: none;
    @include media.smaller-than(desktop-sm) {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg-100);
      overflow: hidden;
      background: var(--color-dark);
      color: white;
      padding: var(--mobile-slide-padding, calc(var(--spacing-lg-100) * 1.5) var(--spacing-lg-100));

      &__header {
        display: flex;
        flex-direction: column;
        font-size: var(--h-lg-300);

        & :global(strong) {
          color: var(--color-accent-1);
        }
      }

      & > :global(.SwipeIndicator) {
        margin-top: auto;
      }
    }
  }
</style>
