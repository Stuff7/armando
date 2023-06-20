<script lang="ts" context="module">
  import ProfilePicture from "components/ProfilePicture.svelte";
  import DownloadResume from "components/DownloadResume.svelte";
  import SwipeIndicator from "components/SwipeIndicator.svelte";
</script>

<article class="Home">
  <div class="Home__profile">
    <ProfilePicture />
    <section class="Home__info">
      <h1 class="Home__title">
        <div class="Home__name">
          <p>Hi. &nbsp;</p>
          <p>I'm <strong>Armando</strong></p>
        </div>
        <strong>Muñoz</strong>
      </h1>
      <p class="Home__subtitle">Software Engineer</p>
      <summary class="Home__summary">
        Expert in web dev, UI/UX, back-end services, and more.
      </summary>
    </section>
  </div>
  <div class="Home__body">
    <DownloadResume showContact />
    <SwipeIndicator>Or swipe for more...</SwipeIndicator>
  </div>
</article>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .Home {
    @include media.smaller-than(desktop-sm) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: calc(var(--spacing-lg-200) * 1.3);
      background: #0007;
      overflow: hidden;
      backdrop-filter: blur(1.5px);
      color: white;
      padding: var(--spacing-lg-200);
      @include misc.shadow;
      --profile-picture-width: var(--area-lg-100);

      &__profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: calc(var(--spacing-lg-200) * 1.3);
        width: 100%;
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-nm-100);
        width: 100%;
      }

      &__title {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        font-weight: bold;
        font-size: calc(var(--h-lg-200) * 0.85);

        strong {
          color: var(--color-accent-1);
        }
      }

      &__name {
        display: flex;
        flex-direction: column;
      }

      &__subtitle {
        font-family: var(--font-title);
        font-weight: bold;
        font-size: calc(var(--h-lg-100) * 0.85);
      }

      &__summary {
        font-size: calc(var(--h-md-200) * 0.85);
        max-width: 60vw;
      }

      &__body {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        gap: var(--spacing-md-200);
        margin-top: var(--spacing-md-100);
      }

      & :global(.ProfilePicture) {
        max-width: 35vh;
      }
    }

    @include media.smaller-than(phone) {
      & :global(.ProfilePicture) {
        max-width: 25vh;
      }
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      align-items: start;
      justify-content: space-between;

      &__profile {
        flex-direction: row;
        max-width: 60vw;
        gap: var(--spacing-nm-100);
      }

      &__body {
        flex-direction: row;
        margin-top: 0;
        flex: 0;
        --download-resume-font-size: var(--p-nm-100);
        --download-resume-icon-size: calc(var(--area-sm-50) * 0.5);
        --download-resume-padding: var(--spacing-nm-100);
      }

      &__info {
        gap: var(--spacing-sm-50);
      }

      &__title {
        font-size: calc(var(--h-lg-200) * 0.6);
      }

      &__name {
        flex-direction: row;
      }

      &__subtitle {
        font-size: calc(var(--h-lg-100) * 0.6);
      }

      &__summary {
        font-size: calc(var(--h-md-200) * 0.6);
      }
    }
  }
</style>
