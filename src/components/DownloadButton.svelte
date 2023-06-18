<script lang="ts">
  export let url: string;
  export let filename: string;
</script>

<a
class="DownloadButton"
href={url}
download={filename}
target="_blank"
>
  <slot />
</a>

<style lang="scss">
  .DownloadButton {
    background: var(--color-accent-1);
    color: white;
    padding: var(--spacing-nm-100) var(--spacing-lg-100);
    border-radius: var(--radius-nm-100);
    font-weight: bold;
    font-size: var(--p-nm-100);

    &:hover {
      background-color: var(--color-accent-2);
      color: var(--color-dark);
    }
  }
</style>
