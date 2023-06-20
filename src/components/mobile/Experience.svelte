<script lang="ts">
  import MobileSlide from "components/mobile/Slide.svelte";
  import Select from "components/Select.svelte";
  import Icon from "components/Icon.svelte";
  import { EXPERIENCE } from "components/Content.svelte";
  import { getYearRange, getYearsElapsed } from "utils/date";

  let selected = EXPERIENCE[0];
</script>

<MobileSlide>
  <svelte:fragment slot="header">
    <p>My <strong>Experience</strong></p>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <div class="Experience__select-wrapper">
      <Select
        options={EXPERIENCE}
        labelKey="company"
        valueKey="company"
        bind:selected
      >
        <div class="Experience__select">
          <strong class="Experience__job-title">{selected.jobTitle}</strong>
          <p class="Experience__company">@{selected.company}</p>
          <p class="Experience__years">
            {getYearRange(selected.startDate, selected.endDate)}
            <small>{getYearsElapsed(selected.startDate, selected.endDate)} years</small>
          </p>
          <p class="Experience__location">{selected.location}</p>
        </div>
      </Select>
    </div>
    <ul class="Experience__summary">
      {#each selected.bulletPoints as point}
        <li class="Experience__point"><Icon name="chevron" /><p>{point}</p></li>
      {/each}
    </ul>
  </svelte:fragment>
</MobileSlide>

<style lang="scss">
  @use "style/media";

  .Experience {
    &__select-wrapper {
      display: flex;
      align-items: center;

      & :global(.Select) {
        grid-area: left;
        --select-width: 100%;
        --select-border: var(--spacing-sm-50) solid var(--color-dark);
        --select-border-radius: var(--radius-lg-100);
        --swipe-indicator-padding: 0 var(--spacing-lg-100);
      }
    }

    &__select {
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: var(--spacing-sm-50);
      padding: var(--spacing-nm-100);
    }

    &__job-title {
      color: var(--color-accent-1);
      font-size: var(--h-md-100);
      font-weight: bold;
    }

    &__company {
      font-size: var(--h-nm-200);
      font-weight: bold;
    }

    &__years small {
      font-size: inherit;
      opacity: 0.75;
    }

    &__summary {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg-100);
      list-style-type: none;
      color: white;
      font-size: var(--h-md-100);
    }

    &__point {
      display: flex;
      align-items: center;
      gap: var(--spacing-md-100);
      border-block: 0.5vw double var(--color-accent-2);
      padding: var(--spacing-nm-100);
      --icon-transform: rotate(90deg);
      --icon-color: var(--color-accent-2);
      --icon-size: var(--spacing-lg-100);
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      &__summary {
        justify-content: center;
        font-size: var(--h-nm-100);
        gap: var(--spacing-nm-100);
        grid-area: right;
      }
    }
  }
</style>
