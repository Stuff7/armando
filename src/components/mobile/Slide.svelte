<article class="MobileSlide">
  <h1 class="MobileSlide__header"><slot name="header" /></h1>
  <section class="MobileSlide__content"><slot name="content" /></section>
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

      &__header {
        display: flex;
        flex-direction: column;
        padding: var(--spacing-lg-100);
        font-size: var(--h-lg-300);
        & :global(strong) {
          color: var(--color-accent-1);
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg-100);
        border-radius: var(--radius-lg-100) var(--radius-lg-100) 0 0;
        background: var(--color-dark);
        padding: calc(var(--spacing-lg-100) * 1.5) var(--spacing-lg-100) 0 var(--spacing-lg-100);
        --language-graphs-direction: column;
      }
    }
  }
</style>
