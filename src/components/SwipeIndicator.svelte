<script lang="ts" context="module">
  import Icon from "components/Icon.svelte";
</script>

<div class="SwipeIndicator">
  <Icon name="chevron" /><slot>Swipe</slot><Icon name="chevron" />
</div>

<style lang="scss">
  .SwipeIndicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5vh;
    color: white;
    font-size: var(--p-md-300);
    --icon-size: var(--spacing-lg-100);
    --icon-color: var(--color-accent-1);

    & :global(.Icon) {
      animation: point-up 1s ease-in-out infinite;
    }
  }
</style>
