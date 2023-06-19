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
  <section class="Content__carousel">
    <h1><Icon name="portfolio" />Experience <em>8+ years</em></h1>
    <Carousel items={EXPERIENCE} visibleCount={1} inlineNav let:props>
      <ExperienceCard {...props} />
    </Carousel>
  </section>
  <section class="Content__carousel">
    <h1><Icon name="github" />Recent Work</h1>
    <Carousel items={PROJECTS} let:props>
      <ProjectCard {...props} />
    </Carousel>
  </section>
  <section class="Content__carousel">
    <h1><Icon name="chat-bubble-filled" />Contact</h1>
    <Contact />
  </section>
</article>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .Content {
    display: none;
    @include media.larger-than(desktop-sm) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: var(--spacing-lg-200);
      background: #0008;
      border-radius: var(--spacing-nm-100);
      overflow: hidden;
      backdrop-filter: blur(1.5px);
      color: white;
      padding: var(--spacing-lg-200);
      padding-top: calc(var(--spacing-lg-200) * 2);
      height: max-content;
      min-height: 100%;
      @include misc.shadow;

      &__carousel {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-nm-200);

        h1 {
          font-size: var(--h-md-100);
          display: flex;
          gap: var(--spacing-nm-200);
          align-items: center;
          border-bottom: 1px solid var(--color-light);
          --icon-size: var(--spacing-lg-100);

          em {
            margin-left: auto;
            font-size: var(--p-lg-100);
            font-weight: 200;
            color: var(--color-light);
          }

          & :global(.Icon) {
            background: var(--color-light);
            color: var(--color-dark);
            padding: var(--spacing-nm-100);
          }
        }
      }

      &__summary {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-nm-100);
        width: 50%;
        max-width: var(--area-lg-200);
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
    }
  }
</style>

<script lang="ts" context="module">
  import ProjectCard, { type Source, type Status } from "components/ProjectCard.svelte";
  import ExperienceCard from "components/ExperienceCard.svelte";
  import Carousel from "components/Carousel.svelte";
  import Icon from "components/Icon.svelte";
  import Contact from "components/Contact.svelte";

  export const PROJECTS: {
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

  export const EXPERIENCE: {
    jobTitle: string,
    company: string,
    startDate: Date,
    endDate: Option<Date>,
    location: string,
    description: string,
    bulletPoints: string[],
  }[] = [{
    jobTitle: "Full Stack Developer",
    company: "Maestro Interactive",
    startDate: new Date("may 4, 2020"),
    endDate: new Date("may 31, 2023"),
    location: "Los Angeles, California (Fully remote)",
    description: "At Maestro, I collaborated closely with a design team \
    to create an immersive UI with components used as dynamic building blocks. \
    I also developed a video call application. By leveraging WebRTC and \
    WebSockets, and I implemented powerful analytics capabilities using \
    Elasticsearch and BigQuery.",
    bulletPoints: [
      "I worked closely with a design team to create an immersive UI with custom components.",
      "I developed a video call app leveraging WebRTC and WebSockets.",
      "I implemented powerful analytics capabilities using Elasticsearch and BigQuery.",
    ],
  }, {
    jobTitle: "Full Stack Developer",
    company: "Paxico Technologies",
    startDate: new Date("jun 1, 2015"),
    endDate: new Date("may 1, 2020"),
    location: "Tijuana, Baja California (Fully remote)",
    description: "At Paxico, I worked on developing a platform centered \
    around empowering companies to conduct comprehensive load tests on \
    their products. Moreover, I played a pivotal role in developing intelligent \
    algorithms and predictive models, empowering organizations to anticipate and \
    mitigate performance issues before they manifest in production environments.",
    bulletPoints: [
      "I worked on a platform centered around providing load tests as a service.",
      "I developed intelligent algorithms and predictive models, empowering \
      organizations to anticipate and mitigate performance issues before they \
      manifest in production environments.",
    ],
  }, {
    jobTitle: "Full Stack Developer",
    company: "Self-employed",
    startDate: new Date("may 6, 2013"),
    endDate: new Date("jun 1, 2015"),
    location: "Nuevo Leon, Mexico",
    description: "As a self-employed freelancer, I worked on a project \
    that involved the creation of a file system interface for cloud storage, \
    with a primary focus on Google Drive. As well as working with FFMPEG in \
    the backend, I acquired expertise in video technologies.",
    bulletPoints: [
      "I worked on a file system interface for cloud storage, with a primary focus on Google Drive.",
      "I worked with FFMPEG in the backend, where I acquired expertise in video technologies.",
    ],
  }];
</script>
