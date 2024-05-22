<script lang="ts">
  export let width: Option<string> = null;
</script>

<img
  class="ProfilePicture"
  src="/armando/static/profile-pic.webp"
  alt="Profile"
  style:--profile-picture-width={width}
/>

<style lang="scss">
  .ProfilePicture {
    width: var(--profile-picture-width, var(--area-sm-100));
    aspect-ratio: 1 / 1;
    border-radius: var(--profile-picture-width, var(--area-sm-100));
    background: black;
    object-fit: cover;
  }
</style>
