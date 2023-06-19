<script lang="ts" context="module">
  import Contact from "components/Contact.svelte";
  import ProfilePicture from "components/ProfilePicture.svelte";
  import DownloadResume from "components/DownloadResume.svelte";
  import SwipeIndicator from "components/SwipeIndicator.svelte";
</script>

<article class="MobileContent">
  <ProfilePicture />
  <section class="MobileContent__info">
    <h1 class="MobileContent__title">
      <p>Hi.</p>
      <p>I'm <strong>Armando</strong></p>
      <strong>Muñoz</strong>
    </h1>
    <p class="MobileContent__subtitle">Software Engineer</p>
    <summary class="MobileContent__summary">
      Expert in web dev, UI/UX, back-end services, and more.
    </summary>
  </section>
  <div class="MobileContent__body">
    <div class="MobileContent__contact">
      <Contact iconSize="calc(var(--area-sm-50) * 0.7)" />
      <DownloadResume />
    </div>
    <SwipeIndicator>Or swipe for more...</SwipeIndicator>
  </div>
</article>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .MobileContent {
    display: none;
    @include media.smaller-than(desktop-sm) {
      display: flex;
      scroll-snap-align: center;
      flex-direction: column;
      align-items: center;
      gap: calc(var(--spacing-lg-200) * 1.3);
      background: #0007;
      overflow: hidden;
      backdrop-filter: blur(1.5px);
      color: white;
      padding: var(--spacing-lg-200);
      height: 100vh;
      min-height: 100%;
      @include misc.shadow;
      --profile-picture-width: var(--area-lg-100);

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
        :global(.DownloadResume) {
          border-radius: 0 0 var(--radius-nm-100) var(--radius-nm-100);
          width: 100%;
          font-size: var(--h-md-100);
          padding: var(--spacing-md-200);
        }
      }

      & :global(.ProfilePicture) {
        max-width: 35vh;
      }
    }
  }
</style>
