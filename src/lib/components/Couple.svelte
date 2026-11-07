<script>
  import { invitationData } from '../data/invitation.js';
  const { groom, bride } = invitationData;
</script>

<!-- Slide: Mempelai Pria -->
<section class="section couple-section" id="groom">
  <div class="container">
    <h2 class="section-title">Mempelai Pria</h2>
    <p class="section-subtitle">The Groom</p>

    <div class="card person-card">
      <div class="photo-wrapper">
        <img src={groom.photo} alt={groom.name} class="person-photo" loading="lazy" />
        <div class="photo-ring"></div>
      </div>
      <h3 class="person-name font-serif">{groom.name}</h3>
      <p class="person-desc">{groom.sonOf}</p>
      {#if groom.instagram}
        <a
          href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          class="ig-link"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>{groom.instagram}</span>
        </a>
      {/if}
    </div>
  </div>
</section>

<!-- Slide: Mempelai Wanita -->
<section class="section couple-section" id="bride">
  <div class="container">
    <h2 class="section-title">Mempelai Wanita</h2>
    <p class="section-subtitle">The Bride</p>

    <div class="card person-card">
      <div class="photo-wrapper">
        <img src={bride.photo} alt={bride.name} class="person-photo" loading="lazy" />
        <div class="photo-ring"></div>
      </div>
      <h3 class="person-name font-serif">{bride.name}</h3>
      <p class="person-desc">{bride.daughterOf}</p>
      {#if bride.instagram}
        <a
          href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          class="ig-link"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>{bride.instagram}</span>
        </a>
      {/if}
    </div>
  </div>
</section>

<style>
  .person-card {
    width: 100%;
    max-width: 440px;
    padding: 2rem 1.5rem;
    margin: 0 auto;
    position: relative;
    border: 1px solid rgba(135, 168, 120, 0.3);
  }

  .photo-wrapper {
    position: relative;
    width: 135px;
    height: 135px;
    margin: 0 auto 1.25rem;
  }

  .person-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }

  .photo-ring {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px dashed var(--accent);
    animation: rotateSlow 24s linear infinite;
  }

  .person-name {
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }

  .person-desc {
    font-size: 0.88rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
    line-height: 1.6;
    padding: 0 0.5rem;
  }

  .ig-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: var(--primary-dark);
    text-decoration: none;
    padding: 0.35rem 0.85rem;
    border-radius: 20px;
    background: var(--primary-light);
    transition: all 0.2s ease;
  }

  .ig-link:hover {
    background: var(--primary);
    color: #ffffff;
  }

  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-height: 680px) {
    .photo-wrapper {
      width: 105px;
      height: 105px;
      margin-bottom: 0.75rem;
    }
    .person-card {
      padding: 1.25rem 1rem;
    }
    .person-name {
      font-size: 1.35rem;
    }
  }
</style>
