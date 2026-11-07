<script>
  import { onMount, onDestroy } from 'svelte';
  import { invitationData } from '../data/invitation.js';

  export let autoPlay = false;

  const { musicUrl } = invitationData;
  let audioEl;
  let isPlaying = false;
  let synthActive = false;
  let synthInterval;
  let audioCtx;

  // Gentle backup chime synth via Web Audio API if MP3 is unreachable/blocked
  function playSynthMelody() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 392.00]; // C E G C A G
      let noteIdx = 0;

      synthActive = true;
      isPlaying = true;

      synthInterval = setInterval(() => {
        if (!synthActive) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[noteIdx % notes.length], audioCtx.currentTime);

        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 1.2);
        noteIdx++;
      }, 1400);
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }

  function stopSynth() {
    synthActive = false;
    if (synthInterval) clearInterval(synthInterval);
  }

  export function startAudio() {
    if (audioEl) {
      audioEl.play()
        .then(() => {
          isPlaying = true;
        })
        .catch((err) => {
          console.warn('Audio play failed, falling back to gentle synth:', err);
          playSynthMelody();
        });
    } else {
      playSynthMelody();
    }
  }

  export function toggleAudio() {
    if (isPlaying) {
      if (audioEl) audioEl.pause();
      stopSynth();
      isPlaying = false;
    } else {
      startAudio();
    }
  }

  $: if (autoPlay && !isPlaying) {
    startAudio();
  }

  onDestroy(() => {
    stopSynth();
  });
</script>

<div class="audio-controller">
  <audio
    bind:this={audioEl}
    src={musicUrl}
    loop
    preload="auto"
  ></audio>

  <button
    class="music-btn"
    class:playing={isPlaying}
    on:click={toggleAudio}
    aria-label="Toggle Musik Latar"
    title="Putar / Hentikan Musik"
  >
    {#if isPlaying}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    {:else}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.27 4.27c-.77.5-1.7.79-2.7.79-2.76 0-5-2.24-5-5 0-1 .29-1.93.79-2.7L4.27 3zM12 7v3.18l2 2V7h4V3h-6v4z"/>
      </svg>
    {/if}
  </button>
</div>

<style>
  .audio-controller {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 900;
  }

  .music-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--bg-card);
    border: 2px solid var(--accent);
    color: var(--accent-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .music-btn:hover {
    transform: scale(1.1);
  }

  .music-btn.playing {
    animation: rotateDisc 6s linear infinite;
    background: var(--primary);
    border-color: var(--primary-light);
    color: #ffffff;
  }

  @keyframes rotateDisc {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>

