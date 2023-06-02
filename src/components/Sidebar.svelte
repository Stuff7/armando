<script lang="ts">
  import ProgressBar from "components/ProgressBar.svelte";
  import Divider from "components/Divider.svelte";
  import IconLabel from "./IconLabel.svelte";
  import Icon from "components/Icon.svelte";
  import ProgressRing from "components/ProgressRing.svelte";
</script>

<aside class="Sidebar">
  <section class="Sidebar__pic">
    <span />
    <div class="Sidebar__pic__info">
      <h4>Armando Munoz</h4>
      <p>Full-stack Developer</p>
      <p>Software Engineer</p>
    </div>
  </section>
  <section class="Sidebar__content">
    <div class="Sidebar__info">
      <strong>Residence:</strong>
      <p>Mexico</p>
    </div>
    <div class="Sidebar__info">
      <strong>Age:</strong>
      <p>26</p>
    </div>
    <Divider />
      <ProgressRing progress={100} />
      <ProgressRing progress={100} />
    <Divider />
    <div class="Sidebar__work">
      <Icon name="maestro" size="4vw" />
      <p>Worked at Maestro Interactive for 3 years</p>
    </div>
    <Divider />
    <ProgressBar label="Typescript / Javascript" progress={100} />
    <ProgressBar label="CSS / SASS" progress={100} />
    <ProgressBar label="Rust" progress={80} />
    <ProgressBar label="Python / Mojo" progress={80} />
    <Divider />
    <ProgressBar label="React / Svelte" progress={100} />
    <ProgressBar label="SvelteKit / Next.js" progress={100} />
    <ProgressBar label="Express / Koa" progress={80} />
    <ProgressBar label="Axum / Rocket" progress={80} />
    <ProgressBar label="MongoDB / SQL" progress={80} />
    <Divider />
    <IconLabel icon="checkmark" label="Vite, Webpack, Gulp" />
    <IconLabel icon="checkmark" label="Tailwind, Styled components, Emotion, MUI" />
    <IconLabel icon="checkmark" label="Deno, Node" />
    <IconLabel icon="checkmark" label="Firebase" />
    <IconLabel icon="checkmark" label="Jest" />
    <IconLabel icon="checkmark" label="Storybook" />
    <IconLabel icon="checkmark" label="REST, GraphQL" />
    <IconLabel icon="checkmark" label="SEO, SSR, serverless" />
  </section>
</aside>

<style lang="scss">
  .Sidebar {
    width: clamp(16rem, 20vw, 25rem);
    background: var(--color-surface-1);
    color: white;

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

      span {
        width: var(--area-sm-100);
        aspect-ratio: 1 / 1;
        border-radius: var(--area-sm-100);
        background: black;
      }

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

    &__work {
      display: flex;
      gap: var(--spacing-nm-100);
      align-items: center;
    }
  }
</style>
