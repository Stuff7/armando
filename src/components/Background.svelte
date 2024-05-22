<script lang="ts">
  import Icon from "components/Icon.svelte";
</script>

<div class="Background__logo">
  <Icon name="elephant" />
  <span>I can design :D</span>
</div>
<div class="Background">
  <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <g style="mix-blend-mode:overlay">
        <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </g>
    </defs>
    <g class="parallax">
      <use xlink:href="#wave" x="48" y="0" fill="#1E1E2855" />
      <use xlink:href="#wave" x="48" y="3" fill="#1E1E2844" />
      <use xlink:href="#wave" x="48" y="5" fill="#1E1E283D" />
      <use xlink:href="#wave" x="48" y="7" fill="#1E1E2822" />
    </g>
  </svg>
</div>

<style lang="scss">
  @use "style/media";

  .Background {
    top: 0;
    left: 0;
    z-index: -2;
    height: 100vh;
    width: 100vw;

    &__logo {
      --icon-color: var(--color-dark);
      --icon-size: var(--area-nm-50);
      position: absolute;
      z-index: -1;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-nm-100);
      span {
        padding-left: calc(var(--area-nm-50) / 4);
        font: var(--h-nm-200) var(--font-title);
      }
    }

    @include media.larger-than(desktop-sm) {
      background: linear-gradient(180deg, #EC1D25 0%, #1E1E28 64.58%);
      position: fixed;

      &__logo {
        right: calc(var(--spacing-lg-100) * 3);
        top: calc(var(--spacing-lg-200) * 3);
      }
    }

    @include media.smaller-than(desktop-sm) {
      background: linear-gradient(180deg, #1E1E28 0%, #EC1D25 25%, #EC1D25 50%, #1E1E28 100%);
      position: absolute;

      &__logo {
        right: 1vw;
        top: 48vh;
      }
    }

    @include media.smaller-than(phone) {
      &__logo {
        top: 38vh;
      }
    }

    @include media.smaller-than(desktop-sm, $landscape: true) {
      &__logo {
        right: 10vw;
        top: 12vh;
      }
    }
  }

  .waves {
    width: 100%;
    height: 50vh;

    @include media.larger-than(desktop-sm) {
      position: relative;
      margin-top: var(--area-nm-50);
    }

    @include media.smaller-than(desktop-sm) {
      position: absolute;
      bottom: 0;
    }
  }

  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }
</style>
