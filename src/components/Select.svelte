<script lang="ts">
  import Icon from "./Icon.svelte";

  type SelectOption = $$Generic<Record<string, unknown>>;
  export let options: SelectOption[];
  export let selectedIndex = 0;
  export let labelKey = "label" as keyof SelectOption;
  export let valueKey = "value" as keyof SelectOption;
  export let selected = options[selectedIndex];
  export let style: Option<string> = null;

  $: selected = options[selectedIndex];
</script>

<div class="Select" {style}>
  {#if options.length}
    <select bind:value={selectedIndex}>
      {#each options as option, i}
        <option value={i} selected={selectedIndex === i}>
          {option[labelKey]}
        </option>
      {/each}
    </select>
  {/if}
  <button>
    <slot {selected}>{selected[valueKey]}</slot>
    <Icon name="arrow" size="var(--p-sm-100)" />
  </button>
</div>

<style lang="scss">
  .Select {
    position: relative;
    width: var(--select-width, max-content);

    button {
      background: white;
      border: var(--select-border, 0);
      border-radius: var(--select-border-radius, var(--radius-nm-100));
      color: var(--color-dark);
      padding: var(--spacing-sm-100) var(--spacing-nm-100);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-nm-100);
      font-size: var(--h-nm-100);
      pointer-events: none;
      width: var(--select-width, max-content);

      & :global(.Icon:last-child) {
        rotate: 90deg;
      }
    }

    & select:focus + button {
      background: var(--color-light);
    }

    select {
      appearance: none;
      opacity: 0;
      position: absolute;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1;
      pointer-events: all;
      cursor: pointer;
    }
  }
</style>
