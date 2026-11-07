<script>
  import { onMount, onDestroy } from 'svelte';
  import { invitationData } from '../data/invitation.js';

  const { events, eventDate } = invitationData;

  let days = '00';
  let hours = '00';
  let minutes = '00';
  let seconds = '00';
  let timerInterval;

  function updateCountdown() {
    const target = new Date(eventDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      days = '00';
      hours = '00';
      minutes = '00';
      seconds = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    days = d < 10 ? '0' + d : String(d);
    hours = h < 10 ? '0' + h : String(h);
    minutes = m < 10 ? '0' + m : String(m);
    seconds = s < 10 ? '0' + s : String(s);
  }

  const calTitle = encodeURIComponent('Pernikahan Fajar & Aisyah');
  const calDetails = encodeURIComponent('Akad Nikah & Resepsi Pernikahan Fajar & Aisyah');
  const calLocation = encodeURIComponent('Grand Ballroom Hotel Horison Bekasi');
  const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=20261220T010000Z/20261220T100000Z&details=${calDetails}&location=${calLocation}`;

  onMount(() => {
    updateCountdown();
    timerInterval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    if (timerInterval) clearInterval(timerInterval);
  });
</script>

<section class="section event-section" id="event">
  <div class="container">
    <span class="section-label">SAVE THE DATE</span>
    <h2 class="section-title">Waktu & Tempat</h2>

    <!-- Countdown Timer Card -->
    <div class="countdown-editorial card">
      <span class="countdown-header-tag">COUNTING DOWN THE DAYS</span>
      <p class="target-date-display font-serif">Minggu, 20 Desember 2026</p>

      <div class="countdown-boxes">
        <div class="time-block">
          <span class="time-num font-editorial">{days}</span>
          <span class="time-label">HARI</span>
        </div>
        <div class="time-sep">:</div>
        <div class="time-block">
          <span class="time-num font-editorial">{hours}</span>
          <span class="time-label">JAM</span>
        </div>
        <div class="time-sep">:</div>
        <div class="time-block">
          <span class="time-num font-editorial">{minutes}</span>
          <span class="time-label">MENIT</span>
        </div>
        <div class="time-sep">:</div>
        <div class="time-block">
          <span class="time-num font-editorial">{seconds}</span>
          <span class="time-label">DETIK</span>
        </div>
      </div>

      <a href={calUrl} target="_blank" rel="noopener noreferrer" class="btn btn-champagne btn-cal">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Simpan ke Google Calendar
      </a>
    </div>

    <!-- Event Cards Grid -->
    <div class="events-deck">
      {#each events as event}
        <div class="card event-editorial-card">
          <div class="arch-tag-header">
            <span class="arch-tag-icon">✦</span>
          </div>

          <h3 class="event-name font-editorial">{event.title}</h3>
          <div class="arch-divider"><span>✦</span></div>

          <div class="event-details">
            <div class="detail-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{event.dateText}</span>
            </div>

            <div class="detail-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{event.timeText}</span>
            </div>

            <div class="detail-item venue-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>{event.place}</strong>
                <p class="address-text">{event.address}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .event-section {
    background-color: var(--bg-subtle);
  }

  /* Countdown Card */
  .countdown-editorial {
    max-width: 520px;
    margin: 0 auto 3rem;
    padding: 2.75rem 2rem;
    text-align: center;
    border: 1px solid var(--border-arch);
    border-radius: 24px;
    background: #FFFFFF;
  }

  .countdown-header-tag {
    font-size: 0.65rem;
    letter-spacing: 0.28em;
    color: var(--accent-dark);
    font-weight: 600;
  }

  .target-date-display {
    font-size: 1.45rem;
    font-weight: 600;
    color: var(--text-main);
    margin: 0.5rem 0 1.75rem;
  }

  .countdown-boxes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 2rem;
  }

  .time-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 65px;
  }

  .time-num {
    font-size: 2.75rem;
    line-height: 1;
    color: var(--primary-dark);
  }

  .time-label {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    color: var(--text-muted);
    margin-top: 0.35rem;
    font-weight: 600;
  }

  .time-sep {
    font-size: 2rem;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 1rem;
  }

  .btn-cal {
    padding: 0.8rem 1.85rem;
  }

  /* Events Deck */
  .events-deck {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 520px;
    margin: 0 auto;
  }

  .event-editorial-card {
    padding: 2.75rem 2rem;
    border-radius: 24px;
    text-align: center;
    position: relative;
    border: 1px solid var(--border-subtle);
  }

  .arch-tag-header {
    width: 44px;
    height: 44px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    border: 1px solid var(--border-arch);
    background: var(--bg-main);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
  }

  .event-name {
    font-size: 2rem;
    font-weight: 400;
    color: var(--text-main);
  }

  .event-details {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
    text-align: left;
    max-width: 420px;
    margin: 0 auto;
  }

  .detail-item {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    font-size: 0.95rem;
    color: var(--text-main);
  }

  .detail-item svg {
    color: var(--accent-dark);
    flex-shrink: 0;
    margin-top: 3px;
  }

  .venue-item strong {
    display: block;
    font-size: 1rem;
    color: var(--text-main);
  }

  .address-text {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 0.25rem;
    line-height: 1.55;
  }

  @media (max-width: 480px) {
    .countdown-editorial {
      padding: 2rem 1.25rem;
    }
    .time-num {
      font-size: 2.2rem;
    }
    .time-block {
      min-width: 50px;
    }
    .event-editorial-card {
      padding: 2rem 1.25rem;
    }
    .event-name {
      font-size: 1.7rem;
    }
  }
</style>
