<script>
  import { invitationData } from '../data/invitation.js';
  const { groom, bride } = invitationData;
</script>

<footer class="footer-section">
  <div class="container">
    <div class="footer-editorial-card card">
      <div class="arch-star">
        <span>✦</span>
      </div>

      <p class="closing-quote font-serif">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami.
      </p>

      <p class="wassalam-text">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>

      <div class="arch-divider">
        <span>✦</span>
      </div>

      <span class="family-tag">KAMI YANG BERBAHAGIA</span>
      <h3 class="couple-closing-names font-editorial">{groom.shortName} & {bride.shortName}</h3>
      <p class="family-note">Beserta seluruh keluarga besar kedua mempelai</p>
    </div>

    <div class="footer-brand">
      <p>THE WEDDING CELEBRATION OF FAJAR & AISYAH • 2026</p>
    </div>
  </div>
</footer>

<style>
  .footer-section {
    padding: 5rem 0 3rem;
    text-align: center;
    background-color: var(--bg-subtle);
  }

  .footer-editorial-card {
    padding: 3.5rem 2rem;
    border-radius: 28px;
    border: 1px solid var(--border-subtle);
    max-width: 520px;
    margin: 0 auto;
    background: #FFFFFF;
  }

  .arch-star {
    font-size: 1.5rem;
    color: var(--accent);
    margin-bottom: 1.25rem;
  }

  .closing-quote {
    font-size: 1.15rem;
    font-style: italic;
    color: var(--text-main);
    line-height: 1.85;
    max-width: 440px;
    margin: 0 auto 1.5rem;
  }

  .wassalam-text {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--primary-dark);
  }

  .family-tag {
    display: block;
    font-size: 0.68rem;
    letter-spacing: 0.28em;
    color: var(--accent-dark);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .couple-closing-names {
    font-size: 3rem;
    font-weight: 400;
    color: var(--text-main);
    line-height: 1.15;
    margin-bottom: 0.5rem;
  }

  .family-note {
    font-size: 0.88rem;
    color: var(--text-muted);
  }

  .footer-brand {
    margin-top: 2.5rem;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--text-muted);
  }

  @media (max-width: 480px) {
    .footer-editorial-card {
      padding: 2.5rem 1.25rem;
    }
    .closing-quote {
      font-size: 1.02rem;
    }
    .couple-closing-names {
      font-size: 2.5rem;
    }
  }
</style>
