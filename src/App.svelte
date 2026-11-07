<script>
  import Hero from './lib/components/Hero.svelte';
  import Opening from './lib/components/Opening.svelte';
  import Couple from './lib/components/Couple.svelte';
  import Story from './lib/components/Story.svelte';
  import Event from './lib/components/Event.svelte';
  import Location from './lib/components/Location.svelte';
  import Gallery from './lib/components/Gallery.svelte';
  import Wishes from './lib/components/Wishes.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Audio from './lib/components/Audio.svelte';

  let isOpened = false;
  let audioRef;

  function handleOpen() {
    isOpened = true;
    if (audioRef) {
      audioRef.startAudio();
    }
  }
</script>

<main class="app-wrapper">
  <!-- Cover / Hero Overlay -->
  <Hero isOpen={isOpened} onOpen={handleOpen} />

  <!-- Main Invitation Body -->
  <div class="content-body" class:locked={!isOpened}>
    <Opening />
    <Couple />
    <Story />
    <Event />
    <Location />
    <Gallery />
    <Wishes />
    <Footer />
  </div>

  <!-- Background Music Player -->
  {#if isOpened}
    <Audio bind:this={audioRef} autoPlay={true} />
  {/if}
</main>

<style>
  .app-wrapper {
    position: relative;
    min-height: 100vh;
  }

  .content-body.locked {
    height: 100vh;
    overflow: hidden;
  }
</style>
