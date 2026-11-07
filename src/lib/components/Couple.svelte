<script>
  import { invitationData } from '../data/invitation.js';
  const { groom, bride } = invitationData;
</script>

<section class="section couple-section" id="couple">
  <div class="container">
    <span class="section-label">THE HAPPY COUPLE</span>
    <h2 class="section-title">Mempelai</h2>

    <div class="couple-editorial-wrap">
      <!-- Mempelai Pria -->
      <div class="couple-card card">
        <div class="arch-portrait">
          <div class="arch-frame person-arch">
            <img src={groom.photo} alt={groom.name} class="portrait-img" loading="lazy" />
          </div>
          <div class="arch-ring"></div>
        </div>

        <span class="role-badge">THE GROOM</span>
        <h3 class="couple-name font-editorial">{groom.name}</h3>
        <p class="couple-parents">{groom.sonOf}</p>

        {#if groom.instagram}
          <a
            href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            class="ig-pill"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>{groom.instagram}</span>
          </a>
        {/if}
      </div>

      <!-- Ampersand -->
      <div class="editorial-ampersand font-editorial">
        <span>&</span>
      </div>

      <!-- Mempelai Wanita -->
      <div class="couple-card card">
        <div class="arch-portrait">
          <div class="arch-frame person-arch">
            <img src={bride.photo} alt={bride.name} class="portrait-img" loading="lazy" />
          </div>
          <div class="arch-ring"></div>
        </div>

        <span class="role-badge">THE BRIDE</span>
        <h3 class="couple-name font-editorial">{bride.name}</h3>
        <p class="couple-parents">{bride.daughterOf}</p>

        {#if bride.instagram}
          <a
            href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            class="ig-pill"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>{bride.instagram}</span>
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .couple-section {
    background-color: var(--bg-subtle);
  }

  .couple-editorial-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
  }

  .couple-card {
    width: 100%;
    max-width: 440px;
    padding: 3rem 1.75rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Arch Portrait */
  .arch-portrait {
    position: relative;
    width: 160px;
    height: 220px;
    margin-bottom: 1.75rem;
  }

  .person-arch {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    border-radius: 100px 100px 14px 14px;
    border: 1px solid var(--border-arch);
    box-shadow: var(--shadow-sm);
  }

  .portrait-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .arch-ring {
    position: absolute;
    inset: -6px;
    border-radius: 106px 106px 20px 20px;
    border: 1px solid var(--border-arch);
    pointer-events: none;
    z-index: 1;
  }

  .role-badge {
    font-size: 0.65rem;
    letter-spacing: 0.28em;
    color: var(--accent-dark);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .couple-name {
    font-size: 2.1rem;
    font-weight: 400;
    color: var(--text-main);
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .couple-parents {
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 1.25rem;
    max-width: 340px;
  }

  .ig-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.8rem;
    color: var(--primary-dark);
    text-decoration: none;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    border: 1px solid var(--border-subtle);
    background: var(--bg-main);
    transition: all 0.2s ease;
  }

  .ig-pill:hover {
    border-color: var(--accent);
    background: var(--accent-light);
  }

  .editorial-ampersand {
    font-size: 3.5rem;
    color: var(--accent);
    line-height: 1;
    margin: -0.5rem 0;
  }

  @media (min-width: 768px) {
    .couple-editorial-wrap {
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      gap: 1.5rem;
    }
    .couple-card {
      max-width: 320px;
    }
    .editorial-ampersand {
      align-self: center;
      margin: 0;
    }
  }
</style>
