<article class="Content">
  <section class="Content__summary">
    <h1>I'm a software engineer</h1>
    <p>Specialized in full stack development</p>
    <summary>
      My expertise lies in the dynamic realms of web development, UI/UX design,
      back-end services, and beyond. With a passion for crafting seamless user
      experiences and harnessing cutting-edge technologies, I bring innovation
      and functionality to every project.
    </summary>
  </section>
  <section class="Content__recent-work">
    <h1>Recent Work</h1>
    <div>
      {#each PROJECTS as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
  <section class="Content__projects-breakdown">
    <h1>GitHub Projects Breakdown</h1>
    <RingChart
      radius="min(40vw, 80%)"
      data={[{
        label: "Rust",
        color: "#dea584",
        percentage: 30,
      }, {
        label: "Typescript",
        color: "#2b7489",
        percentage: 20,
      }, {
        label: "Svelte",
        color: "#ff3e00",
        percentage: 20,
      }, {
        label: "C++",
        color: "#f34b7d",
        percentage: 10,
      }, {
        label: "Python",
        color: "#3572A5",
        percentage: 10,
      }]}
    />
  </section>
</article>

<style lang="scss">
  @use "style/misc";

  .Content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg-200);
    background: #0008;
    border-radius: var(--spacing-nm-100);
    overflow: hidden;
    backdrop-filter: blur(1.5px);
    color: white;
    padding: calc(var(--spacing-lg-200) * 2) var(--spacing-lg-200);
    height: max-content;
    min-height: 100%;
    @include misc.shadow;

    &__recent-work {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-nm-200);

      h1 {
        font-size: var(--h-lg-100);
      }

      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-nm-200);
        overflow: auto hidden;
      }
    }

    &__summary {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-nm-100);
      width: 50%;
      text-align: center;
      margin-left: var(--spacing-lg-200);

      h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: var(--h-lg-200);
      }

      p {
        font-family: var(--font-title);
        font-weight: bold;
        font-size: var(--h-nm-300);
      }

      summary {
        font-size: var(--h-nm-200);
      }
    }

    &__projects-breakdown {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: var(--spacing-md-200);
      :global(.RingChart) {
        margin-inline: auto;
      }
    }
  }
</style>

<script lang="ts" context="module">
  import ProjectCard, { type Source, type Status } from "components/ProjectCard.svelte";
  import RingChart from "components/RingChart.svelte";

  const PROJECTS: {
    name: string,
    status: Status,
    description: string,
    logo: IconName,
    sources: Source[],
  }[] = [{
    name: "Fylvur",
    status: "completed",
    description: "A file explorer that aims to offer a user-friendly \
    interface for playing videos and displaying images within a local network.",
    logo: "folder",
    sources: [{
      icon: "svelte-plain",
      language: "svelte",
      repoLink: "https://github.com/Stuff7/fylvur-front",
      repoName: "fylvur-front",
    }, {
      icon: "ferris-plain",
      language: "rust",
      repoLink: "https://github.com/Stuff7/fylvur-rs",
      repoName: "fylvur-rs",
    }],
  }, {
    name: "Svelte Playground",
    status: "completed",
    description: "Wide range of UI components and tools written in Svelte. \
    Additionally, it includes an Axum back-end to interact with Google Drive.",
    logo: "playground",
    sources: [{
      icon: "svelte-plain",
      language: "svelte",
      repoLink: "https://github.com/Stuff7/svelte-playground",
      repoName: "svelte-playground",
    }, {
      icon: "ferris-plain",
      language: "rust",
      repoLink: "https://github.com/Stuff7/playground-api",
      repoName: "playground-api",
    }],
  }, {
    name: "Bevy Snake",
    status: "in progress",
    description: "A captivating blend of Snake and Tetris games powered by the Bevy engine.",
    logo: "tetris",
    sources: [{
      icon: "ferris-plain",
      language: "rust",
      repoLink: "https://github.com/Stuff7/bevy_snake",
      repoName: "bevy_snake",
    }],
  }];
</script>
