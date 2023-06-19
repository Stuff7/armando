<script lang="ts">
  import Icon from "components/Icon.svelte";

  export let label = "";
  export let icon: Option<IconName> = null;
</script>
<label for="">
  {#if icon}<Icon name={icon} />{/if}
  <p>{label}</p>
</label>

<style lang="scss">
  label {
    display: flex;
    gap: var(--spacing-nm-100);
    color: white;
    align-items: center;
    flex-flow: var(--icon-label-flow, row);
  }
</style>
