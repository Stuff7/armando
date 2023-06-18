<script lang="ts" context="module">
  import ProgressBar from "components/ProgressBar.svelte";
  import Divider from "components/Divider.svelte";
  import IconLabel from "components/IconLabel.svelte";
  import Icon from "components/Icon.svelte";
  import ProgressRing from "components/ProgressRing.svelte";
  import DownloadResume from "components/DownloadResume.svelte";
  import ProfilePicture from "components/ProfilePicture.svelte";

  const INFO = [
    ["Residence", "Mexico"],
    ["Age", Math.floor((Date.now() - (new Date("jan 28, 1997")).getTime()) / 1000 / 60 / 60 / 24 / 30 / 12)],
  ];

  const LANGUAGES = [["Spanish", 100], ["English", 100]] as const;

  const WORK = [
    ["maestro", "Worked at Maestro Interactive for 3 years"],
    ["paxico", "Worked at Paxico Technologies for 5 years"],
    ["elephant", "Worked as a freelance for 2 years"],
  ] as const;

  const PROGRAMMING = [
    ["Typescript / Javascript", 100],
    ["CSS / SASS", 100],
    ["Rust", 80],
    ["Python / Mojo", 80],
  ] as const;

  const FRAMEWORKS = [
    ["React / Svelte", 100],
    ["SvelteKit / Next.js", 100],
    ["Express / Koa", 80],
    ["Axum / Rocket", 80],
    ["MongoDB / SQL", 80],
  ] as const;

  const TOOLS = [
    "Vite, Webpack, Gulp",
    "Tailwind, Styled components, Emotion, MUI",
    "Deno, Node",
    "Firebase",
    "Jest",
    "Storybook",
    "REST, GraphQL",
    "SEO, SSR, serverless",
    "Figma",
  ];
</script>

<aside class="Sidebar">
  <section class="Sidebar__pic">
    <ProfilePicture />
    <div class="Sidebar__pic__info">
      <h4>Armando Muñoz</h4>
      <p>Full-stack Developer</p>
      <p>Software Engineer</p>
    </div>
    <DownloadResume />
  </section>
  <section class="Sidebar__content">
    {#each INFO as [label, value]}
      <div class="Sidebar__info">
        <strong>{label}:</strong>
        <p>{value}</p>
      </div>
    {/each}
    <Divider />
      <div class="Sidebar__languages">
        {#each LANGUAGES as [label, progress]}
          <ProgressRing {label} {progress} />
        {/each}
      </div>
    <Divider />
    {#each WORK as [name, description]}
      <div class="Sidebar__work">
        <Icon {name} />
        <p>{description}</p>
      </div>
    {/each}
    <Divider />
    {#each PROGRAMMING as [label, progress]}
      <ProgressBar {label} {progress} />
    {/each}
    <Divider />
    {#each FRAMEWORKS as [label, progress]}
      <ProgressBar {label} {progress} />
    {/each}
    <Divider />
    {#each TOOLS as label}
      <IconLabel icon="checkmark" {label} />
    {/each}
  </section>
</aside>

<style lang="scss">
  @use "style/misc";

  .Sidebar {
    width: clamp(16rem, 20vw, 25rem);
    background: var(--color-surface-1);
    color: white;
    @include misc.shadow;

    section {
      display: flex;
      flex-direction: column;
      padding: var(--spacing-md-100);
    }

    &__content {
      gap: var(--spacing-nm-100);
    }

    &__pic {
      align-items: center;
      padding: var(--spacing-md-100);
      gap: var(--spacing-md-100);
      background: var(--color-surface-2);

      &__info {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm-100);
        align-items: center;
      }

      h4 {
        color: var(--color-light);
      }

      p {
        color: var(--color-accent-2);
      }
    }

    &__info {
        display: flex;
        justify-content: space-between;
        color: var(--color-light);
    }

    &__languages {
      display: flex;
      gap: var(--spacing-nm-100);
      justify-content: center;
      & :global(.ProgressRing) {
        flex: 0;
      }
    }

    &__work {
      display: flex;
      gap: var(--spacing-nm-100);
      align-items: center;
      --icon-size: var(--area-sm-50);
    }
  }
</style>
