<script lang="ts" context="module">
  import ProfilePicture from "components/ProfilePicture.svelte";
  import DownloadResume from "components/DownloadResume.svelte";
  import SwipeIndicator from "components/SwipeIndicator.svelte";
</script>

<article class="Home">
  <ProfilePicture />
  <section class="Home__info">
    <h1 class="Home__title">
      <p>Hi.</p>
      <p>I'm <strong>Armando</strong></p>
      <strong>Muñoz</strong>
    </h1>
    <p class="Home__subtitle">Software Engineer</p>
    <summary class="Home__summary">
      Expert in web dev, UI/UX, back-end services, and more.
    </summary>
  </section>
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
      }

      & :global(.ProfilePicture) {
        max-width: 35vh;
      }
    }
  }
</style>
