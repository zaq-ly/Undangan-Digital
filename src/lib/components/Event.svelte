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

  // Google Calendar URL
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
    <h2 class="section-title">Waktu & Tempat</h2>
    <p class="section-subtitle">Save The Date</p>

    <!-- Countdown Timer -->
    <div class="countdown-container card">
      <p class="countdown-label">Menghitung Hari Menuju Hari Bahagia</p>
      <div class="countdown-grid">
        <div class="timer-box">
          <span class="timer-num font-serif">{days}</span>
          <span class="timer-unit">Hari</span>
        </div>
        <div class="timer-box">
          <span class="timer-num font-serif">{hours}</span>
          <span class="timer-unit">Jam</span>
        </div>
        <div class="timer-box">
          <span class="timer-num font-serif">{minutes}</span>
          <span class="timer-unit">Menit</span>
        </div>
        <div class="timer-box">
          <span class="timer-num font-serif">{seconds}</span>
          <span class="timer-unit">Detik</span>
        </div>
      </div>

      <a href={calUrl} target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-calendar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Simpan ke Kalender
      </a>
    </div>

    <!-- Event Cards -->
    <div class="events-grid">
      {#each events as event}
        <div class="card event-card">
          <div class="event-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <h3 class="event-title font-serif">{event.title}</h3>
          <div class="gold-divider"></div>

          <div class="event-info">
            <div class="info-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{event.dateText}</span>
            </div>

            <div class="info-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{event.timeText}</span>
            </div>

            <div class="info-row venue-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>{event.place}</strong>
                <p class="event-address">{event.address}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .countdown-container {
    background: linear-gradient(135deg, #ffffff 0%, #f6f9f4 100%);
    border: 1px solid var(--accent);
    padding: 2.25rem 1.5rem;
    margin-bottom: 2.5rem;
  }

  .countdown-label {
    font-size: 0.95rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
  }

  .countdown-grid {
    display: flex;
    justify-content: center;
    gap: 0.85rem;
    margin-bottom: 1.75rem;
  }

  .timer-box {
    background: #ffffff;
    border: 1px solid rgba(135, 168, 120, 0.3);
    border-radius: 12px;
    padding: 0.85rem 0.5rem;
    min-width: 68px;
    box-shadow: var(--shadow-sm);
  }

  .timer-num {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-dark);
    line-height: 1;
    margin-bottom: 0.25rem;
  }

  .timer-unit {
    font-size: 0.72rem;
    text-transform: uppercase;
    color: var(--text-muted);
    letter-spacing: 0.1em;
  }

  .btn-calendar {
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
  }

  .events-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .event-card {
    padding: 2.5rem 1.75rem;
    border: 1px solid rgba(135, 168, 120, 0.3);
  }

  .event-icon-box {
    width: 56px;
    height: 56px;
    margin: 0 auto 1rem;
    background: var(--primary-light);
    color: var(--primary-dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .event-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-dark);
  }

  .event-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    max-width: 420px;
    margin: 1rem auto 0;
  }

  .info-row {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    color: var(--text-dark);
    font-size: 0.95rem;
  }

  .info-row svg {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .venue-row strong {
    display: block;
    color: var(--text-dark);
  }

  .event-address {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 0.2rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    .timer-box {
      min-width: 58px;
      padding: 0.75rem 0.35rem;
    }
    .timer-num {
      font-size: 1.65rem;
    }
    .countdown-grid {
      gap: 0.5rem;
    }
  }
</style>
