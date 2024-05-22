<script lang="ts">
  import SwipeIndicator from "components/SwipeIndicator.svelte";

  let clazz = ""; export { clazz as class };
  export let padding: Option<string> = null;
  export let radius: Option<string> = null;
  export let background: Option<string> = null;
  export let hideSwipe = false;
</script>

<article
  class="MobileSlide {clazz}"
  style:background
  style:--mobile-slide-padding={padding}
  style:--mobile-slide-radius={radius}
>
  <h1 class="MobileSlide__header"><slot name="header" /></h1>
  <slot name="content" />
  {#if !hideSwipe}
    <SwipeIndicator />
    <SwipeIndicator vertical />
  {/if}
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

      & > :global(.SwipeIndicator.vertical) {
        display: none;
      }
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      display: grid;
      padding: var(--spacing-md-300);
      grid-template-columns: [header] 1fr [left right] 1fr [swipe] max-content;
      grid-template-rows: [header] max-content [left right] 1fr;
      grid-template-areas:
      "header right swipe"
      "left right swipe";

      &__header {
        grid-area: header;
        font-size: var(--h-lg-100);
      }

      & > :global(.SwipeIndicator) {
        grid-area: swipe;
      }

      & > :global(.SwipeIndicator.vertical) {
        display: flex;
      }

      & > :global(.SwipeIndicator:not(.vertical)) {
        display: none;
      }
    }
  }
</style>
