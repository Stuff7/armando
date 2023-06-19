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
  <section class="MobileSlide__content">
    <slot name="content" />
    {#if !hideSwipe}<SwipeIndicator />{/if}
  </section>
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
      justify-content: space-between;
      overflow: hidden;

      &__header {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-lg-100);
        font-size: var(--h-lg-300);
        flex: 1;
        & :global(strong) {
          color: var(--color-accent-1);
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg-100);
        border-radius: var(--mobile-slide-radius, var(--radius-lg-100) var(--radius-lg-100) 0 0);
        background: var(--color-dark);
        padding: var(--mobile-slide-padding, calc(var(--spacing-lg-100) * 1.5) var(--spacing-lg-100) 0 var(--spacing-lg-100));
        --language-graphs-direction: column;
      }
    }
  }
</style>
