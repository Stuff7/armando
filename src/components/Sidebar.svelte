<script lang="ts" context="module">
  import FrameworkGraphs from "components/FrameworkGraphs.svelte";
  import Divider from "components/Divider.svelte";
  import ToolList from "components/ToolList.svelte";
  import Icon from "components/Icon.svelte";
  import LanguageGraphs from "components/LanguageGraphs.svelte";
  import DownloadResume from "components/DownloadResume.svelte";
  import ProfilePicture from "components/ProfilePicture.svelte";
  import ProgrammingGraphs from "components/ProgrammingGraphs.svelte";

  const INFO = [
    ["Residence", "Mexico"],
    ["Age", Math.floor((Date.now() - (new Date("jan 28, 1997")).getTime()) / 1000 / 60 / 60 / 24 / 30 / 12)],
  ];

  const WORK = [
    ["maestro", "Worked at Maestro Interactive for 3 years"],
    ["paxico", "Worked at Paxico Technologies for 5 years"],
    ["elephant", "Worked as a freelance for 2 years"],
  ] as const;
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
    <LanguageGraphs />
    <Divider />
    {#each WORK as [name, description]}
      <div class="Sidebar__work">
        <Icon {name} />
        <p>{description}</p>
      </div>
    {/each}
    <Divider />
    <ProgrammingGraphs />
    <Divider />
    <FrameworkGraphs />
    <Divider />
    <ToolList />
  </section>
</aside>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .Sidebar {
    display: none;
    @include media.larger-than(desktop-sm) {
      display: block;
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

      &__work {
        display: flex;
        gap: var(--spacing-nm-100);
        align-items: center;
        --icon-size: var(--area-sm-50);
      }
    }
  }
</style>
