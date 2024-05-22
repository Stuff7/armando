<script lang="ts" context="module">
  import tooltip from "actions/tooltip";
  import Icon from "components/Icon.svelte";
  import Tooltip from "components/Tooltip.svelte";
  import { copyToClipboard } from "utils/dom";

  const LINKS = [
    ["https://github.com/Stuff7", "/Stuff7", "github"],
    ["https://www.linkedin.com/in/armandomu%C3%B1oz", "/ArmandoMuñoz", "linkedin"],
  ] as const;
</script>

<script lang="ts">
  export let iconSize = "var(--area-sm-50)";

  const CLIPBOARD = [
    [crypto.randomUUID(), "phone", "+52 812 756 9774"],
    [crypto.randomUUID(), "email", "cuentafrst@gmail.com"],
  ] as const;

  let copied = false;
</script>

<section class="Contact" style:--icon-size={iconSize}>
  {#each CLIPBOARD as [id, icon, value]}
    <button
      data-tooltip-id="clipboard-{id}"
      on:click={() => {
        copyToClipboard(value);
        copied = true;
      }}
      on:tooltiphide={() => copied = false}
      use:tooltip
    ><Icon name={icon} /></button>
    <Tooltip for="clipboard-{id}">
      <div class="Contact__clipboard-tooltip">
        <strong class:copied>{copied ? "Copied!" : "Copy to clipboard"}</strong>
        <p>{value}</p>
      </div>
    </Tooltip>
  {/each}
  {#each LINKS as [href, tooltipText, icon]}
    <a
      {href}
      target="_blank"
      data-tooltip={tooltipText}
      use:tooltip
    ><Icon name={icon} /></a>
  {/each}
</section>

<style lang="scss">
  @use "style/media";
  .Contact {
    display: flex;
    justify-content: space-between;
    background: white;
    --icon-color: var(--color-dark);

    &__clipboard-tooltip {
      display: flex;
      flex-direction: column;

      strong {
        color: var(--color-accent-2);

        &.copied {
          color: var(--color-accent-3)
        }
      }
    }

    @include media.larger-than(desktop-sm) {
      border-radius: 0 0 var(--radius-md-100) var(--radius-md-100);
      padding: var(--spacing-lg-100);
    }

    @include media.smaller-than(desktop-sm) {
      border-radius: var(--radius-nm-100) var(--radius-nm-100) 0 0;
      padding: var(--spacing-nm-100) var(--spacing-lg-100);
    }
  }
</style>
