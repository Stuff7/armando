<script>
  import ProgrammingGraphs from "components/ProgrammingGraphs.svelte";
  import LanguageGraphs from "components/LanguageGraphs.svelte";
  import Divider from "components/Divider.svelte";
  import IconLabel from "components/IconLabel.svelte";
  import Icon from "components/Icon.svelte";
  import MobileSlide from "components/mobile/Slide.svelte";
</script>

<MobileSlide>
  <svelte:fragment slot="header">
    <p>Here's my <strong>profile</strong></p>
    <strong>summary</strong>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <div class="MobileProfile__info">
      <Icon name="profile" />
      <div class="MobileProfile__basic-info">
        <IconLabel icon="location" label="Mexico" />
        <IconLabel icon="birthday-cake" label="26yo" />
      </div>
      <Divider compact vertical />
      <LanguageGraphs style="--progress-ring-size: var(--area-sm-50)" />
    </div>
    <ProgrammingGraphs style="grid-area: right" />
  </svelte:fragment>
</MobileSlide>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .MobileProfile {
    @include media.smaller-than(desktop-sm) {
      &__info {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: var(--spacing-nm-200);
        grid-area: left;
        --language-graphs-direction: column;
        --icon-size: calc(var(--area-nm-100) * 0.8);
        --icon-color: white;

        & > :global(.Icon) {
          margin-right: auto;
        }
      }

      &__basic-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: var(--spacing-lg-100);
        --icon-label-flow: row-reverse;
        --icon-size: var(--spacing-lg-100);
      }
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      &__info {
        --icon-size: calc(var(--area-nm-100) * 0.5);
      }
    }
  }
</style>
