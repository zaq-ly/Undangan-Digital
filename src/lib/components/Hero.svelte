<script>
  import { onMount } from 'svelte';
  import { getGuestName } from '../utils/params.js';
  import { invitationData } from '../data/invitation.js';

  export let isOpen = false;
  export let onOpen = () => {};

  let guestName = 'Tamu Undangan';
  const heroImage = invitationData.gallery[0]?.src || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&auto=format&fit=crop&q=80';

  onMount(() => {
    guestName = getGuestName();
  });
</script>

<section class="hero-cover" class:opened={isOpen}>
  <div class="hero-inner">
    <!-- Top: Modern Architectural Arch Photo -->
    <div class="arch-photo-container">
      <div class="arch-frame hero-arch">
        <img src={heroImage} alt="Fajar & Aisyah" class="hero-img" />
        <div class="arch-overlay"></div>
      </div>
      <div class="arch-outline"></div>
    </div>

    <!-- Bottom: Editorial Typography & Guest Info -->
    <div class="hero-editorial">
      <span class="editorial-tag">THE WEDDING CELEBRATION</span>

      <h1 class="hero-couple font-editorial">
        Fajar <span class="ampersand">&</span> Aisyah
      </h1>

      <div class="date-strip">
        <span class="date-part">SUNDAY</span>
        <span class="date-dot">✦</span>
        <span class="date-part">20 . 12 . 2026</span>
        <span class="date-dot">✦</span>
        <span class="date-part">BEKASI</span>
      </div>

      <!-- Guest Card -->
      <div class="guest-box">
        <span class="guest-intro">DEAR VALUED GUEST</span>
        <h2 class="guest-name font-serif">{guestName}</h2>
        <p class="guest-note">We invite you to share in our special day</p>
      </div>

      <!-- Open Button -->
      <button type="button" class="btn btn-champagne btn-open" on:click={onOpen}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        Buka Undangan
      </button>
    </div>
  </div>
</section>

<style>
  .hero-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: transform 1s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.9s ease;
    overflow-y: auto;
    padding: 2rem 1rem;
  }

  .hero-cover.opened {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  .hero-inner {
    width: 100%;
    max-width: 460px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  /* Arch Photo Frame */
  .arch-photo-container {
    position: relative;
    width: 220px;
    height: 290px;
    margin: 0 auto;
  }

  .hero-arch {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    border: 1px solid var(--border-arch);
    box-shadow: var(--shadow-md);
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .arch-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(44, 38, 33, 0.35) 100%);
  }

  .arch-outline {
    position: absolute;
    inset: -8px;
    border-radius: 148px 148px 24px 24px;
    border: 1px solid var(--border-arch);
    z-index: 1;
    pointer-events: none;
  }

  /* Editorial Info */
  .hero-editorial {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
  }

  .editorial-tag {
    font-size: 0.68rem;
    letter-spacing: 0.3em;
    color: var(--accent-dark);
    font-weight: 600;
  }

  .hero-couple {
    font-size: 3.25rem;
    font-weight: 400;
    color: var(--text-main);
    letter-spacing: 0.04em;
    line-height: 1.1;
  }

  .ampersand {
    font-family: var(--font-serif);
    font-style: italic;
    color: var(--accent);
    font-weight: 400;
  }

  .date-strip {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    color: var(--text-muted);
    font-weight: 500;
    margin-top: -0.25rem;
  }

  .date-dot {
    color: var(--accent);
    font-size: 0.65rem;
  }

  /* Guest Card */
  .guest-box {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 1.25rem 1.75rem;
    width: 100%;
    max-width: 380px;
    box-shadow: var(--shadow-sm);
    margin-top: 0.5rem;
  }

  .guest-intro {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 0.22em;
    color: var(--text-muted);
    margin-bottom: 0.35rem;
  }

  .guest-name {
    font-size: 1.45rem;
    color: var(--text-main);
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 1.3;
  }

  .guest-note {
    font-size: 0.75rem;
    color: var(--text-light);
    margin-top: 0.25rem;
  }

  .btn-open {
    margin-top: 0.5rem;
    padding: 0.85rem 2.4rem;
  }

  @media (max-width: 480px) {
    .arch-photo-container {
      width: 190px;
      height: 250px;
    }
    .hero-couple {
      font-size: 2.75rem;
    }
    .guest-name {
      font-size: 1.3rem;
    }
  }
</style>
