<script>
  import { invitationData } from '../data/invitation.js';
  const { groom, bride } = invitationData;
</script>

<footer class="footer-section">
  <div class="container">
    <div class="footer-card card">
      <div class="ornament-bottom">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgba(201,168,76,0.15)" stroke="#C9A84C"/>
        </svg>
      </div>

      <p class="closing-text font-serif">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
      </p>

      <p class="wassalam">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>

      <div class="gold-divider"></div>

      <p class="family-label">Kami yang berbahagia,</p>
      <h3 class="couple-names font-script">{groom.shortName} & {bride.shortName}</h3>
      <p class="family-members">Beserta segenap keluarga besar kedua mempelai</p>
    </div>

    <div class="footer-credit">
      <p>© 2026 Undangan Digital. Dibuat dengan cinta & kebahagiaan.</p>
    </div>
  </div>
</footer>

<style>
  .footer-section {
    min-height: 100vh;
    min-height: 100dvh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    text-align: center;
    box-sizing: border-box;
  }

  .footer-card {
    padding: 2rem 1.5rem;
    border: 1px solid rgba(201, 168, 76, 0.35);
    background: linear-gradient(180deg, #ffffff 0%, #faf8f2 100%);
    max-width: 480px;
    margin: 0 auto;
  }

  .ornament-bottom {
    margin-bottom: 1.25rem;
  }

  .closing-text {
    font-size: 1.1rem;
    font-style: italic;
    color: var(--text-dark);
    max-width: 500px;
    margin: 0 auto 1.25rem;
    line-height: 1.7;
  }

  .wassalam {
    font-weight: 600;
    color: var(--primary-dark);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .family-label {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
  }

  .couple-names {
    font-size: 3.25rem;
    color: var(--text-dark);
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }

  .family-members {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .footer-credit {
    margin-top: 2rem;
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  @media (max-width: 480px) {
    .couple-names {
      font-size: 2.65rem;
    }
  }
</style>

