<script lang="ts" context="module">
  import tooltip from "actions/tooltip";
  import Icon from "components/Icon.svelte";
  import Tooltip from "components/Tooltip.svelte";
  import { copyToClipboard } from "utils/dom";

  const CLIPBOARD = [
    ["phone", "+52 812 756 9774"],
    ["email", "cuentafrst@gmail.com"],
  ] as const;

  const LINKS = [
    ["https://github.com/Stuff7", "/Stuff7", "github"],
    ["https://www.linkedin.com/in/armandomu%C3%B1oz", "/ArmandoMuñoz", "linkedin"],
  ] as const;
</script>

<script lang="ts">
  let copied = false;
</script>

<section class="Contact">
  {#each CLIPBOARD as [icon, value]}
    <button
      data-tooltip-id="clipboard-{icon}"
      on:click={() => {
        copyToClipboard(value);
        copied = true;
      }}
      on:tooltiphide={() => copied = false}
      use:tooltip
    ><Icon name={icon} /></button>
    <Tooltip for="clipboard-{icon}">
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
  .Contact {
    display: flex;
    justify-content: space-between;
    background: white;
    padding: var(--spacing-lg-100);
    border-radius: 0 0 var(--radius-md-100) var(--radius-md-100);
    --icon-color: var(--color-dark);
    --icon-size: var(--area-sm-50);

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
  }
</style>
