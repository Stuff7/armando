<script lang="ts">
  import { PROJECTS } from "components/Content.svelte";
  import ProjectCard from "components/ProjectCard.svelte";
  import Carousel from "components/Carousel.svelte";
  import DownloadResume from "components/DownloadResume.svelte";
  import MobileSlide from "components/mobile/Slide.svelte";
</script>

<MobileSlide hideSwipe>
  <svelte:fragment slot="header">
    <p>My <strong>recent projects</strong></p>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <div class="RecentProjects__carousel">
      <Carousel items={PROJECTS} visibleCount={1} let:props>
        <ProjectCard {...props} />
      </Carousel>
    </div>
    <div class="RecentProjects__download">
      <h1>Download <strong>my resume</strong> for more.</h1>
      <DownloadResume showContact />
    </div>
  </svelte:fragment>
</MobileSlide>

<style lang="scss">
  @use "style/media";

  .RecentProjects {
    &__carousel {
      display: flex;
      align-items: center;

      & :global(.Carousel) {
        max-width: 100%;
      }
    }

    &__download {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-nm-100);
      h1 {
        color: white;
        font-size: var(--h-lg-200);
        text-align: center;
        strong {
          color: var(--color-accent-1);
        }
      }
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      &__carousel {
        max-width: 50vw;
        grid-area: left;
      }

      &__download {
        grid-area: right;
        justify-content: center;
        --download-resume-font-size: var(--p-nm-200);
        --download-resume-icon-size: calc(var(--area-sm-50) * 0.5);
        --download-resume-padding: var(--spacing-nm-100);

        h1 {
          font-size: var(--h-md-100);
        }
      }
    }
  }
</style>
