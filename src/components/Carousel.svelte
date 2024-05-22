<script lang="ts">
  import Icon from "components/Icon.svelte";

  type Item = $$Generic<object>;
  export let items: Item[] = [];
  export let visibleCount = 2;
  export let inlineNav = false;

  let itemIndex = 0;

  $: noNext = itemIndex >= items.length - 1;
  $: noPrev = !itemIndex;
</script>

<section class="Carousel" style:--carousel-item={itemIndex}>
  <div class="Carousel__items" class:inline={inlineNav} style:--carousel-visible-count={visibleCount}>
    {#each items as props, i}
      <button class="Carousel__item" class:inactive={itemIndex !== i} on:click={() => itemIndex = i}>
        <slot {props} />
      </button>
    {/each}
  </div>
  <nav class="Carousel__nav">
    <button class="Carousel__left" class:inline={inlineNav} disabled={noPrev} on:click={() => itemIndex -= 1}>
      <Icon name="arrow" />
    </button>
    <div class="Carousel__pages">
      {#each items as _, i}
        <button class="Carousel__page-button" class:inactive={itemIndex !== i} on:click={() => itemIndex = i} />
      {/each}
    </div>
    <button class="Carousel__right" class:inline={inlineNav} disabled={noNext} on:click={() => itemIndex += 1}>
      <Icon name="arrow" />
    </button>
  </nav>
</section>

<style lang="scss">
  .Carousel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
    position: relative;

    &__items {
      --carousel-spacing: var(--spacing-nm-100);
      display: flex;
      gap: var(--carousel-spacing);
      overflow: hidden;

      &.inline {
        margin-inline: var(--spacing-lg-200);
      }
    }

    &__item {
      text-align: inherit;
      font-size: inherit;
      cursor: inherit;
      user-select: inherit;
      display: flex;
      flex: 0 0 calc(100% / var(--carousel-visible-count));
      transition: translate 0.5s, scale 0.5s, opacity 0.5s;
      translate: calc(
        -100% * min(var(--carousel-item), 1) / var(--carousel-visible-count) -
        max(100% * (var(--carousel-item) - 1), 0%) -
        max(var(--carousel-spacing) * var(--carousel-item), 0%)
      );

      &.inactive {
        scale: 0.85;
        opacity: 0.75;
      }
    }

    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-nm-100);
      --icon-color: white;

      & .inline {
        position: absolute;
        top: calc(-50% - var(--spacing-nm-100));
        translate: 0 50%;
      }

      & > button {
        height: 100%;
        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }
    }

    &__left {
      transform: rotate(180deg);
    }

    &__right {
      right: 0;
    }

    &__pages {
      display: flex;
      flex: 1;
      gap: var(--spacing-nm-100);
      justify-content: center;
    }

    &__page-button {
      border-radius: 50%;
      width: var(--spacing-sm-100);
      background: var(--color-light);
      aspect-ratio: 1 / 1;

      &.inactive {
        opacity: 0.5;
      }
    }
  }
</style>
