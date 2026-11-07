<script>
  import { onMount } from 'svelte';
  import { getGuestName } from '../utils/params.js';

  export let isOpen = false;
  export let onOpen = () => {};

  let guestName = 'Tamu Undangan';

  onMount(() => {
    guestName = getGuestName();
  });
</script>

<section class="hero-cover" class:opened={isOpen}>
  <div class="hero-bg"></div>
  <div class="hero-pattern"></div>

  <div class="hero-content">
    <div class="ornament-top">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(201,168,76,0.15)" stroke="#C9A84C"/>
      </svg>
    </div>

    <p class="hero-subtitle">THE WEDDING CELEBRATION OF</p>

    <h1 class="hero-names">Fajar & Aisyah</h1>

    <div class="gold-divider">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>

    <p class="hero-date">Minggu, 20 Desember 2026</p>

    <div class="guest-card">
      <span class="guest-label">Kepada Yth. Bapak/Ibu/Saudara/i:</span>
      <h3 class="guest-name">{guestName}</h3>
      <p class="guest-sub">Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
    </div>

    <button class="btn btn-gold btn-open" on:click={onOpen}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      Buka Undangan
    </button>
  </div>
</section>

<style>
  .hero-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #263327;
    color: #ffffff;
    transition: transform 0.9s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.8s ease;
  }

  .hero-cover.opened {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at center, rgba(38, 51, 39, 0.7) 0%, rgba(20, 27, 21, 0.95) 100%),
      url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.65);
  }

  .hero-pattern {
    position: absolute;
    inset: 16px;
    border: 1px solid rgba(201, 168, 76, 0.35);
    border-radius: 12px;
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 2rem 1.5rem;
    max-width: 500px;
    width: 100%;
  }

  .ornament-top {
    margin-bottom: 1rem;
    display: inline-block;
    animation: pulseSlow 3s infinite ease-in-out;
  }

  .hero-subtitle {
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    color: #e0d0a8;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .hero-names {
    font-family: var(--font-script);
    font-size: 3.5rem;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }

  .hero-date {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: 0.1em;
    color: #e2e8e0;
    margin-bottom: 2rem;
  }

  .guest-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(201, 168, 76, 0.35);
    border-radius: 14px;
    padding: 1.25rem 1rem;
    margin-bottom: 2rem;
  }

  .guest-label {
    display: block;
    font-size: 0.8rem;
    color: #cbd5cb;
    margin-bottom: 0.35rem;
  }

  .guest-name {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    font-weight: 700;
    color: #f7df94;
    letter-spacing: 0.02em;
    line-height: 1.3;
  }

  .guest-sub {
    font-size: 0.72rem;
    color: #9eb19e;
    margin-top: 0.35rem;
  }

  .btn-open {
    padding: 0.85rem 2.2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
  }

  @keyframes pulseSlow {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  @media (max-width: 480px) {
    .hero-names {
      font-size: 2.85rem;
    }
    .guest-name {
      font-size: 1.4rem;
    }
  }
</style>

