<script lang="ts" context="module">
  import Profile from "components/mobile/Profile.svelte";
  import Tools from "components/mobile/Tools.svelte";
  import Experience from "components/mobile/Experience.svelte";
  import Home from "components/mobile/Home.svelte";
</script>

<div class="MobileContent">
  <Home />
  <Profile />
  <Tools />
  <Experience />
</div>

<style lang="scss">
  @use "style/misc";
  @use "style/media";

  .MobileContent {
    display: none;
    @include media.smaller-than(desktop-sm) {
      display: block;

      & > :global(*) {
        scroll-snap-align: center;
        height: 100vh;
      }
    }
  }
</style>
