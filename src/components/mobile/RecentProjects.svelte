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
  <div slot="content" class="RecentProjects">
    <Carousel items={PROJECTS} visibleCount={1} let:props>
      <ProjectCard {...props} />
    </Carousel>
    <h1>Download <strong>my resume</strong> for more.</h1>
    <DownloadResume showContact />
  </div>
</MobileSlide>

<style lang="scss">
  .RecentProjects {
    display: flex;
    flex-direction: column;
    padding-bottom: var(--spacing-lg-100);
    gap: var(--spacing-lg-100);
    flex: 1;
    justify-content: center;
    align-items: center;

    & :global(.Carousel) {
      max-width: 100%;
    }

    h1 {
      color: white;
      font-size: var(--h-lg-200);
      text-align: center;
      strong {
        color: var(--color-accent-1);
      }
    }
  }
</style>
