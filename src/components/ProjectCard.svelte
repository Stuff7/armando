<script lang="ts">
  import Icon from "components/Icon.svelte";

  export let name: string;
  export let status: Status = "completed";
  export let description: string;
  export let logo: IconName;
  export let sources: Source[] = [];
</script>

<article class="ProjectCard">
  <section class="ProjectCard__languages">
    {#each sources as source}
      <Icon name={source.icon} tooltip={source.language} />
    {/each}
  </section>
  <section class="ProjectCard__logo">
    <Icon name={logo} />
  </section>
  <div class="ProjectCard__info">
    <h1><strong>{name}</strong></h1>
    <h2 style:color={STATUS_COLOR[status]}>{status}</h2>
    <summary>{description}</summary>
  </div>
  <div class="ProjectCard__sources">
    <strong>Sources</strong>
    {#each sources as source}
      <a href={source.repoLink} target="_blank">
        <span style:background={LANGUAGE_COLOR_MAP[source.language]} />
        <p>{source.repoName}</p>
      </a>
    {/each}
  </div>
</article>

<style lang="scss">
  @use "style/media";

  .ProjectCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--spacing-md-300);
    overflow: hidden;
    padding: var(--spacing-nm-200);
    background: var(--color-light);
    color: var(--color-dark);
    border-radius: var(--radius-nm-200);
    position: relative;
    width: 100%;
    height: 100%;

    &__info {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-nm-100);
      margin-top: var(--spacing-lg-100);

      h1, h2 {
        font-size: var(--h-nm-300);
        text-transform: capitalize;
      }

      h1 {
        padding-right: calc(var(--area-sm-50) * 1.2);
      }

      summary {
        opacity: 0.75;
      }
    }

    &__languages, &__logo {
      display: flex;
      padding: var(--spacing-sm-100);
      position: absolute;
      top: 0;
      background: var(--color-dark);
    }

    &__languages {
      gap: var(--spacing-nm-100);
      left: 0;
      border-radius: var(--radius-nm-200) 0 var(--radius-nm-200) 0;
    }

    &__logo {
      right: 0;
      border-radius: 0 var(--radius-nm-200) 0 var(--radius-nm-200);
      --icon-size: var(--area-sm-50);
    }

    &__sources {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-nm-100);

      a {
        display: flex;
        gap: var(--spacing-nm-100);
        align-items: center;
        color: var(--color-accent-1);
        text-decoration: underline;
        width: max-content;

        span {
          border-radius: 50%;
          width: var(--spacing-nm-100);
          height: var(--spacing-nm-100);
        }
      }
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      gap: var(--spacing-nm-100);

      &__info {
        gap: 0;
        font-size: var(--p-nm-100);
        h1, h2 {
          font-size: var(--h-nm-100);
        }
      }

      &__logo {
        --icon-size: calc(var(--area-sm-50) * 0.5);
      }

      &__sources {
        font-size: var(--p-nm-100);
      }
    }
  }
</style>

<script lang="ts" context="module">
  const STATUS_COLOR = {
    "completed": "#139318",
    "in progress": "#1F7ED5",
  };

  export type Status = keyof typeof STATUS_COLOR;

  const LANGUAGE_COLOR_MAP = {
    cpp: "#f34b7d",
    css: "#563d7c",
    html: "#e44b23",
    javascript: "#f1e05a",
    kotlin: "#F18E33",
    lua: "#000080",
    python: "#3572A5",
    rust: "#dea584",
    typescript: "#2b7489",
    svelte: "#ff3e00",
  };

  export type Language = keyof typeof LANGUAGE_COLOR_MAP;

  export interface Source {
    language: Language,
    icon: IconName,
    repoName: string,
    repoLink: string,
  }
</script>
