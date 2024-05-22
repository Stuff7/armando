<script lang="ts">
  import Contact from "components/Contact.svelte";

  export let showContact = false;
</script>

<div class="DownloadResume">
  {#if showContact}
    <Contact iconSize="var(--download-resume-icon-size, calc(var(--area-sm-50) * 0.7))" />
  {/if}
  <a
    class="DownloadResume__button"
    class:contact={showContact}
    href="/armando/static/Resume.pdf"
    download="Resume.pdf"
    target="_blank"
  >
    DOWNLOAD RESUME
  </a>
</div>

<style lang="scss">
  .DownloadResume {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;

    &__button {
      display: block;
      text-align: center;
      background: var(--color-accent-1);
      color: white;
      padding: var(--download-resume-padding, var(--spacing-nm-100) var(--spacing-lg-100));
      border-radius: var(--radius-nm-100);
      font-weight: bold;
      font-size: var(--download-resume-font-size, var(--p-nm-100));

      &.contact {
        border-radius: 0 0 var(--radius-nm-100) var(--radius-nm-100);
        width: 100%;
        font-size: var(--download-resume-font-size, var(--h-md-100));
        padding: var(--download-resume-padding, var(--spacing-md-200));
      }

      &:hover {
        background-color: var(--color-accent-2);
        color: var(--color-dark);
      }
    }
  }
</style>
