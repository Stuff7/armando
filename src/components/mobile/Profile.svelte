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
      <LanguageGraphs />
    </div>
    <ProgrammingGraphs />
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
  }
</style>
